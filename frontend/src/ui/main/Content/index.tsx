"use client";

import { Book } from "@/src/api/type";
import { CommonText } from "../../common/CommonText";
import { useRouter } from "next/navigation";

type ContentProps = {
  data: Book[] | undefined;
  isLoading: boolean;
};

export const Content = ({ data, isLoading }: ContentProps) => {
  const router = useRouter();

  if (isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center">로딩중...</div>
    );
  }

  if (!data?.length) {
    return (
      <div className="flex-1 flex items-center justify-center">
        데이터가 없습니다.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[50px] p-[20px] overflow-y-scroll flex-1">
      {data?.map((book) => (
        <div
          key={book.id}
          className="flex gap-[10px] cursor-pointer"
          onClick={() => router.push(`/book/${book.id}`)}
        >
          <img
            src={book.image}
            alt={book.title}
            className="w-[200px] h-[300px]"
          />
          <div className="text-[14px] p-[20px]">
            <CommonText text={book.title} className="text-[20px] font-bold" />
            <CommonText
              text={"저자 : " + book.author}
              className="text-[14px] !justify-start font-bold text-[#666]"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
