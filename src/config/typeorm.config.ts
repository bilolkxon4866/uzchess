import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: 'postgresql://postgres:123@localhost:5432/uzchess',
  synchronize: true,
  dropSchema: true,
  entities: ['dist/**/*.entity.js'],
}