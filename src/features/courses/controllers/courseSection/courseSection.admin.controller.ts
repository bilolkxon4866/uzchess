import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { CourseCategoryListAdminDto } from '../../dtos/courseCategories/admin/courseCategory.list.admin.dto';
import { CourseSectionAdminService } from '../../services/courseSection/courseSection.admin.service';
import { CourseCategoryDetailAdminDto } from '../../dtos/courseCategories/admin/courseCategory.detail.admin.dto';
import { CourseSectionUpdateAdminDto } from '../../dtos/courseSection/admin/courseSection.update.admin.dto';
import { CourseSectionCreateAdminDto } from '../../dtos/courseSection/admin/courseSection.create.admin.dto';

@Controller('admin/courseSection')
export class CourseSectionAdminController{

  constructor(private service : CourseSectionAdminService) {
  }

  @Get()
  @ApiOkResponse({type : () => CourseCategoryListAdminDto,isArray:true})
  async getAll(){
    return await this.service.getAll()
  }

  @Get(':id')
  @ApiOkResponse({type : () => CourseCategoryDetailAdminDto})
  async getOne(@Param('id',ParseIntPipe)id : number){
    return await this.service.getOne(id)
  }

  @Post()
  async create(@Body() payload : CourseSectionCreateAdminDto){
    return await this.service.create(payload)
  }

  @Patch(':id')
  async update(@Param('id',ParseIntPipe)id : number,@Body()payload : CourseSectionUpdateAdminDto){
    return await this.service.update(id,payload)
  }

  @Delete(':id')
  async delete(@Param('id',ParseIntPipe)id :number){
    return await this.service.delete(id)
  }
}