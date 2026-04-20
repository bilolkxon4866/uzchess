import { PaginationFilters } from '../../common/filters/paginationfilter';
import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CourseCategoryFilter extends PaginationFilters{
  @IsString()
  @IsOptional()
  @ApiProperty({required: false})
  title?: string
}