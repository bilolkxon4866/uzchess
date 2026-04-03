import { Injectable, NotFoundException } from '@nestjs/common'
import { BookReview } from '../../entities/bookReviews.entity';
import { plainToInstance } from 'class-transformer';
import { BookReviewsListPublicDto } from '../../dtos/bookReviews/public/bookReviews.list.public.dto';

@Injectable()
export class BookReviewsPublicService {
  async getAll(){
    const bookReviews = await BookReview.find()
    return plainToInstance(BookReviewsListPublicDto,bookReviews,{excludeExtraneousValues : true})
  }
  
  async getOne(id : number){
    const bookReviews = await BookReview.findOneBy({ id });
    if(!bookReviews){
      throw new NotFoundException('bookReviews with given id not found')
    }
    
    return bookReviews
  }
}