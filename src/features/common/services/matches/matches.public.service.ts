import { Injectable, NotFoundException } from '@nestjs/common';
import { MatchesEntity } from '../../entities/matches.entity';
import { plainToInstance } from 'class-transformer';
import { MatchesListAdminDto } from '../../dtos/matches/admin/matches.list.admin.dto';

@Injectable()
export class MatchesPublicService {
  async getAll(){
    const matches = MatchesEntity.find()
    return plainToInstance(MatchesListAdminDto,matches,{excludeExtraneousValues : true});
  }

  async getOne(id: number){
    const matches = await MatchesEntity.findOneBy({id})

    if(!matches){
      throw new NotFoundException('Matches with given id not found')
    }

    return matches;
  }
}