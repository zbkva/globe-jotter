/*
  Warnings:

  - You are about to drop the column `picture` on the `DiaryEntry` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "DiaryEntry" DROP COLUMN "picture";

-- CreateTable
CREATE TABLE "Picture" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(250) NOT NULL,
    "extension" VARCHAR(5) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "diaryEntryId" TEXT NOT NULL,

    CONSTRAINT "Picture_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Picture" ADD CONSTRAINT "Picture_diaryEntryId_fkey" FOREIGN KEY ("diaryEntryId") REFERENCES "DiaryEntry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
