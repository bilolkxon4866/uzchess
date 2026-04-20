import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../../../core/Repositories/Base.repository';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { NewsView } from '../../entities/newsViews.entity';
import { NewsViewsFilter } from '../../filters/newsViews';

@Injectable()
export class NewsViewsAdminRepository extends BaseRepository<NewsView> {
  constructor(
    protected readonly config: ConfigService,
    @InjectRepository(NewsView)
    protected readonly repo: Repository<NewsView>,
  ) {
    super();
  }

  public async getAll(filters: NewsViewsFilter) {
    const whereOptions: FindOptionsWhere<NewsView> = {};

    if (filters.userId) {
      whereOptions.user = ILike(`%${filters.userId}%`);
    }
    return await super.getAll(filters, whereOptions);
  }
}
