import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../../../core/Repositories/Base.repository';
import { News } from '../../../news/data/entities/news.entity';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { Book } from '../../entities/book.entity';
import { BookFilters } from '../../filters/book.filter';

@Injectable()
export class BookPublicRepository extends BaseRepository<Book> {
  constructor(
    protected readonly config: ConfigService,
    @InjectRepository(Book)
    protected readonly repo: Repository<Book>,
  ) {
    super();
  }
}
