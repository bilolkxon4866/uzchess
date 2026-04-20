import { Injectable, NotFoundException } from '@nestjs/common';
import { BookReviewsCreateAdminDto } from '../../dtos/bookReviews/admin/bookReviews.create.admin.dto';
import { BookReview } from '../../entities/bookReviews.entity';
import { plainToInstance } from 'class-transformer';
import { BookReviewsListAdminDto } from '../../dtos/bookReviews/admin/bookReviews.list.admin.dto';
import { BookReviewsUpdateAdminDto } from '../../dtos/bookReviews/admin/bookReviews.update.admin.dto';
import { BookReviewsAdminRepository } from '../../repositories/admin/bookReviews.admin.repository';
import { PaginationFilters } from '../../../common/filters/paginationfilter';

@Injectable()
export class BookReviewsAdminService {
  constructor(private readonly repo: BookReviewsAdminRepository) {
  }
  async create(payload : BookReviewsCreateAdminDto){
    const bookReviews = BookReview.create(payload)
    return await this.repo.save(bookReviews)

  }
  
  async getAll(filters: PaginationFilters){
    const bookReviews = await this.repo.getAll(filters)
    return plainToInstance(BookReviewsListAdminDto,bookReviews,{excludeExtraneousValues : true})
  }
  
  async getOne(id : number){
    const bookReviews = await this.repo.getOneById(id);
    if(!bookReviews){
      throw new NotFoundException('bookReviews with given id not found')
    }
    
    return bookReviews
  }

  async update(id :number,payload : BookReviewsUpdateAdminDto){
    const bookReviews = await this.repo.getOneById(id);
    if(!bookReviews){
      throw new NotFoundException('bookReviews with given id not found')
    }

    Object.assign(
      bookReviews,
      Object.fromEntries(
        Object.entries(payload).filter(([key,value]) => value)
      )
    )

    return await this.repo.save(bookReviews)

  }

  async delete(id : number){
    const bookReviews = await BookReview.findOneBy({ id });
    if(!bookReviews){
      throw new NotFoundException('bookReviews with given id not found')
    }

    await this.repo.delete(bookReviews)
  }
}