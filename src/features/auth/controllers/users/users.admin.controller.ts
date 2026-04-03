import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { UsersAdminService } from '../../services/users/users.admin.service';
import { UserCreateAdminDto } from '../../dtos/users/admin/users.create.admin.dto';
import { ApiConsumes, ApiOkResponse } from '@nestjs/swagger';
import { UserListAdminDto } from '../../dtos/users/admin/users.list.admin.dto';
import { UsersDetailAdminDto } from '../../dtos/users/admin/users.detail.admin.dto';
import { UsersUpdateAdminDto} from '../../dtos/users/admin/users.update.admin.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { storageOptions } from '../../../../config/multer.config';

@Controller('admin/users')
export class UsersAdminController{
  constructor(private service : UsersAdminService) {
  }

  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('profileImage',{
    storage : storageOptions,limits : {
      fileSize : 1024 * 256
    }
  }))
  async create(@Body() payload : UserCreateAdminDto,@UploadedFile() profileImage : Express.Multer.File){
    return await this.service.create(payload,profileImage)
  }

  @Get()
  @ApiOkResponse({type : () => UserListAdminDto,isArray : true})
  async getAll(){
    return await this.service.getAll()
  }

  @Get(':id')
  @ApiOkResponse({type : () => UsersDetailAdminDto})
  async getOne(@Param('id',ParseIntPipe)id : number){
    return await this.service.getOne(id)
  }

  @Patch(':id')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('profileImage',{storage : storageOptions}))
  async update(@Param('id', ParseIntPipe) id : number,@Body() payload : UsersUpdateAdminDto,@UploadedFile() profileImage : Express.Multer.File){
    return await this.service.update(id,payload,profileImage)
  }

  @Delete(':id')
  async delete(@Param('id',ParseIntPipe) id : number){
    return await this.service.delete(id)
  }
}