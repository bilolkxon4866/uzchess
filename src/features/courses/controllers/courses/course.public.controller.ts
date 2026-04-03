import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common'
import { ApiOkResponse } from '@nestjs/swagger';
import { CoursePublicService } from '../../services/courses/course.public.service';
import { CourseListPublicDto } from '../../dtos/courses/public/course.list.public.dto';
import { CourseDetailPublicDto } from '../../dtos/courses/public/course.detail.public.dto';

@Controller('public/courses')
export class CoursePublicController{

  constructor(private service : CoursePublicService) {
  }

  @Get()
  @ApiOkResponse({type : () => CourseListPublicDto,isArray:true})
  async getAll(){
    return await this.service.getAll()
  }

  @Get(':id')
  @ApiOkResponse({type : () => CourseDetailPublicDto})
  async getOne(@Param('id',ParseIntPipe)id : number){
    return await this.service.getOne(id)
  }
}