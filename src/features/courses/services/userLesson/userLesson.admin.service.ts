import { Injectable, NotFoundException } from '@nestjs/common';
import { UserLessonCreateAdminDto } from '../../dtos/userLesson/admin/userLesson.create.admin.dto';
import { UserLesson } from '../../entities/userLesson.entity';
import { plainToInstance } from 'class-transformer';
import { UserLessonListAdminDto } from '../../dtos/userLesson/admin/userLesson.list.admin.dto';
import { UserLessonUpdateAdminDto } from '../../dtos/userLesson/admin/userLesson.update.admin.dto';

@Injectable()
export class UserLessonAdminService{
  async create(payload : UserLessonCreateAdminDto){
    const userLesson = UserLesson.create(payload as UserLesson)
    await UserLesson.save(userLesson)
    return userLesson
  }

  async getAll(){
    const userLesson = await UserLesson.find()
    return plainToInstance(UserLessonListAdminDto,userLesson,{excludeExtraneousValues: true})
  }
  
  async getOne(id : number){
    const userLesson = await UserLesson.findOneBy({ id });
    if(!userLesson){
      throw new NotFoundException('userLesson with given id not found')
    }
    return userLesson
  }

  async update(id : number,payload : UserLessonUpdateAdminDto){
    const userLesson = await UserLesson.findOneBy({ id })
    if(!userLesson){
      throw new NotFoundException('userLesson with given id not found')
    }

    Object.assign(
      userLesson,
      Object.fromEntries(
        Object.entries(payload).filter(([key,value]) => value)
      )
    )

    await UserLesson.save(userLesson)
    return userLesson
  }

  async delete(id : number){
    const userLesson = await UserLesson.findOneBy({ id });
    if(!userLesson){
      throw new NotFoundException('userLesson with given id not found')
    }
    await UserLesson.remove(userLesson)
  }
}