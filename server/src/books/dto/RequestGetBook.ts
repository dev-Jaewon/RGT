export class RequestGetBook {
  page: number;
  size: number;
  title?: string;
  author?: string;

  constructor(page: number, size: number, title: string, author: string) {
    this.page = page;
    this.size = size;
    this.title = title;
    this.author = author;
  }
}
