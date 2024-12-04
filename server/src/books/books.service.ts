import { Injectable } from '@nestjs/common';
import { RequestCreateBook, ResponseCreateBook } from './dto';
import { BooksRepository } from '../repository/books.repository';

@Injectable()
export class BooksService {
  constructor(private booksRepository: BooksRepository) {}

  async createBook(body: RequestCreateBook): Promise<ResponseCreateBook> {
    if (body.title === '' || body.author === '') {
      return new ResponseCreateBook('데이터를 확인해주세요.');
    }

    try {
      const image = `https://picsum.photos/200/300?random=${Date.now()}`;
      const result = await this.booksRepository.save({ ...body, image });
      return new ResponseCreateBook('데이터가 저장되었습니다.', result);
    } catch (error) {
      console.log(error);
      return new ResponseCreateBook(
        '데이터를 저장하는 중 오류가 발생했습니다.',
      );
    }
  }
}
