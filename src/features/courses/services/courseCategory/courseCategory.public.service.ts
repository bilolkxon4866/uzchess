import { Injectable, NotFoundException } from '@nestjs/common';
import { CourseCategory } from '../../entities/courseCategory.entity';
import { plainToInstance } from 'class-transformer';
import { CourseCategoryListPublicDto } from '../../dtos/courseCategories/public/courseCategory.list.public.dto';

@Injectable()
export class CourseCategoryPublicService{
  async getAll(){
    const courseCategory = await CourseCategory.find()
    return plainToInstance(CourseCategoryListPublicDto,courseCategory,{excludeExtraneousValues : true})
  }

  async getOne(id : number){
    const courseCategory = await CourseCategory.findOneBy({ id });
    if(!courseCategory){
      throw new NotFoundException('courseCategory with given id not found')
    }
    return courseCategory
  }
}