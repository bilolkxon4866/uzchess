import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { CourseLessonListPublicDto } from '../../dtos/courseLessons/public/courseLesson.list.public.dto';
import { CourseLessonDetailPublicDto } from '../../dtos/courseLessons/public/courseLesson.detail.public.dto';
import { CourseLessonPublicService } from '../../services/courseLessons/courseLesson.public.service';

@Controller('public/courseLesson')
export class CourseLessonPublicController{

  constructor(private service :  CourseLessonPublicService) {
  }

  @Get()
  @ApiOkResponse({type : () => CourseLessonListPublicDto,isArray:true})
  async getAll(){
    return await this.service.getAll()
  }

  @Get(':id')
  @ApiOkResponse({type : () => CourseLessonDetailPublicDto})
  async getOne(@Param('id',ParseIntPipe)id : number){
    return await this.service.getOne(id)
  }
}