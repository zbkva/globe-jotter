export interface DiaryEntry {
  id: string;
  userId: string;
  name: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  postalCode: string;
  country: string;
  pictureIds: Array<string>;
  rating?: string;
  hasVisited: boolean;
  note?: string;
  createdAt: Date;
}
