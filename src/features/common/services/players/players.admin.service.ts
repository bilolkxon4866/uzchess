import { Injectable, NotFoundException } from '@nestjs/common';
import { PlayersCreateAdminDto } from '../../dtos/players/admin/players.create.admin.dto';
import { Player } from '../../entities/players.entity';
import { plainToInstance } from 'class-transformer';
import { PlayersListAdminDto } from '../../dtos/players/admin/players.list.admin.dto';
import { PlayersUpdateAdminDto } from '../../dtos/players/admin/players.update.admin.dto';

@Injectable()
export class PlayersAdminService{
  async create(payload : PlayersCreateAdminDto,image : Express.Multer.File){
    const player = Player.create(payload as Player)
    if(image){
      player.image = image.path
    }
    await Player.save(player)
    return player
  }

  async getAll(){
    const player = await  Player.find()
    return plainToInstance(PlayersListAdminDto,player,{excludeExtraneousValues : true})
  }

  async getOne(id : number){
    const player = await  Player.findOneBy({id})
    if(!player){
      throw new NotFoundException('player with given id not found')
    }
    return player
  }

  async update(id: number, payload: PlayersUpdateAdminDto, image: Express.Multer.File) {
    const player = await Player.findOneBy({ id });
    if (!player) {
      throw new NotFoundException('Player with given id not found');
    }

    Object.assign(
      player,
      Object.fromEntries(
        Object.entries(payload).filter(([key, value]) => value)
      )
    );

    if (image) {
      player.image = image.path;
    }

    await Player.save(player);
    return player;
  }

  async delete(id: number) {
    const player = await Player.findOneBy({ id });
    if (!player) {
      throw new NotFoundException('Player with given id not found');
    }

    await Player.remove(player);
  }
}