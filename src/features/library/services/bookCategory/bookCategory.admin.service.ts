import { Injectable, NotFoundException } from '@nestjs/common';
import { BookCategory } from '../../entities/bookCategory.entity';
import { plainToInstance } from 'class-transformer';
import { BookCategoryListAdminDto } from '../../dtos/bookCategories/admin/bookCategory.list.admin.dto';
import { BookCategoryCreateAdminDto } from '../../dtos/bookCategories/admin/bookCategory.create.admin.dto';
import { BookCategoryUpdateAdminDto } from '../../dtos/bookCategories/admin/bookCategory.update.admin.dto';
import { PaginationFilters } from '../../../common/filters/paginationfilter';
import { BookCategoryAdminRepository } from '../../repositories/admin/bookCategory.admin.repository';
import { BookListAdminDto } from '../../dtos/book/admin/book.list.admin.dto';

@Injectable()
export class BookCategoryAdminService{
  constructor(private readonly repo: BookCategoryAdminRepository) {
  }

  async getAll(filters: PaginationFilters){
    let bookCategory = await this.repo.getAll(filters)
    return plainToInstance(BookCategoryListAdminDto,bookCategory,{excludeExtraneousValues : true})
  }

  async getOne(id : number){
    const bookCategories = await this.repo.getOneById(id)
    if(!bookCategories){
      throw new NotFoundException('BookCategory with given id not found')
    }
    return plainToInstance(BookListAdminDto, bookCategories, {excludeExtraneousValues: true})
  }

  async create(payload : BookCategoryCreateAdminDto){
    const bookCategories = BookCategory.create(payload as BookCategory)
    return await this.repo.save(bookCategories)

  }

  async update(id : number,payload:BookCategoryUpdateAdminDto){
    const bookCategory = await this.repo.getOneById(id)
    if(!bookCategory){
      throw new NotFoundException('bookCategory with given id not found')
    }

    Object.assign(
      bookCategory,
      Object.fromEntries(
        Object.entries(payload).filter(([key, value]) => value)
      )
    )
    return await this.repo.save(bookCategory)
  }

  async delete(id){
    const bookCategory = await this.repo.getOneById(id)
    if(!bookCategory){
      throw new NotFoundException('bookCatgory with given id not found')
    }

    await this.repo.delete(bookCategory)
  }
}