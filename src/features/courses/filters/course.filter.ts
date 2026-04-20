import { PaginationFilters } from '../../common/filters/paginationfilter';
import { IsInt, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CourseFilter extends PaginationFilters{
  @IsInt()
  @IsOptional()
  @ApiProperty({ required: false })
  languageId?: number

  @IsInt()
  @IsOptional()
  @ApiProperty({ required: false })
  categoryId?: number

  @IsInt()
  @IsOptional()
  @ApiProperty({ required: false })
  difficultyId?: number

  @IsInt()
  @IsOptional()
  @ApiProperty({ required: false })
  rating?: number

  @IsInt()
  @IsOptional()
  @ApiProperty({ required: false })
  authorId?: number
}