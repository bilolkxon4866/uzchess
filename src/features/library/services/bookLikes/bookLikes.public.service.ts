import { Injectable, NotFoundException } from '@nestjs/common';
import { BookLikesCreateAdminDto } from '../../dtos/bookLikes/admin/bookLikes.create.admin.dto';
import { BookLike } from '../../entities/bookLikes.entity';
import { plainToInstance } from 'class-transformer';
import { BookLikesListAdminDto } from '../../dtos/bookLikes/admin/bookLikes.list.admin.dto';
import { BookLikesUpdateAdminDto } from '../../dtos/bookLikes/admin/bookLikes.update.admin.dto';
import { BookLikesListPublicDto } from '../../dtos/bookLikes/public/bookLikes.list.public.dto';

@Injectable()
export class BookLikesPublicService{
  async getAll(){
    const bookLikes = await BookLike.find()
    return plainToInstance(BookLikesListPublicDto,bookLikes,{excludeExtraneousValues : true})
  }
  
  async getOne(id : number){
    const bookLikes = await BookLike.findOneBy({ id });
    if(!bookLikes){
      throw new NotFoundException('bookLikes with given id not found')
    }

    return bookLikes
  }
}