import { Injectable, NotFoundException } from '@nestjs/common';
import { Author } from '../../entities/author.entity';
import { plainToInstance } from 'class-transformer';
import { AuthorListPublicDto } from '../../dtos/author/public/author.list.public.dto';

@Injectable()
export class AuthorPublicService{
  async getAll(){
    const author = await Author.find()
    return plainToInstance(AuthorListPublicDto,author,{excludeExtraneousValues:true})
  }

  async getOne(id : number){
    const author = await Author.findOneBy({ id })
    if(!author){
      throw new NotFoundException('Author with given id not found')
    }

    return author
  }
}