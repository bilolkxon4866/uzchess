import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../../../core/Repositories/Base.repository';
import { UserLesson } from '../../entities/userLesson.entity';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { UserLessonFilter } from '../../filters/userLesson.filter';

@Injectable()
export class UserLessonAdminRepository extends BaseRepository<UserLesson>{
  constructor(
    protected readonly config: ConfigService,
    @InjectRepository(UserLesson)
    protected readonly repo: Repository<UserLesson>
  ) {
    super();
  }

  public async getAll(filters: UserLessonFilter){
    const whereOptions: FindOptionsWhere<UserLesson>={}


    if(filters.userId){
      whereOptions.user = {id: filters.userId}
    }

    if(typeof filters.isCompleted !== 'undefined'){
      whereOptions.isCompleted = filters.isCompleted
    }

    return await super.getAll(filters, whereOptions)
  }
}