import { IsString } from "class-validator";
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class BookCategoryListAdminDto{
  @Expose()
  @ApiProperty()
  id! : number

  @IsString()
  @Expose()
  title! : string
}