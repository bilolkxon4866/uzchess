import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../../../core/Repositories/Base.repository';
import { PurchasedCourse } from '../../entities/purchasedCourse.entity';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { PurchasedCourseFilter } from '../../filters/purchasedCourse.filter';

@Injectable()
export class PurchasedCourseAdminRepository extends BaseRepository<PurchasedCourse>{
  constructor(
    protected readonly config: ConfigService,
    @InjectRepository(PurchasedCourse)
    protected readonly repo: Repository<PurchasedCourse>,
  ) {
    super();
  }

  public async getAll(filters: PurchasedCourseFilter){
    const WhereOptions: FindOptionsWhere<PurchasedCourse>={}

    if(filters.userId){
      WhereOptions.user = {id: filters.userId}
    }

    if(filters.courseId){
      WhereOptions.course = {id: filters.courseId}
    }

    return await super.getAll(filters, WhereOptions)
  }
}