/*
  Warnings:

  - You are about to drop the column `hashedRefreshedToken` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "hashedRefreshedToken",
ADD COLUMN     "hashedRefreshToken" TEXT;
