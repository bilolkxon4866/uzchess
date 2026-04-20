import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../../../core/Repositories/Base.repository';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { BookReview } from '../../entities/bookReviews.entity';
import { BookReviewsFilter } from '../../filters/bookReviews.filter';

@Injectable()
export class BookReviewsAdminRepository extends BaseRepository<BookReview> {
  constructor(
    protected readonly config: ConfigService,
    @InjectRepository(BookReview)
    protected readonly repo: Repository<BookReview>,
  ) {
    super();
  }

  public async getAll(filters: BookReviewsFilter) {
    const whereOptions: FindOptionsWhere<BookReview> = {};

    if (filters.bookId) {
      whereOptions.book = ILike(`%${filters.bookId}%`);
    }
    if (filters.userId) {
      whereOptions.book = ILike(`%${filters.userId}%`);
    }
    if (filters.rating) {
      whereOptions.book = ILike(`%${filters.rating}%`);
    }
    return await super.getAll(filters, whereOptions);
  }
}