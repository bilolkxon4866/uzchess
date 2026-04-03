import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { DifficultyPublicService } from '../../services/difficulties/difficulty.public.service';
import { DifficultyListPublicDto } from '../../dtos/difficulties/public/difficulty.list.public.dto';

@Controller('public/difficulty')
export class DifficultyPublicController{
  constructor(private service : DifficultyPublicService) {
  }
  @Get()
  @ApiOkResponse({type : () => DifficultyListPublicDto,isArray:true})
  async getAll(){
    return await this.service.getAll()
  }

  @Get(':id')
  @ApiOkResponse({type : () => DifficultyListPublicDto})
  async getOne(@Param('id',ParseIntPipe)id : number){
    return await this.service.getOne(id)
  }
}