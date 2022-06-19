import { PrismaClient } from "@prisma/client";
import { Request,Response } from "express";

class createAluno {
    async create(req:Request, res:Response){
        const prisma = new PrismaClient();
        const {nomeAluno,curso} = req.body
        const alunos = await prisma.alunos.create({
            data: {name:nomeAluno,
                   course: {
                        create:{
                          Course: curso
                    }
                }
            }    
        });
        res.json(alunos);
    };
   
};
export default createAluno;
