/*
  Warnings:

  - You are about to drop the column `code` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `language` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `totalComments` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `totalLikes` on the `Post` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "code",
DROP COLUMN "language",
DROP COLUMN "totalComments",
DROP COLUMN "totalLikes",
ADD COLUMN     "content" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
