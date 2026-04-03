import { IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ReportCategoriesUpdateAdminDto {
  @IsString()
  @IsOptional()
  @MaxLength(64)
  @ApiProperty({ required: false })
  title?: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false })
  order?: number;
}