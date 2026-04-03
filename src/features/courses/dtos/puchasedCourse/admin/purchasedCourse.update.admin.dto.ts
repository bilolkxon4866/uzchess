import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsOptional } from 'class-validator';

export class PurchasedCoursesUpdateAdminDto {
  @ApiProperty()
  @IsNumber()
  @IsOptional()
  userId?: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  coursesId?: number;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isCompleted?: boolean;

  @ApiProperty()
  @IsDateString()
  @IsOptional()
  date?: string;
}