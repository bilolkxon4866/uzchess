import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ApiConsumes, ApiOkResponse } from '@nestjs/swagger';
import { MatchesAdminService } from '../../services/matches/matches.admin.service';
import { MatchesCreateAdminDto } from '../../dtos/matches/admin/matches.create.admin.dto';
import { MatchesListAdminDto } from '../../dtos/matches/admin/matches.list.admin.dto';
import { MatchesUpdateUpdateDto } from '../../dtos/matches/admin/matches.update.update.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { storageOptions } from '../../../../config/multer.config';

@Controller('admin/matches')
export class MatchesAdminController {
  constructor(private readonly service: MatchesAdminService) {}

  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('moves',{
    storage : storageOptions,limits : {
      fileSize : 1024 * 256
    }
  }))
  async create(@Body() payload : MatchesCreateAdminDto,@UploadedFile() moves : Express.Multer.File){
    return await this.service.create(payload,moves)
  }

  @Get()
  @ApiOkResponse({type: ()=> MatchesListAdminDto, isArray: true})
  async getAll(){
    return await this.service.getAll();
  }

  @Get(':id')
  @ApiOkResponse({type: ()=> MatchesListAdminDto})
  async getOne(@Param('id', ParseIntPipe) id: number){
    return await this.service.getOne(id);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number){
    return await this.service.delete(id)
  }

  @Patch(':id')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('moves',{storage : storageOptions}))
  async update(@Param('id', ParseIntPipe) id: number, @Body() payload: MatchesUpdateUpdateDto,@UploadedFile() moves : Express.Multer.File){
    return await this.service.update(id, payload,moves)
  }
}