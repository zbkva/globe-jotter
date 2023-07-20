import React from "react";
import PlaceCard from "../components/PlaceCard";
import SearchBar from "../components/SearchBar";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Dashboard: React.FC = () => {
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
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-stretch">
        <PlaceCard title="Test Card 1" />
        <PlaceCard title="Test Card 1" />
        <PlaceCard title="Test Card 2" />
        <PlaceCard title="Test Card 3" />
        <PlaceCard title="Test Card 4" />
        <PlaceCard title="Test Card 5" />
        <PlaceCard title="Test Card 6" />
        <PlaceCard title="Test Card 1" />
        <PlaceCard title="Test Card 2" />
        <PlaceCard title="Test Card 3" />
        <PlaceCard title="Test Card 5" />
        <PlaceCard title="Test Card 6" />
        <PlaceCard title="Test Card 1" />
        <PlaceCard title="Test Card 2" />
        <PlaceCard title="Test Card 3" />
      </div>
    </div>
  );
};

export default Dashboard;
