import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CourseCategoryAdminService } from '../../services/courseCategory/courseCategory.admin.service';
import { CourseCategoryListAdminDto } from '../../dtos/courseCategories/admin/courseCategory.list.admin.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { CourseCategoryDetailAdminDto } from '../../dtos/courseCategories/admin/courseCategory.detail.admin.dto';
import { CourseCategoryCreateAdminDto } from '../../dtos/courseCategories/admin/courseCategory.create.admin.dto';
import { CourseCategoryUpdateAdminDto } from '../../dtos/courseCategories/admin/courseCategory.update.admin.dto';

@Controller('admin/courseCategory')
export class CourseCategoryAdminController{

  constructor(private service : CourseCategoryAdminService) {
  }

  @Post()
  async create(@Body() payload : CourseCategoryCreateAdminDto){
     return await this.service.create(payload)
  }

  @Get()
  @ApiOkResponse({type : () => CourseCategoryListAdminDto,isArray:true})
  async getAll(){
    return await this.service.getAll()
  }

  @Get(':id')
  @ApiOkResponse({type : () => CourseCategoryDetailAdminDto})
  async getOne(@Param('id', ParseIntPipe)id : number){
    return await this.service.getOne(id)
  }

  @Patch(':id')
  async update(@Param('id',ParseIntPipe)id : number,@Body() payload : CourseCategoryUpdateAdminDto){
    return await this.service.update(id,payload)
  }

  @Delete(':id')
  async delete(@Param('id',ParseIntPipe)id : number){
    return await this.service.delete(id)
  }
}