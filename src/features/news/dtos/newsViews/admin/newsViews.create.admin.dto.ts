import { IsDateString, IsNumber, IsOptional } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class NewsViewsCreateAdminDto {
  @IsNumber()
  @ApiProperty()
  userId!: number;

  @IsNumber()
  @ApiProperty()
  newsId!: number;

  @IsDateString()
  @ApiProperty()
  firstDate!: string;

  @IsDateString()
  @ApiProperty()
  lastDate!: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  count!: number;
}