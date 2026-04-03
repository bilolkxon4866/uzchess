import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { AuthorListPublicDto } from '../../dtos/author/public/author.list.public.dto';
import { AuthorDetailPublicDto } from '../../dtos/author/public/author.detail.public.dto';
import { AuthorPublicService } from '../../services/author/author.public.service';

@Controller('public/author')
export class AuthorPublicController{
  constructor(private service : AuthorPublicService) {
  }

  @Get()
  @ApiOkResponse({type : () => AuthorListPublicDto,isArray : true})
  async getAll(){
    return await this.service.getAll()
  }

  @Get(':id')
  @ApiOkResponse({type : () => AuthorDetailPublicDto})
  async getOne(@Param('id',ParseIntPipe) id : number){
    return await this.service.getOne(id)
  }
}