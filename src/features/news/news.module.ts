import { Module } from '@nestjs/common';
import { NewsAdminService } from './application/services/news/news.admin.service';
import { NewsPublicService } from './application/services/news/news.public.service';
import { NewsAdminController } from './presentation/controllers/news/news.admin.controller';
import { NewsPublicController } from './presentation/controllers/news/news.public.controller';
import { NewsViewsAdminService } from './application/services/newsViews/newsViews.admin.service';
import { NewsViewsPublicService } from './application/services/newsViews/newsViews.public.service';
import { NewsViewsAdminController } from './presentation/controllers/newsViews/newsViews.admin.controller';
import { NewsViewsPublicController } from './presentation/controllers/newsViews/newsViews.public.controller';
import { NewsAdminRepository } from './data/repositories/news/news.admin.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { News } from './data/entities/news.entity';
import { NewsView } from './data/entities/newsViews.entity';
import { NewsViewsAdminRepository } from './data/repositories/newsViews/newsViews.admin.repository';
import { NewsPublicRepository } from './data/repositories/news/news.public.repository';
import { NewsViewsPublicRepository } from './data/repositories/newsViews/newsViews.public.repository';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([News, NewsView
    ])],

  providers: [
    NewsAdminRepository,
    NewsPublicRepository,
    NewsViewsAdminRepository,
    NewsViewsPublicRepository,

    NewsAdminService,
    NewsPublicService,
    NewsViewsAdminService,
    NewsViewsPublicService,
  ],
  controllers: [
    NewsAdminController,
    NewsPublicController,
    NewsViewsAdminController,
    NewsViewsPublicController
  ],
})
export class NewsModule {}