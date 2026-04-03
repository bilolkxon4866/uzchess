import { Injectable, NotFoundException } from '@nestjs/common';
import { LanguageCreateAdminDto } from '../../dtos/languages/admin/language.create.admin.dto';
import { Language } from '../../entities/language.entity';
import { plainToInstance } from 'class-transformer';
import { LanguageListAdminDto } from '../../dtos/languages/admin/language.list.admin.dto';
import { LanguageUpdateAdminDto } from '../../dtos/languages/admin/language.update.admin.dto';
import { LanguageListPublicDto } from '../../dtos/languages/public/language.list.public.dto';

@Injectable()
export class LanguagePublicService{
  async getAll(){
    const language = await Language.find();
    return plainToInstance(LanguageListPublicDto, language, { excludeExtraneousValues: true });
  }

  async getOne(id : number){
    const language = await Language.findOneBy({ id: id });

    if (!language) {
      throw new NotFoundException('Language with given id not found');
    }

    return language;
  }
}