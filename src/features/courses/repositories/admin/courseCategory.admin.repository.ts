import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../../../core/Repositories/Base.repository';
import { CourseCategory } from '../../entities/courseCategory.entity';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { CourseCategoryFilter } from '../../filters/courseCategory.filter';


@Injectable()
export class CourseCategoryAdminRepository extends BaseRepository<CourseCategory>{
  constructor(
    protected readonly config: ConfigService,
    @InjectRepository(CourseCategory)
    protected readonly repo: Repository<CourseCategory>,
  ) {
    super();
  }

  public async getAll(filters: CourseCategoryFilter) {
    const whereOptions: FindOptionsWhere<CourseCategory> = {};

    if(filters.title){
      whereOptions.title= ILike(`%${filters.title}%`)
    }
    return await super.getAll(filters, whereOptions)
  }
}