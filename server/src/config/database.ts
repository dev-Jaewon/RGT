import { MixedList } from 'typeorm/common/MixedList';
import { EntitySchema } from 'typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig = (
  entities: MixedList<(new () => any) | string | EntitySchema>,
): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  entities: entities,
  ssl: true,
});
