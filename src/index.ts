/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { PrismaClient } from '@prisma/client'

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, async () => {
	console.log(`Listening on port ${PORT}`);


	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05
	const readline = require('readline-sync')
	let nome = readline.question('Digite o nome do aluno: ');
	let curso = readline.question('Dgite o curso do aluno: ');

	const prisma = new PrismaClient()
	async function main(){
		prisma.alunos.create({
			data:{
				name:nome,
				course:{
					create:{course:curso}
				}	
			}
		})
		const atualizar = await prisma.alunos.update({
			where: {
			  id_Aluno: 3,
			},
			data: {
			  name: 'Aluno3',
			},
		  })
		.then(()=>{
			console.log("Cadastrado com sucesso!");	
		})
		const todosAlunos = await prisma.alunos.findMany()
		const todosCursos = await prisma.courses.findMany()
		console.log(todosAlunos)
		console.log(todosCursos);	
	}
	     main()
     	.catch((e) => {
       	throw e
    	})
    	.finally(async () => {
       		await prisma.$disconnect()
   })
});
