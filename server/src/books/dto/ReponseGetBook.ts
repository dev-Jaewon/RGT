import { Books } from 'src/entity/books.entity';

export class ResponseGetBook {
  message: string;
  total?: number;
  data?: Books[];
  lastPage?: number;

  constructor(
    message: string,
    data?: Books[],
    total?: number,
    lastPage?: number,
  ) {
    this.message = message;
    this.data = data;
    this.total = total;
    this.lastPage = lastPage;
  }
}
