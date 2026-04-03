import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { PurchasedCoursePublicService } from '../../services/purchasedCourse/purchasedCourse.public.service';
import { PurchasedCourseListPublicDto } from '../../dtos/puchasedCourse/public/purchasedCourse.list.public.dto';
import { PurchasedCourseDetailPublicDto } from '../../dtos/puchasedCourse/public/purchasedCourse.detail.public.dto';

@Controller('public/purchasedCourse')
export class PurchasedCoursePublicController{

  constructor(private service : PurchasedCoursePublicService) {
  }

  @Get()
  @ApiOkResponse({type : () => PurchasedCourseListPublicDto,isArray:true})
  async getAll(){
    return await this.service.getAll()
  }
  @Get(':id')
  @ApiOkResponse({type : () => PurchasedCourseDetailPublicDto})
  async getOne(@Param('id', ParseIntPipe) id : number){
    return await this.service.getOne(id)
  }
}