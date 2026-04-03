import { Injectable, NotFoundException } from '@nestjs/common';
import { CourseLesson } from '../../entities/courseLesson.entity';
import { plainToInstance } from 'class-transformer';
import { CourseLessonListPublicDto } from '../../dtos/courseLessons/public/courseLesson.list.public.dto';

@Injectable()
export class CourseLessonPublicService{
  async getAll(){
    const courseLesson = await CourseLesson.find()
    return plainToInstance(CourseLessonListPublicDto,courseLesson,{excludeExtraneousValues : true})
  }
  
  async getOne(id : number){
    const courseLesson = await CourseLesson.findOneBy({ id });
    if(!courseLesson){
      throw new NotFoundException('courseLesson with given id not found')
    }
  }
}