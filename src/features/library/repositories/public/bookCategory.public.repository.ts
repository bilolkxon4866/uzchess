import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../../../core/Repositories/Base.repository';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { BookCategory } from '../../entities/bookCategory.entity';
import { BookCategoryFilter } from '../../filters/bookCategory.filter';

@Injectable()
export class BookCategoryPublicRepository extends BaseRepository<BookCategory> {
  constructor(
    protected readonly config: ConfigService,
    @InjectRepository(BookCategory)
    protected readonly repo: Repository<BookCategory>,
  ) {
    super();
  }
}
