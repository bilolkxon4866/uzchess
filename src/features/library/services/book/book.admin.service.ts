import { Injectable, NotFoundException } from '@nestjs/common';
import { BookCreateAdminDto } from '../../dtos/book/admin/book.create.admin.dto';
import { Book } from '../../entities/book.entity';
import { plainToInstance } from 'class-transformer';
import { BookListAdminDto } from '../../dtos/book/admin/book.list.admin.dto';
import { BookUpdateAdminDto } from '../../dtos/book/admin/book.update.admin.dto';
import { BookAdminRepository } from '../../repositories/admin/book.admin.repository';
import { PaginationFilters } from '../../../common/filters/paginationfilter';

@Injectable()
export class BookAdminService{
  constructor(private readonly repo: BookAdminRepository) {}

  async create(payload : BookCreateAdminDto,image : Express.Multer.File){
    let book = Book.create(payload)
    if(image){
      book.image = image.path
    }
    return await Book.save(book)

  }

  async getAll(filters: PaginationFilters){
    const book = await this.repo.getAll(filters)
    return plainToInstance(BookListAdminDto,book,{excludeExtraneousValues : true})
  }
  
  async getOne(id : number){
    const book = await this.repo.getOneById(id);
    if(!book){
      throw new NotFoundException('book with given id not found')
    }

    return book
  }

  async update(id : number,payload : BookUpdateAdminDto,image : Express.Multer.File){
    const book = await this.repo.getOneById(id);
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

    await this.repo.save(book)
    return book
  }

  async delete(id : number){
    const book = await Book.findOneBy({ id });
    if(!book){
      throw new NotFoundException('book with given id not found')
    }

    await this.repo.delete(book)
  }
}