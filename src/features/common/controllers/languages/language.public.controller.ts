import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { LanguagePublicService } from '../../services/languages/language.public.service';
import { LanguageListPublicDto } from '../../dtos/languages/public/language.list.public.dto';

@Controller('public/language')
export class LanguagePublicController {

  constructor(private service : LanguagePublicService) {
  }

  @Get()
  @ApiOkResponse({ type: () => LanguageListPublicDto, isArray: true })
  async getAll() {
    return await this.service.getAll()
  }

  @Get(':id')
  async getOne(@Param('id',ParseIntPipe) id: number) {
    return await this.service.getOne(id)
  }
}