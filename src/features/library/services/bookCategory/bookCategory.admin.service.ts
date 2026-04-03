import { Injectable, NotFoundException } from '@nestjs/common';
import { BookCategory } from '../../entities/bookCategory.entity';
import { plainToInstance } from 'class-transformer';
import { BookCategoryListAdminDto } from '../../dtos/bookCategories/admin/bookCategory.list.admin.dto';
import { BookCategoryCreateAdminDto } from '../../dtos/bookCategories/admin/bookCategory.create.admin.dto';
import { BookCategoryUpdateAdminDto } from '../../dtos/bookCategories/admin/bookCategory.update.admin.dto';

@Injectable()
export class BookCategoryAdminService{
  async getAll(){
    const bookCategory = await BookCategory.find()
    return plainToInstance(BookCategoryListAdminDto,bookCategory,{excludeExtraneousValues : true})
  }

  async getOne(id : number){
    const bookCategories = await BookCategory.findOneBy(({ id }))
    if(!bookCategories){
      throw new NotFoundException('BookCategory with given id not found')
    }
    return bookCategories
  }

  async create(payload : BookCategoryCreateAdminDto){
    const bookCategories = BookCategory.create(payload as BookCategory)
    await BookCategory.save(bookCategories)
    return bookCategories
  }

  async update(id : number,payload:BookCategoryUpdateAdminDto){
    const bookCategory = await BookCategory.findOneBy({ id })
    if(!bookCategory){
      throw new NotFoundException('bookCategory with given id not found')
    }

    Object.assign(
      bookCategory,
      Object.fromEntries(
        Object.entries(payload).filter(([key, value]) => value)
      )
    )
    await BookCategory.save(bookCategory)
    return bookCategory
  }

  async delete(id){
    const bookCategory = await BookCategory.findOneBy({ id })
    if(!bookCategory){
      throw new NotFoundException('bookCatgory with given id not found')
    }

    await BookCategory.remove(bookCategory)
  }
}