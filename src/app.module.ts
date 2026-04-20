import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { NewsModule } from './features/news/news.module';
import { CommonModule } from './features/common/common.module';
import { AuthModule } from './features/auth/auth.module';
import { LibraryModule } from './features/library/library.module';
import { CoursesModule } from './features/courses/courses.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtModuleConfig } from './config/jwt-module.config';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';

@Module({
  imports: [
    JwtModule.register(jwtModuleConfig),
    TypeOrmModule.forRoot(typeOrmConfig),
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        SECRET_KEY: Joi.string().required(),
        PORT: Joi.number().required(),
        DB_URL: Joi.string().required(),
        DEFAULT_DB_URL: Joi.string().required(),
        TEST_DB_URL: Joi.string().required(),
        JWT_EXPIRE: Joi.string().required(),
        OTP_EXPIRE: Joi.number().required(),
        OTP_RESEND: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        DEFAULT_SIZE: Joi.number().required(),
        DEFAULT_PAGE: Joi.number().required(),
        BASE_URL: Joi.string().required(),
      }),
    }),

    NewsModule,
    LibraryModule,
    CommonModule,
    AuthModule,
    CoursesModule
  ],
})

export class AppModule {}