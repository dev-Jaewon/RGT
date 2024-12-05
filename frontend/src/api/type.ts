export type Book = {
  id: number;
  title: string;
  author: string;
  quantity: number;
  image: string;
};

export type RequestBooks = {
  page: number;
  size: number;
  title: string;
  author: string;
};

export type ResponseBooks = {
  message: number;
  data: Book[];
  total: number;
  lastPage: number;
};
