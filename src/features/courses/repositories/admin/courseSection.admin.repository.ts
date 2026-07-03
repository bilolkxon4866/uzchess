import { BaseRepository } from '../../../../core/Repositories/Base.repository';
import { CourseSection } from '../../entities/courseSection.entity';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CourseSectionFilter } from '../../filters/courseSection.filter';

@Injectable()
export class CourseSectionAdminRepository extends BaseRepository<CourseSection>{
  constructor(
    protected readonly config: ConfigService,
    @InjectRepository(CourseSection)
    protected readonly repo: Repository<CourseSection>,
  ) {
    super();
  }


  public async getAll(filters: CourseSectionFilter){
    const whereOptions: FindOptionsWhere<CourseSection>={}

    if(filters.courseId){
      whereOptions.course={id: filters.courseId}
    }

    return await super.getAll(filters, whereOptions)
  }
}