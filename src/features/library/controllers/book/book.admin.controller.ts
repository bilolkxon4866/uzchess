import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { BookAdminService } from '../../services/book/book.admin.service';
import { BookCreateAdminDto } from '../../dtos/book/admin/book.create.admin.dto';
import { ApiConsumes, ApiOkResponse } from '@nestjs/swagger';
import { BookListAdminDto } from '../../dtos/book/admin/book.list.admin.dto';
import { BookUpdateAdminDto } from '../../dtos/book/admin/book.update.admin.dto';
import { BookDetailAdminDto } from '../../dtos/book/admin/book.detail.admin.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { storageOptions } from '../../../../config/multer.config';

@Controller('admin/book')
export class BookAdminController{

  constructor(private service : BookAdminService) {
  }

  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image',{
    storage : storageOptions,limits : {
      fileSize : 1024 * 256
    }
  }))
  async create(@Body() payload : BookCreateAdminDto,@UploadedFile() image : Express.Multer.File){
    return await this.service.create(payload,image)
  }

  @Get()
  @ApiOkResponse({type : () => BookListAdminDto,isArray:true})
  async getAll(){
    return await this.service.getAll()
  }

  @Get(':id')
  @ApiOkResponse({type : () => BookDetailAdminDto})
  async getOne(@Param('id',ParseIntPipe) id : number){
    return await this.service.getOne(id)
  }

  @Patch(':id')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image',{storage : storageOptions}))
  async update(@Param('id',ParseIntPipe)id : number,@Body() payload : BookUpdateAdminDto,@UploadedFile() image : Express.Multer.File){
    return await this.service.update(id,payload,image)
  }

  @Delete(':id')
  async delete(@Param('id',ParseIntPipe)id : number){
    return await this.service.delete(id)
  }
}