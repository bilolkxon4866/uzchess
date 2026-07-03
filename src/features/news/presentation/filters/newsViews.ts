import { PaginationFilters } from '../../../common/filters/paginationfilter';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class NewsViewsFilter extends PaginationFilters{
  @IsNumber()
  @IsOptional()
  @ApiProperty({required: false})
  userId?: number
}