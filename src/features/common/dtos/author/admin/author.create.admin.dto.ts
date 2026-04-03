import { IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthorCreateAdminDto{
  @IsString()
  @MaxLength(64)
  @ApiProperty()
  fullName!: string
}