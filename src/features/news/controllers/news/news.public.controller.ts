import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { NewsPublicService } from '../../services/news/news.public.service';
import { NewsListPublicDto } from '../../dtos/news/public/news.list.public.dto';
import { NewsDetailPublicDto } from '../../dtos/news/public/news.detail.public.dto';

@Controller('public/news')
export class NewsPublicController {

  constructor(private service : NewsPublicService) {
  }

  @Get()
  @ApiOkResponse({type : () => NewsListPublicDto, isArray : true})
  async getAll()  {
    return await this.service.getAll()
  }

  @Get(':id')
  @ApiOkResponse({type : () => NewsDetailPublicDto})
  async getOne(@Param('id',ParseIntPipe) id: number){
    return await this.service.getOne(id)
  }
}