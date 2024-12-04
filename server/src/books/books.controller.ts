import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { RequestCreateBook } from './dto';

@Controller('/api/books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  async createBook(@Body() body: RequestCreateBook): Promise<any> {
    return await this.booksService.createBook(body);
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: number): Promise<void> {
    await this.booksService.deleteBook(id);
  }
}
