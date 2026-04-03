import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { AuthorAdminService } from '../../services/author/author.admin.service';
import { AuthorCreateAdminDto } from '../../dtos/author/admin/author.create.admin.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { AuthorListAdminDto } from '../../dtos/author/admin/author.list.admin.dto';
import { AuthorDetailAdminDto } from '../../dtos/author/admin/author.detail.admin.dto';
import { AuthorUpdateAdminDto } from '../../dtos/author/admin/author.update.admin.dto';

@Controller('admin/author')
export class AuthorAdminController{
  constructor(private service : AuthorAdminService) {
  }

  @Post()
  async create(@Body() payload : AuthorCreateAdminDto){
    return await this.service.create(payload)
  }

  @Get()
  @ApiOkResponse({type : () => AuthorListAdminDto,isArray : true})
  async getAll(){
    return await this.service.getAll()
  }

  @Get(':id')
  @ApiOkResponse({type : () => AuthorDetailAdminDto})
  async getOne(@Param('id',ParseIntPipe) id : number){
    return await this.service.getOne(id)
  }

  @Patch(':id')
  async update(@Param('id',ParseIntPipe)id : number,@Body() payload : AuthorUpdateAdminDto){
    return await this.service.update(id,payload)
  }

  @Delete(':id')
  async delete(@Param('id',ParseIntPipe) id : number){
    return await this.service.delete(id)
  }
}