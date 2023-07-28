/*
  Warnings:

  - You are about to alter the column `addressLine2` on the `DiaryEntry` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `picture` on the `DiaryEntry` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE "DiaryEntry" ALTER COLUMN "addressLine2" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "picture" SET DATA TYPE VARCHAR(255);
