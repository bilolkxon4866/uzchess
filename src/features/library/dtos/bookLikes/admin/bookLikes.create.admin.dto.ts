import { IsDateString, IsNumber } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class BookLikesCreateAdminDto {
  @IsNumber()
  @ApiProperty()
  userId!: number;

  @IsNumber()
  @ApiProperty()
  bookId!: number;

  @IsDateString()
  @ApiProperty()
  date!: string;
}