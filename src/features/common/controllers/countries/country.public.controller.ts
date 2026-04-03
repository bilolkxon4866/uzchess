import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { CountryPublicService } from '../../services/countries/country.public.service';
import { CountryListPublicDto } from '../../dtos/countries/public/country.list.public.dto';
import { CountryDetailPublicDto } from '../../dtos/countries/public/country.detail.public.dto';

@Controller('public/country')
export class CountryPublicController {

  constructor(private service : CountryPublicService) {
  }

  @Get()
  @ApiOkResponse({ type: () => CountryListPublicDto, isArray: true })
  async getAll() {
    return await this.service.getAll()
  }

  @Get(':id')
  @ApiOkResponse({type : () => CountryDetailPublicDto})
  async getOne(@Param('id',ParseIntPipe) id: number) {
    return await this.service.getOne(id)
  }
}
