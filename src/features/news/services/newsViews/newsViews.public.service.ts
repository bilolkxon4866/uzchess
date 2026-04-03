import { Injectable, NotFoundException } from '@nestjs/common';
import { NewsView } from '../../entities/newsViews.entity';
import { plainToInstance } from 'class-transformer';
import { NewsViewsListPublicDto } from '../../dtos/newsViews/public/newsViews.list.public.dto';

@Injectable()
export class NewsViewsPublicService{
  async getAll(){
    const newsViews = await NewsView.find()
    return plainToInstance(NewsViewsListPublicDto,newsViews,{excludeExtraneousValues : true})
  }
  
  async getOne(id : number){
    const newsViews = await NewsView.findOneBy({ id });
    if(!newsViews){
      throw new NotFoundException('newsViews with given id not found')
    }
    return newsViews
  }
}