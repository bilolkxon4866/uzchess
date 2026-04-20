import { News } from '../../entities/news.entity';
import { plainToInstance } from 'class-transformer';
import { NewsListAdminDto } from '../../dtos/news/admin/news.list.admin.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { NewsCreateAdminDto } from '../../dtos/news/admin/news.create.admin.dto';
import { NewsUpdateAdminDto } from '../../dtos/news/admin/news.update.admin.dto';
import { PaginationFilters } from '../../../common/filters/paginationfilter';
import { NewsAdminRepository } from '../../repositories/news/news.admin.repository';

@Injectable()
export class NewsAdminService{
  constructor(private readonly repo: NewsAdminRepository) {}

  async getAll(filters : PaginationFilters){
    const news = await this.repo.getAll(filters)
    return plainToInstance(NewsListAdminDto,news, {excludeExtraneousValues: true})
  }

  async getOne(id : number){
    const news = await this.repo.getOneById(id);
    if(!news){
      throw new NotFoundException('News with given id not found')
    }
    return plainToInstance(NewsListAdminDto, news, {excludeExtraneousValues: true})
  }

  async create(payload : NewsCreateAdminDto,image : Express.Multer.File){
    let newNews = { ...payload, image: image.path } as News
    return await this.repo.save(newNews);
  }

  async update(id : number,payload : NewsUpdateAdminDto,image : Express.Multer.File){
    const news = await News.findOneBy({ id })
    if(!news){
      throw new NotFoundException('News with given id not found')
    }

    Object.assign(
      news,
      Object.fromEntries(
        Object.entries(payload).filter(([key, value]) => value)
      )
    )
    if(image){
      news.image = image.path
    }
    await this.repo.save(news)
  }

  async delete(id : number){
    const news = await News.findOneBy({ id })
    if(!news){
      throw new NotFoundException('News with given id not found')
    }

    await this.repo.delete(news);
  }

}
