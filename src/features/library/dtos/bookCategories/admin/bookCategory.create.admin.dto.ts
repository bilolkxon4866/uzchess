import { IsString, MaxLength } from 'class-validator';

export class BookCategoryCreateAdminDto{
  @IsString()
  @MaxLength(64)
  title! : string
}