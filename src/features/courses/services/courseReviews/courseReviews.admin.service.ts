// courseReview.admin.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CourseReview } from '../../entities/courseReviews.entity';
import { CourseReviewsListAdminDto } from '../../dtos/courseReviews/admin/courseReviews.list.admin.dto';
import { CourseReviewsCreateAdminDto } from '../../dtos/courseReviews/admin/courseReviews.create.admin.dto';
import { CourseReviewsUpdateAdminDto } from '../../dtos/courseReviews/admin/courseReviews.update.admin.dto';

@Injectable()
export class CourseReviewAdminService {
  async getAll() {
    const items = await CourseReview.find();
    return plainToInstance(CourseReviewsListAdminDto, items, { excludeExtraneousValues: true });
  }

  async getOne(id: number) {
    const item = await CourseReview.findOneBy({ id });
    if (!item) {
      throw new NotFoundException('CourseReview with given id not found');
    }
    return item;
  }

  async create(payload: CourseReviewsCreateAdminDto) {
    const item = CourseReview.create(payload);
    await CourseReview.save(item);
    return item;
  }

  async update(id: number, payload: CourseReviewsUpdateAdminDto) {
    const item = await CourseReview.findOneBy({ id });
    if (!item) {
      throw new NotFoundException('CourseReview with given id not found');
    }
    Object.assign(
      item,
      Object.fromEntries(
        Object.entries(payload).filter(([key, value]) => value)
      )
    );
    await CourseReview.save(item);
    return item;
  }

  async delete(id: number) {
    const item = await CourseReview.findOneBy({ id });
    if (!item) {
      throw new NotFoundException('CourseReview with given id not found');
    }
    await CourseReview.remove(item);
  }
}