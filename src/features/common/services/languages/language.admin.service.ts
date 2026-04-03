import { Injectable, NotFoundException } from '@nestjs/common';
import { LanguageCreateAdminDto } from '../../dtos/languages/admin/language.create.admin.dto';
import { Language } from '../../entities/language.entity';
import { plainToInstance } from 'class-transformer';
import { LanguageListAdminDto } from '../../dtos/languages/admin/language.list.admin.dto';
import { LanguageUpdateAdminDto } from '../../dtos/languages/admin/language.update.admin.dto';

@Injectable()
export class LanguageAdminService{
  async create(payload : LanguageCreateAdminDto){
    const language = Language.create(payload as Language);
    await Language.save(language);
    return language;
  }

  async getAll(){
    const language = await Language.find();
    return plainToInstance(LanguageListAdminDto, language, { excludeExtraneousValues: true });
  }

  async getOne(id : number){
    const language = await Language.findOneBy({ id: id });

    if (!language) {
      throw new NotFoundException('Language with given id not found');
    }

    return language;
  }

  async update(id: number,payload : LanguageUpdateAdminDto){
    const language = await Language.findOneBy({ id });

    if (!language) {
      throw new NotFoundException('Languages with given id not found');
    }

    await Language.save(language);
    return language;
  }

  async delete(id : number){
    const language = await Language.findOneBy({ id });

    if (!language) {
      throw new NotFoundException('Languages with given id not found');
    }

    await Language.remove(language);
  }
}