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
import { useRouter } from "next/navigation";

const sortMap = new Map<SortValueEnum, SortOrderEnum>([
  [SortValueEnum.NAME, SortOrderEnum.ASC],
  [SortValueEnum.CREATEDAT, SortOrderEnum.DESC],
  [SortValueEnum.RATING, SortOrderEnum.DESC],
]);

export default function SearchBar() {
  const router = useRouter();
  const handleChange = async (event: SelectChangeEvent) => {
    const sortValue = event.target.value as SortValueEnum;
    router.push(
      `/dashboard?sortValue=${sortValue}&sortOrder=${sortMap.get(sortValue)}`
    );
  };
  return (
    <div className="flex flex-col gap-2 justify-between md:flex-row-reverse mb-4">
      <div className="flex gap-3">
        <FormControl className="min-w-[100px]" size="small">
          <InputLabel id="select-sort-label">Sort</InputLabel>
          <Select
            labelId="select-sort-label"
            id="select-sort"
            label="Sort"
            className="rounded-full border border-blue-columbia"
            onChange={handleChange}
          >
            <MenuItem value={SortValueEnum.NAME}>Alphabetically</MenuItem>
            <MenuItem value={SortValueEnum.CREATEDAT}>Date Added</MenuItem>
            <MenuItem value={SortValueEnum.RATING}>Rating</MenuItem>
            <MenuItem disabled value={"distance"}>
              Distance
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl className="min-w-[180px]" size="small">
          <InputLabel id="select-category-label">Choose Category</InputLabel>
          <Select
            labelId="select-category-label"
            id="select-category"
            label="Choose Category"
            className="rounded-full border border-blue-columbia"
            disabled
          >
            <MenuItem value={"Outdoor"}>Outdoor</MenuItem>
            <MenuItem value={"Coffee"}>Coffee</MenuItem>
            <MenuItem value={"Food"}>Food</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="flex rounded-full border-2 border-blue-columbia max-w-md md:min-w-[350px]">
        <InputBase
          className="ml-2"
          placeholder="Search"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </div>
    </div>
  );
}
