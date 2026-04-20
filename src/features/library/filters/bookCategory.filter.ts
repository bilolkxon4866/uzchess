import { PaginationFilters } from '../../common/filters/paginationfilter';
import { IsInt, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class BookCategoryFilter extends PaginationFilters {
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  title?: string;
}