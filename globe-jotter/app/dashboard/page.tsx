import React from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DiaryEntriesList from "./diaryEntriesList";
import Greeting from "./greeting";
import { SortValueEnum, SortOrderEnum, getDiaryEntries } from "../data";
import SearchBar from "./searchBar";

export default async function DashBoard({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const sortValue = searchParams.sort as SortValueEnum;
  const sortOrder = searchParams.sortOrder as SortOrderEnum;
  const searchValue = searchParams.search as string;

  const diaryEntries = await getDiaryEntries(sortValue, sortOrder, searchValue);
  return (
    <div className="relative mx-2 my-2 sm:mx-8 lg:mx-20">
      <Greeting />
      <Fab
        aria-label="add"
        size="medium"
        className="bg-orange-fawn absolute top-0 right-0"
      >
        <AddIcon />
      </Fab>
      <SearchBar />
      <DiaryEntriesList diaryEntries={diaryEntries} />
    </div>
  );
}
