import { Injectable, NotFoundException } from '@nestjs/common';
import { BookCreateAdminDto } from '../../dtos/book/admin/book.create.admin.dto';
import { Book } from '../../entities/book.entity';
import { plainToInstance } from 'class-transformer';
import { BookListAdminDto } from '../../dtos/book/admin/book.list.admin.dto';
import { BookUpdateAdminDto } from '../../dtos/book/admin/book.update.admin.dto';

@Injectable()
export class BookAdminService{
  async create(payload : BookCreateAdminDto,image : Express.Multer.File){
    const book = Book.create(payload)
    if(image){
      book.image = image.path
    }
    await Book.save(book)
    return book
  }

  async getAll(){
    const book = await Book.find({
      relations: {
        author: true,
        category: true,
        language: true,
        difficulty: true,
      },
    })
    return plainToInstance(BookListAdminDto,book,{excludeExtraneousValues : true})
  }
  
  async getOne(id : number){
    const book = await Book.findOneBy({ id });
    if(!book){
      throw new NotFoundException('book with given id not found')
    }

    return book
  }

  async update(id : number,payload : BookUpdateAdminDto,image : Express.Multer.File){
    const book = await Book.findOneBy({ id });
    if(!book){
      throw new NotFoundException('book with given id not found')
    }

    Object.assign(
      book,
      Object.fromEntries(
        Object.entries(payload).filter(([key,value]) => value)
      )
    )

    if(image){
      book.image = image.path
    }

    await Book.save(book)
    return book
  }

  async delete(id : number){
    const book = await Book.findOneBy({ id });
    if(!book){
      throw new NotFoundException('book with given id not found')
    }

    await Book.remove(book)
  }
}