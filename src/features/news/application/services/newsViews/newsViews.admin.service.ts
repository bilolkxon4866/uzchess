import { Injectable, NotFoundException } from '@nestjs/common';
import { NewsViewsCreateAdminDto } from '../../../presentation/dtos/newsViews/admin/newsViews.create.admin.dto';
import { NewsView } from '../../../data/entities/newsViews.entity';
import { plainToInstance } from 'class-transformer';
import { NewsViewsUpdateAdminDto } from '../../../presentation/dtos/newsViews/admin/newsViews.update.admin.dto';
import { NewsViewsListAdminDto } from '../../../presentation/dtos/newsViews/admin/newsViews.list.admin.dto';
import { NewsViewsAdminRepository } from '../../../data/repositories/newsViews/newsViews.admin.repository';
import { PaginationFilters } from '../../../../common/filters/paginationfilter';

@Injectable()
export class NewsViewsAdminService{
  constructor(private readonly repo: NewsViewsAdminRepository) {
  }
  async create(payload : NewsViewsCreateAdminDto){
    const newsViews = NewsView.create(payload)
    return await this.repo.save(newsViews)

  }
  
  async getAll(filters: PaginationFilters){
    const newsViews = await this.repo.getAll(filters)
    return plainToInstance(NewsViewsListAdminDto,newsViews,{excludeExtraneousValues : true})
  }
  
  async getOne(id : number){
    const newsViews = await this.repo.getOneById(id);
    if(!newsViews){
      throw new NotFoundException('newsViews with given id not found')
    }
    return newsViews
  }

  async update(id : number,payload : NewsViewsUpdateAdminDto){
    const newsViews = await this.repo.getOneById(id);
    if(!newsViews){
      throw new NotFoundException('newsViews with given id not found')
    }

    Object.assign(
      newsViews,
      Object.fromEntries(
        Object.entries(payload).filter(([key,value]) => value)
      )
    )

    return await this.repo.save(newsViews)

  }

  async delete(id : number){
    const newsViews = await NewsView.findOneBy({ id });
    if(!newsViews){
      throw new NotFoundException('newsViews with given id not found')
    }

    await this.repo.delete(newsViews)
  }
}