import { Injectable, NotFoundException } from '@nestjs/common';
import { MatchesEntity } from '../../entities/matches.entity';
import { MatchesCreateAdminDto } from '../../dtos/matches/admin/matches.create.admin.dto';
import { MatchesUpdateUpdateDto } from '../../dtos/matches/admin/matches.update.update.dto';
import { plainToInstance } from 'class-transformer';
import { MatchesListAdminDto } from '../../dtos/matches/admin/matches.list.admin.dto';

@Injectable()
export class MatchesAdminService {
  async create(payload : MatchesCreateAdminDto,moves : Express.Multer.File){
    const matches = MatchesEntity.create(payload)
    if(moves){
      matches.moves = moves.path
    }
    await MatchesEntity.save(matches)
    return matches
  }

  async getAll() {
    const matches = await MatchesEntity.find();
    return plainToInstance(MatchesListAdminDto,matches,{excludeExtraneousValues:true});
  }

  async getOne(id: number) {
    const matches = await MatchesEntity.findOneBy({ id });

    if (!matches) {
      throw new NotFoundException('Matches with given id not found');
    }

    return matches;
  }

  async delete(id: number) {
    const matches = await MatchesEntity.findOneBy({ id });

    if (!matches) {
      throw new NotFoundException('Matches with given id not found');
    }

    await MatchesEntity.remove(matches);
  }

  async update(id: number, payload: MatchesUpdateUpdateDto,moves : Express.Multer.File) {
    const matches = await MatchesEntity.findOneBy({ id });
    if (!matches) {
      throw new NotFoundException('Matches with given id not found');
    }
    Object.assign(
      matches,
      Object.fromEntries(
        Object.entries(payload).filter(([key,value]) => value)
      )
    )
    if(moves){
      matches.moves = moves.path
    }
    await MatchesEntity.save(matches)
    return matches
  }
}