import { Injectable, NotFoundException } from '@nestjs/common';
import { CountryCreateAdminDto } from '../../dtos/countries/admin/country.create.admin.dto';
import { Country } from '../../entities/country.entity';
import { plainToInstance } from 'class-transformer';
import { CountryListAdminDto } from '../../dtos/countries/admin/country.list.admin.dto';
import { CountryUpdateAdminDto } from '../../dtos/countries/admin/country.update.admin.dto';

@Injectable()
export class CountryAdminService{
  async create(payload : CountryCreateAdminDto,icon : Express.Multer.File){
    const country = Country.create(payload as Country);
    await Country.save(country);
    return country;
  }

  async getAll(){
    const country = await Country.find();
    return plainToInstance(CountryListAdminDto, country, { excludeExtraneousValues: true });
  }

  async getOne(id : number){
    const country = await Country.findOneBy({ id });

    if (!country) {
      throw new NotFoundException('Country with given id not found');
    }

    return country;
  }

  async update(id : number,payload : CountryUpdateAdminDto,icon? :Express.Multer.File){
    const country = await Country.findOneBy({ id });

    if (!country) {
      throw new NotFoundException('Country with given id not found');
    }
    Object.assign(
      country,
      Object.fromEntries(
        Object.entries(payload).filter(([key, value]) => value)
      )
    )
    await Country.save(country);4
    return country;
  }

  async delete(id : number){
    const country = await Country.findOneBy({ id });

    if (!country) {
      throw new NotFoundException('Country with given id not found');
    }

    await Country.remove(country);
  }
}