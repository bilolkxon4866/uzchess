import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from '../../entities/book.entity';
import { plainToInstance } from 'class-transformer';
import { BookListPublicDto } from '../../dtos/book/public/book.list.public.dto';

@Injectable()
export class BookPublicService{
  async getAll(){
    const book = await Book.find()
    return plainToInstance(BookListPublicDto,book,{excludeExtraneousValues : true})
  }
  
  async getOne(id : number){
    const book = await Book.findOneBy({ id });
    if(!book){
      throw new NotFoundException('book with given id not found')
    }

    return book
  }
}