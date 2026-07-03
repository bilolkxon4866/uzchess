import { BaseRepository } from '../../../../../core/Repositories/Base.repository';
import { Injectable } from '@nestjs/common';
import { News } from '../../entities/news.entity';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { NewsFilter } from '../../../presentation/filters/news.filter';

@Injectable()
export class NewsAdminRepository extends BaseRepository<News> {
  constructor(
    protected readonly config: ConfigService,
    @InjectRepository(News)
    protected readonly repo: Repository<News>,
  ) {
    super();
  }
public async getAll(filters: NewsFilter = {} as NewsFilter) { // 1. Default qiymat berish
    const whereOptions: FindOptionsWhere<News> = {};

    // 2. filters mavjudligini va search borligini tekshirish
    if (filters && filters.search) {
      whereOptions.title = ILike(`%${filters.search}%`);
    }

    // 3. super.getAll ga yuborayotganda filters bo'sh obyekt emasligiga ishonch hosil qilish
    return await super.getAll(filters || {}, whereOptions);
  }
}