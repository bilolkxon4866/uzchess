import { Injectable, NotFoundException } from '@nestjs/common';
import { ReportCategory } from '../../entities/reportCategories.entity';
import { plainToInstance } from 'class-transformer';
import { ReportCartegoriesListPublicDto } from '../../dtos/reportCategories/public/reportCartegories.list.public.dto';

@Injectable()
export class ReportCategoriesPublicService{
  async getAll(){
    const reportCategory = await ReportCategory.find()
    return plainToInstance(ReportCartegoriesListPublicDto,reportCategory,{excludeExtraneousValues :true})
  }
  
  async getOne(id : number){
    const reportCategory = await ReportCategory.findOneBy({ id });
    if(!reportCategory) throw new NotFoundException(' reportCategory with given id not found')
    return reportCategory
  }
}