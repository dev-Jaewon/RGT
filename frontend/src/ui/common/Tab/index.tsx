"use client";

import { useRouter } from "next/navigation";
import { CommonText } from "../CommonText";

export const Tab = () => {
  const router = useRouter();

  return (
    <div className="flex justify-around h-[60px] bg-[white]">
      <CommonText
        text="리스트"
        className="cursor-pointer font-bold"
        onClick={() => router.push("/")}
      />
      <CommonText
        text="검색"
        className="cursor-pointer font-bold"
        onClick={() => router.push("/search")}
      />
    </div>
  );
};
