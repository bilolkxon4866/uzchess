import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ReportCategoriesAdminService } from '../../services/reportCategories/reportCategories.admin.service';
import { ReportCategoriesCreateAdminDto } from '../../dtos/reportCategories/admin/reportCategories.create.admin.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { ReportCategoriesListAdminDto } from '../../dtos/reportCategories/admin/reportCategories.list.admin.dto';
import { ReportCategoriesUpdateAdminDto } from '../../dtos/reportCategories/admin/reportCategories.update.admin.dto';

@Controller('admin/reportCategory')
export class ReportCategoriesAdminController{

  constructor(private service : ReportCategoriesAdminService) {
  }

  @Post()
  async create(payload : ReportCategoriesCreateAdminDto){
    return await this.service.create(payload)
  }

  @Get()
  @ApiOkResponse({type : () => ReportCategoriesListAdminDto,isArray:true})
  async getAll(){
    return await this.service.getAll()
  }

  @Get(':id')
  @ApiOkResponse({type : () => ReportCategoriesListAdminDto})
  async getOne(@Param('id',ParseIntPipe)id : number){
    return await this.service.getOne(id)
  }

  @Patch(':id')
  async update(@Param('id',ParseIntPipe) id : number,@Body() payload : ReportCategoriesUpdateAdminDto){
    return await this.service.update(id,payload)
  }

  @Delete(':id')
  async delete(id : number){
    return await this.service.delete(id)
  }
}