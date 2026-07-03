import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { NewsViewsAdminService } from '../../../application/services/newsViews/newsViews.admin.service';
import { NewsViewsCreateAdminDto } from '../../dtos/newsViews/admin/newsViews.create.admin.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { NewsViewsListAdminDto } from '../../dtos/newsViews/admin/newsViews.list.admin.dto';
import { NewsViewsUpdateAdminDto } from '../../dtos/newsViews/admin/newsViews.update.admin.dto';
import { PaginationFilters } from '../../../../common/filters/paginationfilter';

@Controller('admin/newsViews')
export class NewsViewsAdminController{

  constructor(private service : NewsViewsAdminService) {
  }

  @Post()
  async create(@Body() payload : NewsViewsCreateAdminDto){
    return await this.service.create(payload)
  }

  @Get()
  @ApiOkResponse({type : () => NewsViewsListAdminDto,isArray : true})
  async getAll(filters: PaginationFilters){
    return await this.service.getAll(filters)
  }

  @Get(':id')
  @ApiOkResponse({type : () => NewsViewsListAdminDto})
  async getOne(@Param('id' ,ParseIntPipe) id : number){
    return await this.service.getOne(id)
  }

  @Patch(':id')
  async update(@Param('id',ParseIntPipe) id : number,@Body() payload : NewsViewsUpdateAdminDto){
    return await this.service.update(id,payload)
  }

  @Delete(':id')
  async delete(@Param('id',ParseIntPipe)id : number){
    return await this.service.delete(id)
  }
}