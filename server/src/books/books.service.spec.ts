import { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { BooksService } from './books.service';
import { RequestCreateBook } from './dto';
import { ConfigModule } from '@nestjs/config';
import { BooksRepository } from '../repository/books.repository';
import { databaseConfig } from '../config/database';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Books } from '../entity/books.entity';
import { RequestUpdateBook } from './dto/RequestUpdateBook';

describe('BooksService Test', () => {
  let service: BooksService;
  let repository: BooksRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BooksService, BooksRepository],
      imports: [
        ConfigModule.forRoot({
          envFilePath: '.env',
        }),
        TypeOrmModule.forRoot(databaseConfig([Books])),
      ],
    }).compile();

    service = module.get<BooksService>(BooksService);
    repository = module.get<BooksRepository>(BooksRepository);
  });

  it('should be Save new book', async () => {
    const body: RequestCreateBook = {
      title: 'New test book',
      author: 'Test author',
    };

    const result = await service.createBook(body);

    expect(result.message).toBe('데이터가 저장되었습니다.');
    expect(result.data?.title).toBe(body.title);
    expect(result.data?.author).toBe(body.author);
    expect(result.data?.image).not.toBeNull();

    await repository.delete({ id: result.data?.id });
  });

  it('should be return error message', async () => {
    const body: RequestCreateBook = {
      title: '',
      author: '',
    };

    const result = await service.createBook(body);

    expect(result.message).toBe('데이터를 확인해주세요.');
  });

  it('should be delete book', async () => {
    const body: RequestCreateBook = {
      title: 'New test book',
      author: 'Test author',
    };

    const preResult = await service.createBook(body);

    const result = await service.deleteBook(preResult.data?.id);

    expect(result.message).toBe('데이터가 삭제되었습니다.');
  });

  it('should be update book', async () => {
    const preValue: RequestCreateBook = {
      title: 'New test book',
      author: 'Test author',
    };

    const preResult = await service.createBook(preValue);

    const newValue: RequestUpdateBook = {
      title: 'Update test book',
      author: 'Update test author',
    };

    const result = await service.updateBook(preResult.data?.id, newValue);

    expect(result.message).toBe('데이터가 수정되었습니다.');

    await repository.delete({ id: preResult.data?.id });
  });

  it('should be get books', async () => {
    const result = await service.getBooks({ page: 1, size: 10 });

    expect(result.message).toBe('데이터를 조회했습니다.');
    expect(result.data).not.toBeNull();
    expect(result.total).not.toBeNull();
    expect(result.lastPage).not.toBeNull();
  });

  it('should be return error message', async () => {
    const result = await service.getBooks({ page: 0, size: 0 });

    expect(result.message).toBe('데이터를 확인해주세요.');
  });
});
