import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../../../core/Repositories/Base.repository';
import { Course } from '../../entities/course.entity';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { CourseFilter } from '../../filters/course.filter';

@Injectable()
export class CourseAdminRepository extends BaseRepository<Course>{
  constructor(
    protected readonly config: ConfigService,
    @InjectRepository(Course)
    protected readonly repo: Repository<Course>,
  ) {
    super();
  }

  public async getAll(filters: CourseFilter) {
    const whereOptions: FindOptionsWhere<Course> = {};

    if (filters.categoryId) {
      whereOptions.title = ILike(`%${filters.categoryId}%`);
    }
    if (filters.difficultyId) {
      whereOptions.title = ILike(`%${filters.difficultyId}%`);
    }
    if (filters.languageId) {
      whereOptions.title = ILike(`%${filters.languageId}%`);
    }
    if (filters.rating) {
      whereOptions.title = ILike(`%${filters.rating}%`);
    }
    return await super.getAll(filters, whereOptions);
  }
}