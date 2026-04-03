import { IsDateString, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class BookReviewsCreateAdminDto{
  @IsNumber()
  @ApiProperty()
  userId!: number;

  @IsNumber()
  @ApiProperty()
  bookId!: number;

  @IsNumber()
  @ApiProperty()
  rating!: number;

  @IsOptional()
  @IsString()
  @MaxLength(512)
  @ApiProperty()
  comment!: string;

  @IsDateString()
  @ApiProperty()
  date!: string;
}