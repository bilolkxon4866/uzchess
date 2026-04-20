import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../../../core/Repositories/Base.repository';
import { News } from '../../../news/entities/news.entity';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { Book } from '../../entities/book.entity';
import { BookFilters } from '../../filters/book.filter';

@Injectable()
export class BookAdminRepository extends BaseRepository<Book> {
  constructor(
    protected readonly config: ConfigService,
    @InjectRepository(Book)
    protected readonly repo: Repository<Book>,
  ) {
    super();
  }

  public async getAll(filters: BookFilters) {
    const whereOptions: FindOptionsWhere<Book> = {};

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
