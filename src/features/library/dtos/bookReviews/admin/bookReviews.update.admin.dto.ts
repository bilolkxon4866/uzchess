import { IsDateString, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class BookReviewsUpdateAdminDto{
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  userId?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  bookId?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  rating?: number;

  @IsOptional()
  @IsString()
  @MaxLength(512)
  @ApiProperty()
  comment?: string;

  @IsOptional()
  @IsDateString()
  @ApiProperty()
  date?: string;
}