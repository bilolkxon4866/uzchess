import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { BookLikesAdminService } from '../../services/bookLikes/bookLikes.admin.service';
import { BookLikesCreateAdminDto } from '../../dtos/bookLikes/admin/bookLikes.create.admin.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { BookLikesListAdminDto } from '../../dtos/bookLikes/admin/bookLikes.list.admin.dto';
import { BookLikesDetailAdminDto } from '../../dtos/bookLikes/admin/bookLikes.detail.admin.dto';
import { BookLikesUpdateAdminDto } from '../../dtos/bookLikes/admin/bookLikes.update.admin.dto';
import { elementAt } from 'rxjs';

@Controller('admin/bookLikes')
export class BookLikesAdminController{

  constructor(private service : BookLikesAdminService) {
  }
  @Post()
  async create(@Body() payload : BookLikesCreateAdminDto){
    return await this.service.create(payload)
  }

  @Get()
  @ApiOkResponse({type : () => BookLikesListAdminDto,isArray : true})
  async getAll(){
    return await this.service.getAll()
  }

  @Get(':id')
  @ApiOkResponse({type : () => BookLikesDetailAdminDto})
  async getOne(@Param('id',ParseIntPipe) id : number){
    return await this.service.getOne(id)
  }

  @Patch(':id')
  async update(@Param('id',ParseIntPipe) id : number,@Body()payload : BookLikesUpdateAdminDto){
    return await this.service.update(id,payload)
  }

  @Delete(':id')
  async delete(@Param('id',ParseIntPipe)id : number){
    return await this.service.delete(id)
  }
}