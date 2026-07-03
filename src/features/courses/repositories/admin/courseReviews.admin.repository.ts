import { BaseRepository } from '../../../../core/Repositories/Base.repository';
import { CourseReview } from '../../entities/courseReviews.entity';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { CourseReviewsFilter } from '../../filters/courseReviews.filter';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseReviewsAdminRepository extends BaseRepository<CourseReview>{
  constructor(
    protected readonly config: ConfigService,
    @InjectRepository(CourseReview)
    protected readonly repo: Repository<CourseReview>,
  ) {
    super();
  }


  public async getAll(filters: CourseReviewsFilter){
    const whereOptions: FindOptionsWhere<CourseReview>={}

    if(filters.userId){
      whereOptions.user ={id: filters.userId}
    }

    if(filters.courseId){
      whereOptions.course ={id: filters.courseId}
    }

    if(filters.rating){
      whereOptions.rating = filters.rating
    }
    return await super.getAll(filters, whereOptions)
  }
}
