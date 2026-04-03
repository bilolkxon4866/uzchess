import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { NewsViewsListPublicDto } from '../../dtos/newsViews/public/newsViews.list.public.dto';
import { NewsViewsPublicService } from '../../services/newsViews/newsViews.public.service';

@Controller('public/newsViews')
export class NewsViewsPublicController{

  constructor(private service : NewsViewsPublicService) {
  }
  @Get()
  @ApiOkResponse({type : () => NewsViewsListPublicDto,isArray : true})
  async getAll(){
    return await this.service.getAll()
  }

  @Get(':id')
  @ApiOkResponse({type : () => NewsViewsListPublicDto})
  async getOne(@Param('id' ,ParseIntPipe) id : number){
    return await this.service.getOne(id)
  }
}