import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { PurchasedCourseAdminService } from '../../services/purchasedCourse/purchasedCourse.admin.service';
import { PurchasedCourseCreateAdminDto } from '../../dtos/puchasedCourse/admin/purchasedCourse.create.admin.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { PurchasedCourseListAdminDto } from '../../dtos/puchasedCourse/admin/purchasedCourse.list.admin.dto';
import { PurchasedCourseDetailAdminDto } from '../../dtos/puchasedCourse/admin/purchasedCourse.detail.admin.dto';
import { PurchasedCoursesUpdateAdminDto } from '../../dtos/puchasedCourse/admin/purchasedCourse.update.admin.dto';

@Controller('admin/purchasedCourse')
export class PurchasedCourseAdminController{

  constructor(private service : PurchasedCourseAdminService) {
  }

  @Post()
  async create(@Body()payload : PurchasedCourseCreateAdminDto){
    return await this.service.create(payload)
  }

  @Get()
  @ApiOkResponse({type : () => PurchasedCourseListAdminDto,isArray:true})
  async getAll(){
    return await this.service.getAll()
  }
  @Get(':id')
  @ApiOkResponse({type : () => PurchasedCourseDetailAdminDto})
  async getOne(@Param('id', ParseIntPipe) id : number){
    return await this.service.getOne(id)
  }

  @Patch(':id')
  async update(@Param('id',ParseIntPipe)id : number,@Body() payload : PurchasedCoursesUpdateAdminDto){
    return await this.service.update(id,payload)
  }

  @Delete(':id')
  async delete(@Param('id')id : number){
    return await this.service.delete(id)
  }
}