import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

class listarAlunos {
    async show (req:Request,res:Response){
        const prisma = new PrismaClient
        const listarAlunos = await prisma.alunos.findMany();
        res.json(listarAlunos);
    }
}
export default listarAlunos;