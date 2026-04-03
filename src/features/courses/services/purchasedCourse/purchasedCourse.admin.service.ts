import { Injectable, NotFoundException } from '@nestjs/common';
import { PurchasedCourseCreateAdminDto } from '../../dtos/puchasedCourse/admin/purchasedCourse.create.admin.dto';
import { PurchasedCourse } from '../../entities/purchasedCourse.entity';
import { plainToInstance } from 'class-transformer';
import { PurchasedCourseListAdminDto } from '../../dtos/puchasedCourse/admin/purchasedCourse.list.admin.dto';
import { PurchasedCoursesUpdateAdminDto } from '../../dtos/puchasedCourse/admin/purchasedCourse.update.admin.dto';

@Injectable()
export class PurchasedCourseAdminService{
  async create(payload : PurchasedCourseCreateAdminDto){
    const purchasedCourse = PurchasedCourse.create(payload)
    await PurchasedCourse.save(purchasedCourse)
    return purchasedCourse
  }

  async getAll(){
    const purchasedCourse = await PurchasedCourse.find()
    return plainToInstance(PurchasedCourseListAdminDto,purchasedCourse,{excludeExtraneousValues :true})
  }

  async getOne(id : number){
    const purchasedCourse = await PurchasedCourse.findOneBy({ id });
    if(!purchasedCourse){
      throw new NotFoundException('purchaseCourse with given id not found')
    }

    return purchasedCourse
  }

  async update(id : number,payload : PurchasedCoursesUpdateAdminDto){
    const purchasedCourse = await PurchasedCourse.findOneBy({ id });
    if(!purchasedCourse){
      throw new NotFoundException('purchaseCourse with given id not found')
    }
    Object.assign(
      purchasedCourse,
      Object.fromEntries(
        Object.entries(payload).filter(([key,value]) => value)
      )
    )
    await PurchasedCourse.save(purchasedCourse)
    return purchasedCourse
  }

  async delete(id : number){
    const purchasedCourse = await PurchasedCourse.findOneBy({ id });
    if(!purchasedCourse){
      throw new NotFoundException('purchaseCourse with given id not found')
    }

    await PurchasedCourse.remove(purchasedCourse)
  }
}