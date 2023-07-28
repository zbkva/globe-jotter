import { DiaryEntry } from "../models/diaryEntry";
import { Picture } from "../models/picture";
import { User } from "../models/user";

export enum SortValueEnum {
  NAME = "name",
  CREATEDAT = "createdAt",
  RATING = "rating",
}

export enum SortOrderEnum {
  ASC = "asc",
  DESC = "desc",
}

export const getDiaryEntries = async (
  sortValue?: SortValueEnum,
  sortOrder?: SortOrderEnum
) => {
  const res = await fetch(
    `http://localhost:3001/api/diaryentries/users/54e1b8fe-24e2-4423-a8df-20c46a7ae120?sortValue=${
      sortValue ?? ""
    }&sortOrder=${sortOrder ?? ""}`
  );
  const diaryEntries: Array<DiaryEntry> = await res.json();
  console.log(diaryEntries);
  for (let i = 0; i < diaryEntries.length; i++) {
    const diaryEntryPictures = await getDiaryEntryPictures(diaryEntries[i].id);
    diaryEntries[i].pictureIds = diaryEntryPictures
      ? diaryEntryPictures.map((p) => p.id)
      : [];
  }
  return diaryEntries;
};

export const getDiaryEntryPictures = async (
  diaryEntryId: string
): Promise<Array<Picture>> => {
  const res = await fetch(
    `http://localhost:3001/api/pictures/diaryentries/${diaryEntryId}`
  );
  return res.json();
};

export const getUser = async () => {
  const res = await fetch(
    "http://localhost:3001/api/users/54e1b8fe-24e2-4423-a8df-20c46a7ae120"
  );
  const user: User = await res.json();
  return user;
};
