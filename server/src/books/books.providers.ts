import { DataSource } from 'typeorm';
import { Books } from '../entity/books.entity';

export const booksProviders = [
  {
    inject: ['DATA_SOURCE'],
    provide: 'BOOKS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Books),
  },
];
