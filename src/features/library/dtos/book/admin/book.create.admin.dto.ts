import { IsDateString, IsDecimal, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class BookCreateAdminDto {
  @IsNumber()
  @ApiProperty({ type: Number })
  authorId!: number;

  @IsNumber()
  @ApiProperty({ type: Number })
  categoryId!: number;

  @IsNumber()
  @ApiProperty({ type: Number })
  languageId!: number;

  @IsNumber()
  @ApiProperty({ type: Number })
  difficultyId!: number;

  @IsString()
  @MaxLength(128)
  @ApiProperty({ type: String })
  title!: string;

  @IsString()
  @ApiProperty({ type: String })
  description!: string;

  @IsOptional()
  @IsString()
  @MaxLength(128)
  @ApiProperty({ type: 'string', format : 'binary'})
  image?: string;

  @IsNumber()
  @IsDecimal()
  @ApiProperty({ type: Number })
  price!: number;

  @IsOptional()
  @IsNumber()
  @IsDecimal()
  @ApiProperty({ type: Number })
  newPrice?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ type: Number })
  rating?: number;

  @IsNumber()
  @ApiProperty({ type: Number })
  reviewCount!: number;

  @IsNumber()
  @ApiProperty({ type: Number })
  pages!: number;

  @IsDateString()
  @ApiProperty({ type: String })
  pubDate!: string;
}