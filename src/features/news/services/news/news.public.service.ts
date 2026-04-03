import { News } from '../../entities/news.entity';
import { plainToInstance } from 'class-transformer';
import { Injectable, NotFoundException } from '@nestjs/common';
import { NewsListPublicDto } from '../../dtos/news/public/news.list.public.dto';

@Injectable()
export class NewsPublicService{
  async getAll(){
    const news = await News.find()
    return plainToInstance(NewsListPublicDto,news, {excludeExtraneousValues: true})
  }

  async getOne(id : number){
    const news = await News.findOneBy({ id });
    if(!news){
      throw new NotFoundException('News with given id not found')
    }
    return news
  }
}