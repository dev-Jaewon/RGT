import { Controller } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('/api/books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}
}
