import { Injectable, NotFoundException } from '@nestjs/common';
import { UserLesson } from '../../entities/userLesson.entity';
import { plainToInstance } from 'class-transformer';
import { UserLessonListPublicDto } from '../../dtos/userLesson/public/userLesson.list.public.dto';

@Injectable()
export class UserLessonPublicService{
  async getAll(){
    const userLesson = await UserLesson.find()
    return plainToInstance(UserLessonListPublicDto,userLesson,{excludeExtraneousValues: true})
  }
  
  async getOne(id : number){
    const userLesson = await UserLesson.findOneBy({ id });
    if(!userLesson){
      throw new NotFoundException('userLesson with given id not found')
    }
    return userLesson
  }
}