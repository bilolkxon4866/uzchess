import { Injectable, NotFoundException } from '@nestjs/common';
import { Player } from '../../entities/players.entity';
import { plainToInstance } from 'class-transformer';
import { PlayersListPublicDto } from '../../dtos/players/public/players.list.public.dto';

@Injectable()
export class PlayersPublicService{
  async getAll(){
    const player = await  Player.find()
    return plainToInstance(PlayersListPublicDto,player,{excludeExtraneousValues : true})
  }

  async getOne(id : number){
    const player = await  Player.findOneBy({id})
    if(!player){
      throw new NotFoundException('player with given id not found')
    }
    return player
  }
}