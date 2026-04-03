import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Course } from '../../entities/course.entity';
import { CourseListPublicDto } from '../../dtos/courses/public/course.list.public.dto';

@Injectable()
export class CoursePublicService{
  async getAll(){
    const course = await Course.find()

    return plainToInstance(CourseListPublicDto,course,{excludeExtraneousValues : true})
  }
  
  async getOne(id : number){
    const course = await Course.findOneBy({ id });
    if(!course){
      throw new NotFoundException('course with given id not found')
    }

    return course
  }
}