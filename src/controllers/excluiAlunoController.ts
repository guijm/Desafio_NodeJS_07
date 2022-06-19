import { PrismaClient } from "@prisma/client";
import { Request,Response } from "express";

class excluiAluno{
    async delete(req:Request, res:Response){
        const prisma = new PrismaClient();
        const id = req.params.id;
        const excluirAluno = await prisma.alunos.delete({
            where: {
                id_Aluno: Number(id)
            }
        })
        res.json(excluirAluno);
    }
}
export default excluiAluno;