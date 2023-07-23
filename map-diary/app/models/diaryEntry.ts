export interface DiaryEntry {
  id: string;
  userId: string;
  name: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  postalCode: string;
  country: string;
  picture: string;
  rating?: string;
  hasVisited: boolean;
  note: string;
  createdAt: Date;
}
