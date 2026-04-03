import { Allow, IsDateString, IsOptional, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class NewsCreateAdminDto{
  @IsString()
  @ApiProperty()
  @MaxLength(256)
  title! : string

  @IsDateString()
  @ApiProperty()
  date! : string

  @IsString()
  @Allow()
  @ApiProperty({type : 'string',format : 'binary'})
  image! : string

  @IsString()
  @ApiProperty()
  content! : string
}