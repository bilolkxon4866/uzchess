import { Injectable, NotFoundException } from '@nestjs/common';
import { BookLikesCreateAdminDto } from '../../dtos/bookLikes/admin/bookLikes.create.admin.dto';
import { BookLike } from '../../entities/bookLikes.entity';
import { plainToInstance } from 'class-transformer';
import { BookLikesListAdminDto } from '../../dtos/bookLikes/admin/bookLikes.list.admin.dto';
import { BookLikesUpdateAdminDto } from '../../dtos/bookLikes/admin/bookLikes.update.admin.dto';

@Injectable()
export class BookLikesAdminService{
  async create(payload : BookLikesCreateAdminDto){
    const bookLikes = BookLike.create(payload)
    await BookLike.save(bookLikes)
    return bookLikes
  }
  
  async getAll(){
    const bookLikes = await BookLike.find()
    return plainToInstance(BookLikesListAdminDto,bookLikes,{excludeExtraneousValues : true})
  }
  
  async getOne(id : number){
    const bookLikes = await BookLike.findOneBy({ id });
    if(!bookLikes){
      throw new NotFoundException('bookLikes with given id not found')
    }

    return bookLikes
  }

  async update(id : number,payload : BookLikesUpdateAdminDto){
    const bookLikes = await BookLike.findOneBy({ id });
    if(!bookLikes){
      throw new NotFoundException('bookLikes with given id not found')
    }

    Object.assign(
      bookLikes,
      Object.fromEntries(
        Object.entries(payload).filter(([key,value]) => value)
      )
    )

    await BookLike.save(bookLikes)
    return bookLikes
  }

  async delete(id : number){
    const bookLikes = await BookLike.findOneBy({ id });
    if(!bookLikes){
      throw new NotFoundException('bookLikes with given id not found')
    }

    await BookLike.remove(bookLikes)
  }
}