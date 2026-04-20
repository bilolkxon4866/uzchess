import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../../../core/Repositories/Base.repository';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { BookLike } from '../../entities/bookLikes.entity';
import { BookLikesFilter } from '../../filters/bookLikes.filter';

@Injectable()
export class BookLikesAdminRepository extends BaseRepository<BookLike> {
  constructor(
    protected readonly config: ConfigService,
    @InjectRepository(BookLike)
    protected readonly repo: Repository<BookLike>,
  ) {
    super();
  }

  public async getAll(filters: BookLikesFilter) {
    const whereOptions: FindOptionsWhere<BookLike> = {};

    if (filters.bookId) {
      whereOptions.book = ILike(`%${filters.bookId}%`);
    }
    if (filters.userId) {
      whereOptions.book = ILike(`%${filters.userId}%`);
    }
    return await super.getAll(filters, whereOptions);
  }
}