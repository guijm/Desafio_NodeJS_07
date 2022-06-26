/*
  Warnings:

  - A unique constraint covering the columns `[id_Course]` on the table `Courses` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id_Course` to the `Alunos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Alunos" ADD COLUMN     "id_Course" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Courses_id_Course_key" ON "Courses"("id_Course");
