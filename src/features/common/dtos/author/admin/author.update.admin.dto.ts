import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthorUpdateAdminDto{
  @IsString()
  @IsOptional()
  @ApiProperty()
  fullName? : string
}