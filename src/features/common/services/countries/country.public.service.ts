import { Injectable, NotFoundException } from '@nestjs/common';
import { Country } from '../../entities/country.entity';
import { plainToInstance } from 'class-transformer';
import { CountryListPublicDto } from '../../dtos/countries/public/country.list.public.dto';

@Injectable()
export class CountryPublicService{
  async getAll(){
    const country = await Country.find();
    return plainToInstance(CountryListPublicDto, country, { excludeExtraneousValues: true });
  }

  async getOne(id : number){
    const country = await Country.findOneBy({ id });

    if (!country) {
      throw new NotFoundException('Country with given id not found');
    }

    return country;
  }
}