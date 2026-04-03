import { Allow, IsOptional, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CountryUpdateAdminDto {
  @IsString()
  @ApiProperty()
  @MaxLength(256)
  @IsOptional()
  title? : string

  @IsString()
  @Allow()
  @ApiProperty({type : 'string',format : 'binary'})
  @IsOptional()
  flag? : string
}