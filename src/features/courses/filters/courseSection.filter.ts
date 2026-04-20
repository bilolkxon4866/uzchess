import { PaginationFilters } from '../../common/filters/paginationfilter';
import { IsInt, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CourseSectionFilter extends PaginationFilters{
  @IsInt()
  @IsOptional()
  @ApiProperty({required: false})
  courseId?: number
}

