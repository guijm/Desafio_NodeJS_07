import { prisma, PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
class atualizarAluno {
    async update(req:Request, res:Response){
        const prisma = new PrismaClient();
        const {id,nomeAluno}= req.params
        const atualizarAluno = await prisma.alunos.update({
            where: {
                id_Aluno: Number (id),
            },
            data: { 
                name: nomeAluno
            }
        })
        res.json(atualizarAluno);
    }
}
export default atualizarAluno;