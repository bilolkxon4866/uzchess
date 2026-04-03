import { Allow, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PlayersUpdateAdminDto {
  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false })
  countryId?: number;

  @IsString()
  @IsOptional()
  @MaxLength(64)
  @ApiProperty({ required: false })
  fullName?: string;

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