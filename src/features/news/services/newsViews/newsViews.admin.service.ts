import { Injectable, NotFoundException } from '@nestjs/common';
import { NewsViewsCreateAdminDto } from '../../dtos/newsViews/admin/newsViews.create.admin.dto';
import { NewsView } from '../../entities/newsViews.entity';
import { plainToInstance } from 'class-transformer';
import { NewsViewsUpdateAdminDto } from '../../dtos/newsViews/admin/newsViews.update.admin.dto';
import { NewsViewsListAdminDto } from '../../dtos/newsViews/admin/newsViews.list.admin.dto';

@Injectable()
export class NewsViewsAdminService{
  async create(payload : NewsViewsCreateAdminDto){
    const newsViews = NewsView.create(payload)
    await NewsView.save(newsViews)
    return newsViews
  }
  
  async getAll(){
    const newsViews = await NewsView.find()
    return plainToInstance(NewsViewsListAdminDto,newsViews,{excludeExtraneousValues : true})
  }
  
  async getOne(id : number){
    const newsViews = await NewsView.findOneBy({ id });
    if(!newsViews){
      throw new NotFoundException('newsViews with given id not found')
    }
    return newsViews
  }

  async update(id : number,payload : NewsViewsUpdateAdminDto){
    const newsViews = await NewsView.findOneBy({ id });
    if(!newsViews){
      throw new NotFoundException('newsViews with given id not found')
    }

    Object.assign(
      newsViews,
      Object.fromEntries(
        Object.entries(payload).filter(([key,value]) => value)
      )
    )

    await NewsView.save(newsViews)
    return newsViews
  }

  async delete(id : number){
    const newsViews = await NewsView.findOneBy({ id });
    if(!newsViews){
      throw new NotFoundException('newsViews with given id not found')
    }

    await NewsView.remove(newsViews)
  }
}