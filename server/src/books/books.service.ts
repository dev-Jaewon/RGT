import { Injectable } from '@nestjs/common';
import { RequestCreateBook } from './dto';
import { BooksRepository } from '../repository/books.repository';
import { ResponseCreateBook } from './dto/ResponseCreateBook';

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
      throw new Error(error);
    }
  }
}
