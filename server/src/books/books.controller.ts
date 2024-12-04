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
import { RequestCreateBook } from './dto';
import { ResponseUpdateBook } from './dto/ResponseUpdateBook';
import { RequestUpdateBook } from './dto/RequestUpdateBook';
import { ResponseGetBook } from './dto/ReponseGetBook';
import { RequestGetBook } from './dto/RequestGetBook';

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

  @Put(':id')
  async updateBook(
    @Param('id') id: number,
    @Body() body: RequestUpdateBook,
  ): Promise<ResponseUpdateBook> {
    return await this.booksService.updateBook(id, body);
  }

  @Get()
  async getBooks(@Query() query: RequestGetBook): Promise<ResponseGetBook> {
    return await this.booksService.getBooks(query);
  }
}
