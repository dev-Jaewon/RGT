import { DatabaseModule } from 'src/configs/database.module';
import { BooksController } from './books.controller';
import { booksProviders } from './books.providers';
import { BooksService } from './books.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [BooksController],
  providers: [...booksProviders, BooksService],
  exports: [],
  imports: [DatabaseModule],
})
export class BooksModule {}
