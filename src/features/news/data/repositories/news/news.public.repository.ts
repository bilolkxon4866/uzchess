import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../../../../core/Repositories/Base.repository';
import { News } from '../../entities/news.entity';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class NewsPublicRepository extends BaseRepository<News> {
  constructor(
    protected readonly config: ConfigService,
    @InjectRepository(News)
    protected readonly repo: Repository<News>,
  ) {
    super();
  }
}