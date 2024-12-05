import axios from "axios";
import { RequestBooks, ResponseBooks } from "./type";

export const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://motionless-blanche-jaewon-3fd489ac.koyeb.app",
});

export const getBooks = async (
  params: RequestBooks
): Promise<ResponseBooks> => {
  const res = await api.get("/api/books", { params });
  return res.data;
};
