import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../../../core/Repositories/Base.repository';
import { CourseLesson } from '../../entities/courseLesson.entity';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { CourseLessonFilter } from '../../filters/courseLesson.filter';

@Injectable()
export class CourseLessonAdminRepository extends BaseRepository<CourseLesson>{
  constructor(
   protected readonly config: ConfigService,
   @InjectRepository(CourseLesson)
   protected readonly repo: Repository<CourseLesson>,
  ) {
    super();
  }


  public async getAll(filters: CourseLessonFilter){
    const whereOptions: FindOptionsWhere<CourseLesson>={}


    if(filters.sectionId){
      whereOptions.course = ILike({id: filters.sectionId})
    }
    return await super.getAll(filters, whereOptions)
  }
}