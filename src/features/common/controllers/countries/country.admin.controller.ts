import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ApiConsumes, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CountryListAdminDto } from '../../dtos/countries/admin/country.list.admin.dto';
import { CountryDetailAdminDto } from '../../dtos/countries/admin/country.detail.admin.dto';
import { CountryCreateAdminDto } from '../../dtos/countries/admin/country.create.admin.dto';
import { CountryUpdateAdminDto } from '../../dtos/countries/admin/country.update.admin.dto';
import { CountryAdminService } from '../../services/countries/country.admin.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { storageOptions } from '../../../../config/multer.config';


@ApiTags('Country-admin')
@Controller('admin/country')
export class CountryAdminController {

  constructor(private service : CountryAdminService) {
  }

  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('flag', {
    storage: storageOptions, limits: {
      fileSize: 1024 * 256,
    },
  }))
  async create(@Body() payload: CountryCreateAdminDto,@UploadedFile() icon: Express.Multer.File) {
    return await this.service.create(payload,icon)
  }

  @Get()
  @ApiOkResponse({ type: () => CountryListAdminDto, isArray: true })
  async getAll() {
    return await this.service.getAll()
  }

  @Get(':id')
  @ApiOkResponse({type : () => CountryDetailAdminDto})
  async getOne(@Param('id',ParseIntPipe) id: number) {
    return await this.service.getOne(id)
  }

  @Patch(':id')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('flag',{storage : storageOptions}))
  async update(@Param('id',ParseIntPipe) id: number, @Body() payload: CountryUpdateAdminDto,@UploadedFile() icon?:Express.Multer.File) {
    return await this.service.update(id,payload,icon)
  }

  @Delete(':id')
  async delete(@Param('id',ParseIntPipe) id: number) {
    return await this.service.delete(id)
  }
}
