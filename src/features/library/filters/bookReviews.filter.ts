import { PaginationFilters } from '../../common/filters/paginationfilter';
import { IsInt } from 'class-validator';
import { Optional } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class BookReviewsFilter extends PaginationFilters{
  @IsInt()
  @Optional()
  @ApiProperty({required: false})
  userId?: number

  @IsInt()
  @Optional()
  @ApiProperty()
  bookId?: number

  @IsInt()
  @Optional()
  @ApiProperty()
  rating?: number
}
