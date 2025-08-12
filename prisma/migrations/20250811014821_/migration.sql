/*
  Warnings:

  - Added the required column `category` to the `CoreFeeling` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."CoreFeeling" ADD COLUMN     "category" TEXT NOT NULL;
