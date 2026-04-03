import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ReportCategoriesCreateAdminDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
  @ApiProperty()
  title!: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false })
  order?: number;
}