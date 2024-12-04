import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { BooksService } from './books.service';
import {
  RequestCreateBook,
  ResponseDeleteBook,
  ResponseUpdateBook,
  ResponseCreateBook,
  RequestUpdateBook,
  ResponseGetBook,
  RequestGetBooks,
} from './dto';

@Controller('/api/books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  async createBook(
    @Body() body: RequestCreateBook,
  ): Promise<ResponseCreateBook> {
    return await this.booksService.createBook(body);
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: number): Promise<ResponseDeleteBook> {
    return await this.booksService.deleteBook(id);
  }

  @Put(':id')
  async updateBook(
    @Param('id') id: number,
    @Body() body: RequestUpdateBook,
  ): Promise<ResponseUpdateBook> {
    return await this.booksService.updateBook(id, body);
  }

  @Get()
  async getBooks(@Query() query: RequestGetBooks): Promise<ResponseGetBook> {
    return await this.booksService.getBooks(query);
  }
}
