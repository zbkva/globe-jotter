import React from "react";
import PlaceCard from "../components/PlaceCard";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DiaryEntriesList from "./diaryEntriesList";
import SearchBar from "../components/SearchBar";

export default async function DashBoard() {
  return (
    <div className=" relative mx-2 my-2 sm:mx-8 lg:mx-20">
      <p className="text-2xl sm:text-4xl mb-8">Welcome, Fernando</p>
      <Fab
        aria-label="add"
        size="medium"
        className="bg-orange-fawn absolute top-0 right-0"
      >
        <AddIcon />
      </Fab>
      <SearchBar />
      <DiaryEntriesList />
    </div>
  );
}
