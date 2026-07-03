import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../../../core/Repositories/Base.repository';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { BookReview } from '../../entities/bookReviews.entity';
import { BookReviewsFilter } from '../../filters/bookReviews.filter';

@Injectable()
export class BookReviewsPublicRepository extends BaseRepository<BookReview> {
  constructor(
    protected readonly config: ConfigService,
    @InjectRepository(BookReview)
    protected readonly repo: Repository<BookReview>,
  ) {
    super();
  }

}