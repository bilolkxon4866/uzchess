import { Module } from '@nestjs/common';
import { bookCategoryAdminController } from './controllers/bookCategory/bookCategory.admin.controller';
import { bookCategoryPublicController } from './controllers/bookCategory/bookCategory.public.controller';
import { BookCategoryPublicService } from './services/bookCategory/bookCategory.public.service';
import { BookCategoryAdminService } from './services/bookCategory/bookCategory.admin.service';
import { BookAdminService } from './services/book/book.admin.service';
import { BookPublicService } from './services/book/book.public.service';
import { BookAdminController } from './controllers/book/book.admin.controller';
import { BookPublicController } from './controllers/book/book.public.controller';
import { BookLikesAdminService } from './services/bookLikes/bookLikes.admin.service';
import { BookLikesPublicService } from './services/bookLikes/bookLikes.public.service';
import { BookLikesAdminController } from './controllers/bookLikes/bookLikes.admin.controller';
import { BookLikesPublicController } from './controllers/bookLikes/bookLikes.public.controller';
import { BookReviewsAdminService } from './services/bookReviews/bookReviews.admin.service';
import { BookReviewsPublicService } from './services/bookReviews/bookReviews.public.service';
import { BookReviewsAdminController } from './controllers/bookReviews/bookReviews.admin.controller';
import { BookReviewsPublicController } from './controllers/bookReviews/bookReviews.public.controller';
import { Type } from 'class-transformer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { BookReview } from './entities/bookReviews.entity';
import { BookLike } from './entities/bookLikes.entity';
import { BookCategory } from './entities/bookCategory.entity';
import { BookAdminRepository } from './repositories/admin/book.admin.repository';
import { BookLikesAdminRepository } from './repositories/admin/bookLikes.admin.repository';
import { BookReviewsAdminRepository } from './repositories/admin/bookReviews.admin.repository';
import { BookCategoryAdminRepository } from './repositories/admin/bookCategory.admin.repository';
import { BookPublicRepository } from './repositories/public/book.public.repository';
import { BookLikesPublicRepository } from './repositories/public/bookLikes.public.repository';
import { BookReviewsPublicRepository } from './repositories/public/bookReviews.public.repository';
import { BookCategoryPublicRepository } from './repositories/public/bookCategory.public.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Book, BookLike, BookReview, BookCategory])],
  providers: [
    BookCategoryAdminService,
    BookCategoryPublicService,
    BookAdminService,
    BookPublicService,
    BookLikesAdminService,
    BookLikesPublicService,
    BookReviewsAdminService,
    BookAdminRepository,
    BookLikesAdminRepository,
    BookReviewsAdminRepository,
    BookCategoryAdminRepository,
    BookReviewsPublicService,
    BookPublicRepository,
    BookLikesPublicRepository,
    BookReviewsPublicRepository,
    BookCategoryPublicRepository,
  ],
  controllers: [
    bookCategoryAdminController,
    bookCategoryPublicController,
    BookAdminController,
    BookPublicController,
    BookLikesAdminController,
    BookLikesPublicController,
    BookReviewsAdminController,
    BookReviewsPublicController,
  ],
})
export class LibraryModule {}
