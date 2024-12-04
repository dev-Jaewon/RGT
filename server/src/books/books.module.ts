import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { Module } from '@nestjs/common';
import { BooksRepository } from '../repository/books.repository';

@Module({
  controllers: [BooksController],
  providers: [BooksService, BooksRepository],
  exports: [],
  imports: [],
})
export class BooksModule {}
