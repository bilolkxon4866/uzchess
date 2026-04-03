import { Body, Controller, Delete, Get, Param, ParseDatePipe, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { LanguageListAdminDto } from '../../dtos/languages/admin/language.list.admin.dto';
import { LanguageCreateAdminDto } from '../../dtos/languages/admin/language.create.admin.dto';
import { LanguageUpdateAdminDto } from '../../dtos/languages/admin/language.update.admin.dto';
import { LanguageAdminService } from '../../services/languages/language.admin.service';

@Controller('admin/language')
export class LanguageAdminController {

  constructor(private service : LanguageAdminService) {
  }

  @Get()
  @ApiOkResponse({ type: () => LanguageListAdminDto, isArray: true })
  async getAll() {
    return await this.service.getAll()
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return await this.service.getOne(id)
  }

  @Post()
  async create(@Body() payload: LanguageCreateAdminDto) {
    return await this.service.create(payload)
  }

  @Patch(':id')
  async update(@Param('id',ParseIntPipe) id: number, @Body() payload: LanguageUpdateAdminDto) {
    return await this.service.update(id,payload)
  }

  @Delete(':id')
  async delete(@Param('id',ParseIntPipe) id: number) {
    return await this.service.delete(id)
  }
}