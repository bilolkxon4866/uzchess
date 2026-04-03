import { Injectable, NotFoundException } from '@nestjs/common';
import { BookReviewsCreateAdminDto } from '../../dtos/bookReviews/admin/bookReviews.create.admin.dto';
import { BookReview } from '../../entities/bookReviews.entity';
import { plainToInstance } from 'class-transformer';
import { BookReviewsListAdminDto } from '../../dtos/bookReviews/admin/bookReviews.list.admin.dto';
import { BookReviewsUpdateAdminDto } from '../../dtos/bookReviews/admin/bookReviews.update.admin.dto';

@Injectable()
export class BookReviewsAdminService {
  async create(payload : BookReviewsCreateAdminDto){
    const bookReviews = BookReview.create(payload)
    await BookReview.save(bookReviews)
    return bookReviews
  }
  
  async getAll(){
    const bookReviews = await BookReview.find()
    return plainToInstance(BookReviewsListAdminDto,bookReviews,{excludeExtraneousValues : true})
  }
  
  async getOne(id : number){
    const bookReviews = await BookReview.findOneBy({ id });
    if(!bookReviews){
      throw new NotFoundException('bookReviews with given id not found')
    }
    
    return bookReviews
  }

  async update(id :number,payload : BookReviewsUpdateAdminDto){
    const bookReviews = await BookReview.findOneBy({ id });
    if(!bookReviews){
      throw new NotFoundException('bookReviews with given id not found')
    }

    Object.assign(
      bookReviews,
      Object.fromEntries(
        Object.entries(payload).filter(([key,value]) => value)
      )
    )

    await BookReview.save(bookReviews)
    return bookReviews
  }

  async delete(id : number){
    const bookReviews = await BookReview.findOneBy({ id });
    if(!bookReviews){
      throw new NotFoundException('bookReviews with given id not found')
    }

    await BookReview.remove(bookReviews)
  }
}