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
import { configModuleOptions } from './config/env.config';
@Module({
  imports: [
    JwtModule.register(jwtModuleConfig),
    ConfigModule.forRoot(configModuleOptions),
    TypeOrmModule.forRoot(typeOrmConfig),

    NewsModule,
    LibraryModule,
    CommonModule,
    AuthModule,
    CoursesModule
  ],
})

export class AppModule {}