import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CourseLessonAdminService } from '../../services/courseLessons/courseLesson.admin.service';
import { CourseLessonCreateAdminDto } from '../../dtos/courseLessons/admin/courseLesson.create.admin.dto';
import { ApiConsumes, ApiOkResponse } from '@nestjs/swagger';
import { CourseLessonListAdminDto } from '../../dtos/courseLessons/admin/courseLesson.list.admin.dto';
import { CourseLessonUpdateAdminDto } from '../../dtos/courseLessons/admin/courseLesson.update.admin.dto';
import { CourseLessonDetailAdminDto } from '../../dtos/courseLessons/admin/courseLesson.detail.admin.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { storageOptions } from '../../../../config/multer.config';

@Controller('admin/courseLesson')
export class CourseLessonAdminController{

  constructor(private service :  CourseLessonAdminService) {
  }

  @Post()
  @ApiConsumes('multipart-form-data')
  @UseInterceptors(FileInterceptor('video',{
    storage : storageOptions,limits : {
      fileSize : 1024 * 256
    }
  }))
  async create(@Body()payload : CourseLessonCreateAdminDto,@UploadedFile() video : Express.Multer.File){
    return await this.service.create(payload,video)
  }

  @Get()
  @ApiOkResponse({type : () => CourseLessonListAdminDto,isArray:true})
  async getAll(){
    return await this.service.getAll()
  }

  @Get(':id')
  @ApiOkResponse({type : () => CourseLessonDetailAdminDto})
  async getOne(@Param('id',ParseIntPipe)id : number){
    return await this.service.getOne(id)
  }

  @Patch(':id')
  @ApiConsumes('multipart-form-data')
  @UseInterceptors(FileInterceptor('video',{storage : storageOptions}))
  async update(@Param('id',ParseIntPipe)id : number,@Body()payload : CourseLessonUpdateAdminDto,@UploadedFile() video : Express.Multer.File){
    return await this.service.update(id,payload,video)
  }

  @Delete(':id')
  async delete(@Param('id ',ParseIntPipe)id : number){
    return await this.service.delete(id)
  }
}