import React from "react";
import {
  FormControl,
  InputAdornment,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar: React.FC = () => {
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
          >
            <MenuItem value={"Alphabetically"}>Alphabetically</MenuItem>
            <MenuItem value={"Date Added"}>Date Added</MenuItem>
            <MenuItem value={"Distance"}>Distance</MenuItem>
          </Select>
        </FormControl>
        <FormControl className="min-w-[200px]" size="small">
          <InputLabel id="select-category-label">Choose Category</InputLabel>
          <Select
            labelId="select-category-label"
            id="select-category"
            label="Choose Category"
            className="rounded-full border border-blue-columbia"
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
};

export default SearchBar;
