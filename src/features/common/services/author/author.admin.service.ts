import { Injectable, NotFoundException } from '@nestjs/common';
import { Author } from '../../entities/author.entity';
import { AuthorCreateAdminDto } from '../../dtos/author/admin/author.create.admin.dto';
import { plainToInstance } from 'class-transformer';
import { AuthorListAdminDto } from '../../dtos/author/admin/author.list.admin.dto';
import { AuthorUpdateAdminDto } from '../../dtos/author/admin/author.update.admin.dto';

@Injectable()
export class AuthorAdminService{
  async create(payload : AuthorCreateAdminDto){
    const author = Author.create(payload as Author)
    await Author.save(author)
    return author
  }

  async getAll(){
    const author = await Author.find()
    return plainToInstance(AuthorListAdminDto,author,{excludeExtraneousValues:true})
  }

  async getOne(id : number){
    const author = await Author.findOneBy({ id })
    if(!author){
      throw new NotFoundException('Author with given id not found')
    }

    return author
  }

  async update(id : number,payload : AuthorUpdateAdminDto){
   const author = await Author.findOneBy({ id })
    if(!author){
      throw new NotFoundException('author with given id not found')
    }
    Object.assign(
      author,
      Object.fromEntries(
        Object.entries(payload).filter(([key,value]) => value)
      )
    )
    await Author.save(author)
    return author
  }

  async delete(id : number){
    const author = await Author.findOneBy({ id })
    if(!author){
      throw new NotFoundException('News with given id not found')
    }

    await Author.remove(author)
  }
}