"use client";
import React from "react";
import PlaceCard from "../components/PlaceCard";
import { useMapDiaryContext } from "../context/mapDiary.context";

export default function DiaryEntriesList() {
  const { diaryEntries } = useMapDiaryContext();

  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-stretch">
      {diaryEntries.length === 0 ? (
        <p>No entries</p>
      ) : (
        diaryEntries.map((m) => <PlaceCard key={m.id} diaryEntry={m} />)
      )}
    </div>
  );
}
