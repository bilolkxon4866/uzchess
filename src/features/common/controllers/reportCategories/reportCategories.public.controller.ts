import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { ReportCategoriesPublicService } from '../../services/reportCategories/reportCategories.public.service';
import { ReportCartegoriesListPublicDto } from '../../dtos/reportCategories/public/reportCartegories.list.public.dto';

@Controller('public/reportCategory')
export class ReportCategoriesPublicController{

  constructor(private service : ReportCategoriesPublicService) {
  }
  @Get()
  @ApiOkResponse({type : () => ReportCartegoriesListPublicDto,isArray:true})
  async getAll(){
    return await this.service.getAll()
  }

  @Get(':id')
  @ApiOkResponse({type : () => ReportCartegoriesListPublicDto})
  async getOne(@Param('id',ParseIntPipe)id : number){
    return await this.service.getOne(id)
  }
}