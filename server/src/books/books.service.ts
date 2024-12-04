import { Injectable } from '@nestjs/common';
import {
  RequestCreateBook,
  ResponseCreateBook,
  ResponseDeleteBook,
} from './dto';
import { BooksRepository } from '../repository/books.repository';
import { RequestUpdateBook } from './dto/RequestUpdateBook';
import { ResponseUpdateBook } from './dto/ResponseUpdateBook';

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

  async deleteBook(id: number): Promise<any> {
    try {
      await this.booksRepository.delete(id);
      return new ResponseDeleteBook('데이터가 삭제되었습니다.');
    } catch (error) {
      console.log(error);
      return new ResponseDeleteBook(
        '데이터를 삭제하는 중 오류가 발생했습니다.',
      );
    }
  }

  async updateBook(
    id: number,
    body: RequestUpdateBook,
  ): Promise<ResponseUpdateBook> {
    if (body.title === '' || body.author === '') {
      return new ResponseUpdateBook('데이터를 확인해주세요.');
    }

    try {
      await this.booksRepository.update(id, body);

      return new ResponseUpdateBook('데이터가 수정되었습니다.');
    } catch (error) {
      console.log(error);
      return new ResponseUpdateBook(
        '데이터를 수정하는 중 오류가 발생했습니다.',
      );
    }
  }
}
