import { Injectable, NotFoundException } from '@nestjs/common';
import { CourseLessonCreateAdminDto } from '../../dtos/courseLessons/admin/courseLesson.create.admin.dto';
import { CourseLesson } from '../../entities/courseLesson.entity';
import { plainToInstance } from 'class-transformer';
import { CourseLessonListAdminDto } from '../../dtos/courseLessons/admin/courseLesson.list.admin.dto';
import { CourseLessonUpdateAdminDto } from '../../dtos/courseLessons/admin/courseLesson.update.admin.dto';

@Injectable()
export class CourseLessonAdminService{
  async create(payload : CourseLessonCreateAdminDto,video : Express.Multer.File){
    const courseLesson = CourseLesson.create(payload)
    if(video){
      courseLesson.video= video.path
    }
    await CourseLesson.save(courseLesson)
    return courseLesson
  }
  
  async getAll(){
    const courseLesson = await CourseLesson.find()
    return plainToInstance(CourseLessonListAdminDto,courseLesson,{excludeExtraneousValues : true})
  }
  
  async getOne(id : number){
    const courseLesson = await CourseLesson.findOneBy({ id });
    if(!courseLesson){
      throw new NotFoundException('courseLesson with given id not found')
    }

    return courseLesson
  }

  async update(id : number,payload : CourseLessonUpdateAdminDto,video : Express.Multer.File){
    const courseLesson = await CourseLesson.findOneBy({ id })
    if(!courseLesson){
      throw new NotFoundException('courseLesson with given id not found')
    }

    Object.assign(
      courseLesson,
      Object.fromEntries(
        Object.entries(payload).filter(([key,value]) => value)
      )
    )

    if(video){
      courseLesson.video= video.path
    }

    await CourseLesson.save(courseLesson)
    return courseLesson
  }

  async delete(id : number){
    const courseLesson = await CourseLesson.findOneBy({ id });
    if(!courseLesson){
      throw new NotFoundException('courseLesson with given id not found')
    }

    await CourseLesson.remove(courseLesson)
  }
}