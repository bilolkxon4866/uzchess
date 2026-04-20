import { PaginationFilters } from '../../common/filters/paginationfilter';
import { IsInt, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CourseReviewsFilter extends PaginationFilters{
  @IsInt()
  @IsOptional()
  @ApiProperty()
  userId?: number

  @IsInt()
  @IsOptional()
  @ApiProperty()
  courseId?: number

  @IsInt()
  @IsOptional()
  @ApiProperty()
  rating?: number
}
