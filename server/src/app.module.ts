import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Books } from './entity/books.entity';
import { databaseConfig } from './config/database';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot(databaseConfig([Books])),
    BooksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
