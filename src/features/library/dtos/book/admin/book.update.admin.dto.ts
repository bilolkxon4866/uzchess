import { IsDateString, IsDecimal, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class BookUpdateAdminDto{
  @IsOptional()
  @IsNumber()
  @ApiProperty({ type: Number })
  authorId?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ type: Number })
  categoryId?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ type: Number })
  languageId?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ type: Number })
  difficultyId?: number;

  @IsOptional()
  @IsString()
  @MaxLength(128)
  @ApiProperty({ type: String })
  title?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ type: String })
  description?: string;

  @IsOptional()
  @IsString()
  @MaxLength(128)
  @ApiProperty({ type: String ,format : 'binary'})
  image?: string;

  @IsOptional()
  @IsNumber()
  @IsDecimal()
  @ApiProperty({ type: Number })
  price?: number;

  @IsOptional()
  @IsNumber()
  @IsDecimal()
  @ApiProperty({ type: Number })
  newPrice?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ type: Number })
  rating?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ type: Number })
  reviewCount?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ type: Number })
  pages?: number;

  @IsOptional()
  @IsDateString()
  @ApiProperty({ type: String })
  pubDate?: string;
}