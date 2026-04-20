import { Injectable, NotFoundException } from '@nestjs/common';
import { BookLikesCreateAdminDto } from '../../dtos/bookLikes/admin/bookLikes.create.admin.dto';
import { BookLike } from '../../entities/bookLikes.entity';
import { plainToInstance } from 'class-transformer';
import { BookLikesListAdminDto } from '../../dtos/bookLikes/admin/bookLikes.list.admin.dto';
import { BookLikesUpdateAdminDto } from '../../dtos/bookLikes/admin/bookLikes.update.admin.dto';
import { BookLikesAdminRepository } from '../../repositories/admin/bookLikes.admin.repository';
import { PaginationFilters } from '../../../common/filters/paginationfilter';

@Injectable()
export class BookLikesAdminService{
  constructor(private readonly repo: BookLikesAdminRepository){}

  async create(payload : BookLikesCreateAdminDto){
    const bookLikes = BookLike.create(payload)
    return await this.repo.save(bookLikes)

  }
  
  async getAll(filters: PaginationFilters){
    let bookLikes = await this.repo.getAll(filters)
    return plainToInstance(BookLikesListAdminDto,bookLikes,{excludeExtraneousValues : true})
  }
  
  async getOne(id : number){
    const bookLikes = await this.repo.getOneById(id);
    if(!bookLikes){
      throw new NotFoundException('bookLikes with given id not found')
    }

    return bookLikes
  }

  async update(id : number,payload : BookLikesUpdateAdminDto){
    const bookLikes = await this.repo.getOneById(id);
    if(!bookLikes){
      throw new NotFoundException('bookLikes with given id not found')
    }

    Object.assign(
      bookLikes,
      Object.fromEntries(
        Object.entries(payload).filter(([key,value]) => value)
      )
    )

    return await this.repo.save(bookLikes)

  }

  async delete(id : number){
    const bookLikes = await this.repo.getOneById(id);
    if(!bookLikes){
      throw new NotFoundException('bookLikes with given id not found')
    }

    await this.repo.delete(bookLikes)
  }
}