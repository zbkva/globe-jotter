"use client";
import React from "react";
import {
  FormControl,
  InputAdornment,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { SortOrderEnum, SortValueEnum } from "../data";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const sortMap = new Map<SortValueEnum, SortOrderEnum>([
  [SortValueEnum.NAME, SortOrderEnum.ASC],
  [SortValueEnum.CREATEDAT, SortOrderEnum.DESC],
  [SortValueEnum.RATING, SortOrderEnum.DESC],
]);

export default function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const [searchValue, setSearchValue] = React.useState(
    searchParams.get("search") ?? undefined
  );

  const handleOnSortChange = (event: SelectChangeEvent) => {
    const sortValue = event.target.value as SortValueEnum;
    updateSearchParameters({
      sort: sortValue,
      sortOrder: sortMap.get(sortValue)!,
    });
  };

  const handleOnSearch = (
    event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
    searchValue?: string
  ) => {
    if (event.key === "Enter") {
      updateSearchParameters({ search: searchValue });
    }
  };

  const updateSearchParameters = (newParams: {
    [key: string]: string | undefined;
  }) => {
    const currentParams = new URLSearchParams(
      Array.from(searchParams.entries())
    );

    for (const [key, value] of Object.entries(newParams)) {
      if (!value) {
        currentParams.delete(key);
      } else {
        currentParams.set(key, value);
      }
    }

    const params = currentParams.toString();
    router.replace(`${pathname}?${params}`);
  };

  return (
    <div className="flex flex-col gap-2 justify-between md:flex-row-reverse mb-4">
      <div className="flex gap-3">
        <FormControl size="small">
          <InputLabel id="select-sort-label">Sort</InputLabel>
          <Select
            labelId="select-sort-label"
            id="select-sort"
            label="Sort by"
            className="min-w-[100px] rounded-full border border-blue-columbia"
            onChange={handleOnSortChange}
            defaultValue={SortValueEnum.CREATEDAT}
          >
            <MenuItem value={SortValueEnum.NAME}>Name</MenuItem>
            <MenuItem value={SortValueEnum.CREATEDAT}>Date Added</MenuItem>
            <MenuItem value={SortValueEnum.RATING}>Rating</MenuItem>
            <MenuItem disabled value={"distance"}>
              Distance
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl size="small">
          <InputLabel id="select-category-label">Choose Category</InputLabel>
          <Select
            labelId="select-category-label"
            id="select-category"
            label="Choose Category"
            className="min-w-[180px] rounded-full border border-blue-columbia"
            disabled
          >
            <MenuItem value={"Outdoor"}>Outdoor</MenuItem>
            <MenuItem value={"Coffee"}>Coffee</MenuItem>
            <MenuItem value={"Food"}>Food</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="flex rounded-full border-2 border-blue-columbia">
        <InputBase
          className="ml-2 max-w-md md:min-w-[350px]"
          placeholder="Search"
          value={searchValue}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setSearchValue(event.target.value);
          }}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          onKeyDown={(e) => handleOnSearch(e, searchValue)}
        />
      </div>
    </div>
  );
}
