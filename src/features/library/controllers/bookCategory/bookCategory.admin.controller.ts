  import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
  import { ApiOkResponse } from '@nestjs/swagger';
  import { BookCategoryListAdminDto } from '../../dtos/bookCategories/admin/bookCategory.list.admin.dto';
  import { BookCategoryCreateAdminDto } from '../../dtos/bookCategories/admin/bookCategory.create.admin.dto';
  import { BookCategoryUpdateAdminDto } from '../../dtos/bookCategories/admin/bookCategory.update.admin.dto';
  import { BookCategoryAdminService } from '../../services/bookCategory/bookCategory.admin.service';

  @Controller('admin/bookCategory')
  export class bookCategoryAdminController {

    constructor(private service : BookCategoryAdminService) {
    }

    @Get()
    @ApiOkResponse({type : () => BookCategoryListAdminDto})
    async getAll(){
      return await this.service.getAll()
    }

    @Get(':id')
    @ApiOkResponse({type : () => BookCategoryListAdminDto})
    async getOne(@Param('id',ParseIntPipe)id: number){
      return await this.service.getOne(id)
    }

    @Post()
    async create(@Body()payload: BookCategoryCreateAdminDto){
      return await this.service.create(payload)
    }

    @Patch(':id')
    async update(@Param('id',ParseIntPipe) id: number, @Body() payload: BookCategoryUpdateAdminDto){
      return await this.service.update(id,payload)
    }

    @Delete(':id')
    async delete(@Param('id',ParseIntPipe) id : number){
      return await this.service.delete(id)
    }
  }