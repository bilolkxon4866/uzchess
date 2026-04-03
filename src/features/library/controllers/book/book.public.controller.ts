import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { BookPublicService } from '../../services/book/book.public.service';
import { BookListPublicDto } from '../../dtos/book/public/book.list.public.dto';
import { BookDetailPublicDto } from '../../dtos/book/public/book.detail.public.dto';

@Controller('public/book')
export class BookPublicController{

  constructor(private service : BookPublicService) {
  }
  @Get()
  @ApiOkResponse({type : () => BookListPublicDto,isArray:true})
  async getAll(){
    return await this.service.getAll()
  }

  @Get(':id')
  @ApiOkResponse({type : () => BookDetailPublicDto})
  async getOne(@Param('id',ParseIntPipe) id : number){
    return await this.service.getOne(id)
  }
}