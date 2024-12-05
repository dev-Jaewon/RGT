"use client";

import { useState } from "react";
import { Content } from "../Content";
import { LIST_FILTER } from "@/src/const";
import { getBooks } from "@/src/api";
import { useQuery } from "@tanstack/react-query";
import { MainHeader } from "../MainHeader";

export const ContentView = () => {
  const [filter, setFilter] = useState(LIST_FILTER);

  const { data, isLoading } = useQuery({
    queryKey: ["books", filter],
    queryFn: () => getBooks(filter),
  });

  return (
    <>
      <MainHeader filter={filter} setFilter={setFilter} />
      <Content data={data?.data} isLoading={isLoading} />
    </>
  );
};
