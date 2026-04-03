import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { BookReviewsCreateAdminDto } from '../../dtos/bookReviews/admin/bookReviews.create.admin.dto';
import { BookReviewsAdminService } from '../../services/bookReviews/bookReviews.admin.service';
import { ApiOkResponse } from '@nestjs/swagger';
import { BookReviewsListAdminDto } from '../../dtos/bookReviews/admin/bookReviews.list.admin.dto';
import { BookReviewsDetailAdminDto } from '../../dtos/bookReviews/admin/bookReviews.detail.admin.dto';
import { BookReviewsUpdateAdminDto } from '../../dtos/bookReviews/admin/bookReviews.update.admin.dto';

@Controller('admin/bookReviews')
export class BookReviewsAdminController{

  constructor(private service : BookReviewsAdminService) {
  }

  @Post()
  async create(@Body()payload : BookReviewsCreateAdminDto){
    return await this.service.create(payload)
  }

  @Get()
  @ApiOkResponse({type : () => BookReviewsListAdminDto,isArray : true})
  async getAll(){
    return await this.service.getAll()
  }

  @Get(':id')
  @ApiOkResponse({type : () => BookReviewsDetailAdminDto})
  async getOne(@Param('id' , ParseIntPipe) id : number){
    return await this.service.getOne(id)
  }

  @Patch(':id')
  async update(@Param('id',ParseIntPipe) id : number,@Body() payload : BookReviewsUpdateAdminDto){
    return await this.service.update(id,payload)
  }

  @Delete(':id')
  async delete(@Param('id',ParseIntPipe) id : number){
    return await this.service.delete(id)
  }
}