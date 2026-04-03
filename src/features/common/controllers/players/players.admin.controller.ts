import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { PlayersCreateAdminDto } from '../../dtos/players/admin/players.create.admin.dto';
import { PlayersAdminService } from '../../services/players/players.admin.service';
import { ApiConsumes, ApiOkResponse } from '@nestjs/swagger';
import { PlayersListAdminDto } from '../../dtos/players/admin/players.list.admin.dto';
import { PlayersDetailAdminDto } from '../../dtos/players/admin/players.detail.admin.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { storageOptions } from '../../../../config/multer.config';
import { PlayersUpdateAdminDto } from '../../dtos/players/admin/players.update.admin.dto';

@Controller('admin/player')
export class PlayersAdminController{
  constructor(private service : PlayersAdminService) {
  }

  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image',{
    storage : storageOptions,limits : {
      fileSize : 1024 * 256
    }
  }))
  async create(@Body() payload : PlayersCreateAdminDto,@UploadedFile() image : Express.Multer.File){
    return await this.service.create(payload,image)
  }

  @Get()
  @ApiOkResponse({type : () => PlayersListAdminDto,isArray : true})
  async  getAll(){
    return await this.service.getAll()
  }

  @Get(':id')
  @ApiOkResponse({type : () => PlayersDetailAdminDto})
  async  getOne(@Param('id',ParseIntPipe) id : number){
    return await this.service.getOne(id)
  }

  @Patch(':id')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image', { storage: storageOptions }))
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: PlayersUpdateAdminDto,
    @UploadedFile() image: Express.Multer.File,
  ) {
    return await this.service.update(id, payload, image);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.service.delete(id);
  }
}