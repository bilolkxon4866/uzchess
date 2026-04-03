import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { CourseReviewPublicService } from '../../services/courseReviews/courseReviews.public.service';
import { CourseReviewsListPublicDto } from '../../dtos/courseReviews/public/courseReviews.list.public.dto';
import { CourseReviewsDetailPublicDto } from '../../dtos/courseReviews/public/courseReviews.detail.public.dto';

@Controller('public/courseReviews')
export class CourseReviewPublicController {

  constructor(private service: CourseReviewPublicService) {
  }

  @Get()
  @ApiOkResponse({ type: () => CourseReviewsListPublicDto, isArray: true })
  async getAll() {
    return await this.service.getAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: () => CourseReviewsDetailPublicDto })
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return await this.service.getOne(id);
  }
}