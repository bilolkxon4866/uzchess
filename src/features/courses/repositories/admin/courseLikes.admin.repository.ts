import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../../../core/Repositories/Base.repository';
import { CourseLike } from '../../entities/courseLikes.entity';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { CourseLikesFilter } from '../../filters/courseLikes.filter';

@Injectable()
export class CourseLikesAdminRepository extends BaseRepository<CourseLike>{
  constructor(
    protected readonly config: ConfigService,
    @InjectRepository(CourseLike)
    protected readonly repo: Repository<CourseLike>,
  ) {
    super();
  }

  public async getAll(filters: CourseLikesFilter){
    const whereOptions: FindOptionsWhere<CourseLike>={}

    if(filters.courseId){
      whereOptions.course ={id: filters.courseId}
    }

    if(filters.userId){
      whereOptions.user ={id: filters.userId}
    }
    return await super.getAll(filters, whereOptions)
  }
}