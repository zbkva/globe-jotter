import React from "react";
import DiaryEntryCard from "./diaryEntryCard";
import { DiaryEntry } from "../models/diaryEntry";

export default async function DiaryEntriesList({
  diaryEntries,
}: {
  diaryEntries: Array<DiaryEntry>;
}) {
  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-stretch">
      {!diaryEntries || diaryEntries.length === 0 ? (
        <p>No entries</p>
      ) : (
        diaryEntries.map((m) => <DiaryEntryCard key={m.id} diaryEntry={m} />)
      )}
    </div>
  );
}
