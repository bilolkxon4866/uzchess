import { IsDateString, IsNumber, IsOptional } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class NewsViewsUpdateAdminDto{
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  userId?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  newsId?: number;

  @IsOptional()
  @IsDateString()
  @ApiProperty()
  firstDate?: string;

  @IsOptional()
  @IsDateString()
  @ApiProperty()
  lastDate?: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  count?: number;
}