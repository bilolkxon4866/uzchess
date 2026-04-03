import { Injectable, NotFoundException } from '@nestjs/common';
import {
  CourseCategoryListAdminDto,
} from '../../dtos/courseCategories/admin/courseCategory.list.admin.dto';
import { CourseCategory } from '../../entities/courseCategory.entity';
import { plainToInstance } from 'class-transformer';
import { CourseCategoryCreateAdminDto } from '../../dtos/courseCategories/admin/courseCategory.create.admin.dto';
import { CourseCategoryUpdateAdminDto } from '../../dtos/courseCategories/admin/courseCategory.update.admin.dto';

@Injectable()
export class CourseCategoryAdminService{
  async create(payload : CourseCategoryCreateAdminDto){
    const courseCategory = CourseCategory.create(payload as CourseCategory)
    await CourseCategory.save(courseCategory)
    return courseCategory
  }

  async getAll(){
    const courseCategory = await CourseCategory.find()
    return plainToInstance(CourseCategoryListAdminDto,courseCategory,{excludeExtraneousValues : true})
  }

  async getOne(id : number){
    const courseCategory = await CourseCategory.findOneBy({ id });
    if(!courseCategory){
      throw new NotFoundException('courseCategory with given id not found')
    }
    return courseCategory
  }

  async update(id : number,payload : CourseCategoryUpdateAdminDto){
    const courseCategory = await CourseCategory.findOneBy({id})
    if(!courseCategory){
      throw new NotFoundException('courseCategory with given id not found')
    }

    Object.assign(
      courseCategory,
      Object.fromEntries(
        Object.entries(payload).filter(([key,value]) => value)
      )
    )

    await CourseCategory.save(courseCategory)
    return courseCategory
  }

  async delete(id : number){
    const courseCategory = await CourseCategory.findOneBy({ id })
    if(!courseCategory){
      throw new NotFoundException('courseCategory with given id not found')
    }

    await CourseCategory.remove(courseCategory)
  }
}