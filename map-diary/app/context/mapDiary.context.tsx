"use client";

import * as React from "react";
import { User } from "../models/user";
import { DiaryEntry } from "../models/diaryEntry";
import { Picture } from "../models/picture";
import {
  SortOrderEnum,
  SortValueEnum,
  getDiaryEntries,
  getUser,
} from "../data";

interface IMapDiaryContext {
  user?: User;
  diaryEntries: Array<DiaryEntry>;
  getDiaryEntries: (
    sortValue?: SortValueEnum,
    sortOrder?: SortOrderEnum
  ) => void;
}

export const MapDiaryContext = React.createContext<IMapDiaryContext>({
  user: undefined,
  diaryEntries: [],
  getDiaryEntries(sortValue, sortOrder) {},
});

export const MapDiaryContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = React.useState<User>();
  const [diaryEntries, setDiaryEntries] = React.useState<Array<DiaryEntry>>([]);

  React.useEffect(() => {
    getUser().then(setUser);
    getDiaryEntries().then(setDiaryEntries);
  }, []);

  return (
    <MapDiaryContext.Provider value={{ user, diaryEntries, getDiaryEntries }}>
      {children}
    </MapDiaryContext.Provider>
  );
};

export const useMapDiaryContext = () => React.useContext(MapDiaryContext);
