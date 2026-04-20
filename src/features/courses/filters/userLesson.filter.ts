import { PaginationFilters } from '../../common/filters/paginationfilter';
import { IsBoolean, IsInt, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserLessonFilter extends PaginationFilters{
  @IsInt()
  @IsOptional()
  @ApiProperty({required: false})
  userId?: number

  @IsBoolean()
  @IsOptional()
  @ApiProperty({required: false})
  isCompleted?: boolean

}