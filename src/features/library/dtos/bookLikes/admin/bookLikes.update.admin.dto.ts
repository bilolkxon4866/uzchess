import { IsDateString, IsNumber, IsOptional } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class BookLikesUpdateAdminDto {
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  userId?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  bookId?: number;

  @IsOptional()
  @IsDateString()
  @ApiProperty()
  date?: string;
}