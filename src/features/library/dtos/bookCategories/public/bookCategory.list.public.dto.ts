import {Expose} from "class-transformer";
import { IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class BookCategoryListPublicDto{
  @Expose()
  @ApiProperty()
  id! : number

  @Expose()
  @ApiProperty()
  title! : string

  @Expose()
  @ApiProperty()
  createdAt! : string

  @Expose()
  @ApiProperty()
  @IsOptional()
  updatedAt? : string
}