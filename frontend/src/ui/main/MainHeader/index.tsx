import { RequestBooks } from "@/src/api/type";
import { CommonText } from "../../common/CommonText";
import { useMemo } from "react";
import { debounce } from "lodash";

type filter = RequestBooks;

type MainHeaderProps = {
  filter: filter;
  setFilter: (filter: filter) => void;
};

export const MainHeader = ({ filter, setFilter }: MainHeaderProps) => {
  const handleChangeTitleKeyword = useMemo(
    () =>
      debounce((text: string, property: string) => {
        setFilter({ ...filter, [property]: text });
      }, 300),
    [filter]
  );

  return (
    <div className="flex flex-col gap-[20px] p-[20px] border-b border-[#ddd]">
      <div className="flex items-center gap-[10px]">
        <CommonText text="제목" className="w-[60px] font-bold" />
        <input
          type="text"
          className="flex-1 p-[10px] border border-[#ddd] rounded-md focus:outline-none focus:border-blue-500"
          placeholder="책 제목을 입력하세요"
          onChange={(e) => handleChangeTitleKeyword(e.target.value, "title")}
        />
      </div>
      <div className="flex items-center gap-[10px]">
        <CommonText text="저자" className="w-[60px] font-bold" />
        <input
          type="text"
          className="flex-1 p-[10px] border border-[#ddd] rounded-md focus:outline-none focus:border-blue-500"
          placeholder="저자명을 입력하세요"
          onChange={(e) => handleChangeTitleKeyword(e.target.value, "author")}
        />
      </div>
    </div>
  );
};
