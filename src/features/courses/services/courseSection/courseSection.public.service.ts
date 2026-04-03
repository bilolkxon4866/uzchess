import { Injectable, NotFoundException } from '@nestjs/common';
import { CourseSection } from '../../entities/courseSection.entity';
import { plainToInstance } from 'class-transformer';
import { CourseSectionListAdminDto } from '../../dtos/courseSection/admin/courseSection.list.admin.dto';
import { CourseSectionUpdateAdminDto } from '../../dtos/courseSection/admin/courseSection.update.admin.dto';
import { CourseSectionCreateAdminDto } from '../../dtos/courseSection/admin/courseSection.create.admin.dto';
import { CourseSectionListPublicDto } from '../../dtos/courseSection/public/courseSection.list.public.dto';

@Injectable()
export class CourseSectionPublicService{
  async getAll(){
    const courseSection = await CourseSection.find()
    return plainToInstance(CourseSectionListPublicDto,courseSection,{excludeExtraneousValues : true})
  }
  
  async getOne(id : number){
    const courseSection = await CourseSection.findOneBy({ id });
    if(!courseSection){
      throw new NotFoundException('courseSection with given id not found')
    }

    return courseSection
  }
}