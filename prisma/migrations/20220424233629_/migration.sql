-- CreateTable
CREATE TABLE "Alunos" (
    "id_Aluno" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Alunos_pkey" PRIMARY KEY ("id_Aluno")
);

-- CreateTable
CREATE TABLE "Courses" (
    "id_Course" SERIAL NOT NULL,
    "course" TEXT NOT NULL,
    "id_Aluno" INTEGER NOT NULL,

    CONSTRAINT "Courses_pkey" PRIMARY KEY ("id_Course")
);

-- AddForeignKey
ALTER TABLE "Courses" ADD CONSTRAINT "Courses_id_Aluno_fkey" FOREIGN KEY ("id_Aluno") REFERENCES "Alunos"("id_Aluno") ON DELETE RESTRICT ON UPDATE CASCADE;
