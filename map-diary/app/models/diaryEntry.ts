import { Picture } from "./picture";

export interface DiaryEntry {
  id: string;
  userId: string;
  name: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  postalCode: string;
  country: string;
  pictures: Array<Picture>;
  rating?: number;
  hasVisited: boolean;
  note?: string;
  createdAt: Date;
}
