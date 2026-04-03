import { Allow, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PlayersCreateAdminDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  countryId!: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
  @ApiProperty()
  fullName!: string;

  @IsOptional()
  @Allow()
  @ApiProperty({ type: 'string', format: 'binary', required: false })
  image?: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false })
  classic?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false })
  rapid?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false })
  blitz?: number;
}