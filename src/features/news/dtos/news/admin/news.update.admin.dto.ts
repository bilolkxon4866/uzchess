import { IsDateString, IsOptional, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class NewsUpdateAdminDto{
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @ApiProperty()
  title? : string

  @IsDateString()
  @ApiProperty()
  @IsOptional()
  date? : string

  @IsString()
  @ApiProperty({type : 'string',format : 'binary'})
  @IsOptional()
  image? : string

  @IsString()
  @IsOptional()
  @ApiProperty()
  content? : string
}