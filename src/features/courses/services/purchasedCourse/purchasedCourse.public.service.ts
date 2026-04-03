import { Injectable, NotFoundException } from '@nestjs/common';
import { PurchasedCourse } from '../../entities/purchasedCourse.entity';
import { plainToInstance } from 'class-transformer';
import { PurchasedCourseListPublicDto } from '../../dtos/puchasedCourse/public/purchasedCourse.list.public.dto';

@Injectable()
export class PurchasedCoursePublicService{
  async getAll(){
    const purchasedCourse = await PurchasedCourse.find()
    return plainToInstance(PurchasedCourseListPublicDto,purchasedCourse,{excludeExtraneousValues :true})
  }

  async getOne(id : number){
    const purchasedCourse = await PurchasedCourse.findOneBy({ id });
    if(!purchasedCourse){
      throw new NotFoundException('purchaseCourse with given id not found')
    }

    return purchasedCourse
  }
}