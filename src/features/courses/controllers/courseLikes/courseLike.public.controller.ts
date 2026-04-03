import { Controller, Param, ParseIntPipe, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CourseLikePublicService } from '../../services/courseLike/courseLike.public.service';
import AuthenticationGuard from '../../../../core/guard/authentication.guard';
import type { Request } from 'express';

@ApiTags('CourseLike - Public')
@ApiBearerAuth()
@Controller('public/course-like')
@UseGuards(AuthenticationGuard)
export class CourseLikePublicController{

  constructor(private readonly service : CourseLikePublicService) {}

  @Post(':courseId')
  async toggleLike(@Req() request : Request, @Param('courseId',ParseIntPipe)id : number){
    // @ts-ignore
    return await this.service.toggleLike(id,request.user.id)
  }
}