import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Books } from '../entity/books.entity';

@Injectable()
export class BooksService {
  constructor(
    @Inject('BOOKS_REPOSITORY')
    private booksRepository: Repository<Books>,
  ) {}
}
