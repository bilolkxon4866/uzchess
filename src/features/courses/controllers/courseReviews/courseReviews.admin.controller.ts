// courseReview.admin.controller.ts
import { Body, Controller, Delete, Get, Param, Post, Patch, ParseIntPipe } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { CourseReviewAdminService } from '../../services/courseReviews/courseReviews.admin.service';
import { CourseReviewsListAdminDto } from '../../dtos/courseReviews/admin/courseReviews.list.admin.dto';
import { CourseReviewsDetailAdminDto } from '../../dtos/courseReviews/admin/courseReviews.detail.admin.dto';
import { CourseReviewsCreateAdminDto } from '../../dtos/courseReviews/admin/courseReviews.create.admin.dto';
import { CourseReviewsUpdateAdminDto } from '../../dtos/courseReviews/admin/courseReviews.update.admin.dto';

@Controller('admin/courseReviews')
export class CourseReviewAdminController {

  constructor(private service: CourseReviewAdminService) {
  }

  @Get()
  @ApiOkResponse({ type: () => CourseReviewsListAdminDto, isArray: true })
  async getAll() {
    return await this.service.getAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: () => CourseReviewsDetailAdminDto })
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return await this.service.getOne(id);
  }

  @Post()
  async create(@Body() payload: CourseReviewsCreateAdminDto) {
    return await this.service.create(payload);
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() payload: CourseReviewsUpdateAdminDto) {
    return await this.service.update(id, payload);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.service.delete(id);
  }
}