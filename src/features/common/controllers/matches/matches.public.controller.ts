import { ApiOkResponse } from '@nestjs/swagger';
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { MatchesPublicService } from '../../services/matches/matches.public.service';
import { MatchListPublicDto } from '../../dtos/matches/public/match.list.public.dto';

@Controller('public/matches')
export class MatchesPublicController {
  constructor(private readonly service: MatchesPublicService) {}

  @Get()
  @ApiOkResponse({type: ()=> MatchListPublicDto})
  async getAll(){
    return await this.service.getAll();
  }

  @Get(':id')
  @ApiOkResponse({type: () => MatchListPublicDto})
  async getOne(@Param('id', ParseIntPipe) id: number){
    return await this.service.getOne(id)
  }
}