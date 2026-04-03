import { Injectable, NotFoundException } from '@nestjs/common';
import { Difficulty } from '../../entities/difficulty.entity';
import { plainToInstance } from 'class-transformer';
import { DifficultyListPublicDto } from '../../dtos/difficulties/public/difficulty.list.public.dto';

@Injectable()
export class DifficultyPublicService{
  async getAll(){
    const difficult = await Difficulty.find()
    return plainToInstance(DifficultyListPublicDto,difficult,{excludeExtraneousValues:true})
  }

  async getOne(id : number){
    const difficult = await Difficulty.findOneBy({id})
    if(!difficult){
      throw new NotFoundException('difficult with given id not found')
    }

    return difficult
  }
}