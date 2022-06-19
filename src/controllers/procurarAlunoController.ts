import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

class procurarAluno {
    async get(req: Request,res:Response){
        const prisma = new PrismaClient();
        const  id  = req.params.id
        const procurarAluno = await prisma.alunos.findUnique({
              where: { id_Aluno: Number (id) }
            })
            res.json(procurarAluno);
          }
    }

export default procurarAluno;