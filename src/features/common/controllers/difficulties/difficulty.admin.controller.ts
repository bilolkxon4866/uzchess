import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { DifficultyAdminService } from '../../services/difficulties/difficulty.admin.service';
import { DifficultyCreateAdminDto } from '../../dtos/difficulties/admin/difficulty.create.admin.dto';
import { ApiConsumes, ApiOkResponse } from '@nestjs/swagger';
import { DifficultyListAdminDto } from '../../dtos/difficulties/admin/difficulty.list.admin.dto';
import { DifficultyUpdateAdminDto } from '../../dtos/difficulties/admin/difficulty.update.admin.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { storageOptions } from '../../../../config/multer.config';

@Controller('admin/difficulty')
export class DifficultyAdminController{
  constructor(private service : DifficultyAdminService) {
  }

  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('icon',{
    storage : storageOptions,limits : {
      fileSize : 1024 * 256,
    }
  }))
  async create(@Body()payload : DifficultyCreateAdminDto,@UploadedFile() icon : Express.Multer.File){
    return await this.service.create(payload,icon)
  }

  @Get()
  @ApiOkResponse({type : () => DifficultyListAdminDto,isArray:true})
  async getAll(){
    return await this.service.getAll()
  }

  @Get(':id')
  @ApiOkResponse({type : () => DifficultyListAdminDto})
  async getOne(@Param('id',ParseIntPipe)id : number){
    return await this.service.getOne(id)
  }

  @Patch(':id')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('icon',{storage : storageOptions}))
  async update(@Param('id',ParseIntPipe)id : number,@Body()payload : DifficultyUpdateAdminDto,@UploadedFile() icon : Express.Multer.File){
    return await this.service.update(id,payload,icon)
  }

  @Delete(':id')
  async delete(@Param('id',ParseIntPipe)id : number){
    return await this.service.delete(id)
  }
}