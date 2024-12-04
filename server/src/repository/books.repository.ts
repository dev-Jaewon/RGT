import { DataSource, Repository } from 'typeorm';
import { Books } from '../entity/books.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksRepository extends Repository<Books> {
  constructor(private dataSource: DataSource) {
    super(Books, dataSource.createEntityManager());
  }
}
