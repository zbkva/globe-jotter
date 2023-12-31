import { DiaryEntry } from "../models/diaryEntry";
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

const API_BASE_URL = process.env.API_BASE_URL;

export const getDiaryEntries = async (
  sortValue?: SortValueEnum,
  sortOrder?: SortOrderEnum,
  searchValue?: string
): Promise<Array<DiaryEntry>> => {
  const res = await fetch(
    `${API_BASE_URL}/diaryentries/users/6e1ffb3f-946a-4ce3-aefe-334e363f168b?sortValue=${
      sortValue ?? ""
    }&sortOrder=${sortOrder ?? ""}&search=${searchValue ?? ""}`
  );

  return res.json();
};

export const getUser = async (): Promise<User> => {
  const res = await fetch(
    `${API_BASE_URL}/users/6e1ffb3f-946a-4ce3-aefe-334e363f168b`
  );
  return res.json();
};
