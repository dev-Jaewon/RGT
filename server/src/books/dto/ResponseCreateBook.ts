import { Books } from 'src/entity/books.entity';

export class ResponseCreateBook {
  message: string;
  data: Books | null;

  constructor(message: string, data?: Books | null) {
    this.message = message;
    this.data = data;
  }
}
