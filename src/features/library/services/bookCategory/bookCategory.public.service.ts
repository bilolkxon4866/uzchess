import { Injectable, NotFoundException } from '@nestjs/common';
import { BookCategory } from '../../entities/bookCategory.entity';
import { plainToInstance } from 'class-transformer';
import { BookCategoryListPublicDto } from '../../dtos/bookCategories/public/bookCategory.list.public.dto';

@Injectable()
export class BookCategoryPublicService{
  async getAll(){
    const bookCategory = await BookCategory.find()
    return plainToInstance(BookCategoryListPublicDto,bookCategory,{excludeExtraneousValues : true})
  }

  async getOne(id : number){
    const bookCategories = await BookCategory.findOneBy(({ id }))
    if(!bookCategories){
      throw new NotFoundException('BookCategory with given id not found')
    }
    return bookCategories
  }
}