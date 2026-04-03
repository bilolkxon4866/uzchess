// book-detail.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { BookCategoryListAdminDto } from '../../bookCategories/admin/bookCategory.list.admin.dto';
import { LanguageListAdminDto } from '../../../../common/dtos/languages/admin/language.list.admin.dto';
import { DifficultyListAdminDto } from '../../../../common/dtos/difficulties/admin/difficulty.list.admin.dto';
import { AuthorListAdminDto } from '../../../../common/dtos/author/admin/author.list.admin.dto';

export class BookDetailPublicDto {
  @Expose()
  @ApiProperty()
  id!: number;

  @Expose()
  @ApiProperty()
  @Type(() => AuthorListAdminDto)
  authorId!: AuthorListAdminDto;

  @Expose()
  @ApiProperty()
  @Type(() => BookCategoryListAdminDto)
  categoryId!: BookCategoryListAdminDto;

  @Expose()
  @ApiProperty()
  @Type(() => LanguageListAdminDto)
  languageId!: LanguageListAdminDto;

  @Expose()
  @ApiProperty()
  @Type(() => DifficultyListAdminDto)
  difficultyId!: DifficultyListAdminDto;

  @Expose()
  @ApiProperty()
  title!: string;

  @Expose()
  @ApiProperty()
  description!: string;

  @Expose()
  @ApiProperty()
  image!: string;

  @Expose()
  @ApiProperty()
  price!: number;

  @Expose()
  @ApiProperty()
  newPrice!: number;

  @Expose()
  @ApiProperty()
  rating!: number;

  @Expose()
  @ApiProperty()
  reviewCount!: number;

  @Expose()
  @ApiProperty()
  pages!: number;

  @Expose()
  @ApiProperty()
  pubDate!: string;

  @Expose()
  @ApiProperty()
  createdAt!: Date;

  @Expose()
  @ApiProperty()
  updatedAt!: Date;
}