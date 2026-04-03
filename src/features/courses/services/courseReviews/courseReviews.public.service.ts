import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CourseReview } from '../../entities/courseReviews.entity';
import { CourseReviewsListPublicDto } from '../../dtos/courseReviews/public/courseReviews.list.public.dto';

@Injectable()
export class CourseReviewPublicService {
  async getAll() {
    const items = await CourseReview.find();
    return plainToInstance(CourseReviewsListPublicDto, items, { excludeExtraneousValues: true });
  }

  async getOne(id: number) {
    const item = await CourseReview.findOneBy({ id });
    if (!item) {
      throw new NotFoundException('CourseReview with given id not found');
    }
    return item;
  }
}