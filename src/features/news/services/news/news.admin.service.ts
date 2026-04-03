import { News } from '../../entities/news.entity';
import { plainToInstance } from 'class-transformer';
import { NewsListAdminDto } from '../../dtos/news/admin/news.list.admin.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { NewsCreateAdminDto } from '../../dtos/news/admin/news.create.admin.dto';
import { NewsUpdateAdminDto } from '../../dtos/news/admin/news.update.admin.dto';

@Injectable()
export class NewsAdminService{
  async getAll(){
    const news = await News.find()
    return plainToInstance(NewsListAdminDto,news, {excludeExtraneousValues: true})
  }

  async getOne(id : number){
    const news = await News.findOneBy({ id });
    if(!news){
      throw new NotFoundException('News with given id not found')
    }
    return news
  }

  async create(payload : NewsCreateAdminDto,image : Express.Multer.File){
    const news = News.create(payload)
    if(image){
      news.image = image.path
    }
    await News.save(news)
    return news
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
    await News.save(news)
    return news
  }

  async delete(id : number){
    const news = await News.findOneBy({ id })
    if(!news){
      throw new NotFoundException('News with given id not found')
    }

    await News.remove(news)
  }
}