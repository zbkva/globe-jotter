import React from "react";
import PlaceCard from "../components/PlaceCard";
import SearchBar from "../components/SearchBar";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { User } from "../models/user";
import { DiaryEntry } from "../models/diaryEntry";

const getUser = async (): Promise<User> => {
  const res = await fetch(
    "http://localhost:3001/api/users/54e1b8fe-24e2-4423-a8df-20c46a7ae120"
  );
  return res.json();
};
const getUserDiaryEntries = async (): Promise<Array<DiaryEntry>> => {
  const res = await fetch(
    "http://localhost:3001/api/diaryentries/users/54e1b8fe-24e2-4423-a8df-20c46a7ae120"
  );
  return res.json();
};

export default async function DashBoard() {
  const userData = getUser();
  const userDiaryEntries = getUserDiaryEntries();

  const [user, diaryEntries] = await Promise.all([userData, userDiaryEntries]);

  return (
    <div className=" relative mx-2 my-2 sm:mx-8 lg:mx-20">
      <p className="text-2xl sm:text-4xl mb-8">Welcome, {user.firstName}</p>
      <Fab
        aria-label="add"
        size="medium"
        className="bg-orange-fawn absolute top-0 right-0"
      >
        <AddIcon />
      </Fab>
      <SearchBar />
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-stretch">
        {!diaryEntries ? (
          <p>No entries</p>
        ) : (
          diaryEntries.map((m) => <PlaceCard key={m.id} title={m.name} />)
        )}
      </div>
    </div>
  );
}
