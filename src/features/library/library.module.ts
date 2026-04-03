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

@Module({
  providers : [
    BookCategoryAdminService,
    BookCategoryPublicService,
    BookAdminService,
    BookPublicService,
    BookLikesAdminService,
    BookLikesPublicService,
    BookReviewsAdminService,
    BookReviewsPublicService
  ],
  controllers : [
    bookCategoryAdminController,
    bookCategoryPublicController,
    BookAdminController,
    BookPublicController,
    BookLikesAdminController,
    BookLikesPublicController,
    BookReviewsAdminController,
    BookReviewsPublicController
  ]
})

export class LibraryModule {}