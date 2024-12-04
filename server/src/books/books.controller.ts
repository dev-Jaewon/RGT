import { Body, Controller, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { RequestCreateBook } from './dto';

@Controller('/api/books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  async createBook(@Body() body: RequestCreateBook): Promise<any> {
    return await this.booksService.createBook(body);
  }
}
