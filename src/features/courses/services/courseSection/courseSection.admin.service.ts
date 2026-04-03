import { Injectable, NotFoundException } from '@nestjs/common';
import { CourseSection } from '../../entities/courseSection.entity';
import { plainToInstance } from 'class-transformer';
import { CourseSectionListAdminDto } from '../../dtos/courseSection/admin/courseSection.list.admin.dto';
import { CourseSectionUpdateAdminDto } from '../../dtos/courseSection/admin/courseSection.update.admin.dto';
import { CourseSectionCreateAdminDto } from '../../dtos/courseSection/admin/courseSection.create.admin.dto';

@Injectable()
export class CourseSectionAdminService{
  async getAll(){
    const courseSection = await CourseSection.find()
    return plainToInstance(CourseSectionListAdminDto,courseSection,{excludeExtraneousValues : true})
  }
  
  async getOne(id : number){
    const courseSection = await CourseSection.findOneBy({ id });
    if(!courseSection){
      throw new NotFoundException('courseSection with given id not found')
    }

    return courseSection
  }

  async create(payload : CourseSectionCreateAdminDto){
    const courseSection = CourseSection.create(payload);
    await CourseSection.save(courseSection)
    return courseSection
  }

  async update(id : number,payload :CourseSectionUpdateAdminDto){
    const courseSection = await CourseSection.findOneBy({ id });
    if(!courseSection){
      throw new NotFoundException('courseSection with given id not found')
    }
    Object.assign(
      courseSection,
      Object.fromEntries(
      Object.entries(payload).filter(([key,value]) => value)
      )
    )
    await CourseSection.save(courseSection)
    return courseSection
  }

  async delete(id : number){
    const courseSection = await CourseSection.findOneBy({ id });
    if(!courseSection){
      throw new NotFoundException('courseSection with given id not found')
    }

    await CourseSection.remove(courseSection)
  }
}