import { Router } from "express";
import createAluno from "../controllers/criarAlunoController";
import listarAlunos from "../controllers/listarAlunosController";
import procurarAluno from "../controllers/procurarAlunoController";
import atualizarAluno from "../controllers/atualizarAlunoController";
import excluiAluno from "../controllers/excluiAlunoController";


const AtualizarAluno = new atualizarAluno();
const ProcurarAluno = new procurarAluno();
const ListarAlunos = new listarAlunos();
const CreateAluno = new createAluno();
const ExcluiAluno = new excluiAluno();
const router = Router();

router.post('/', CreateAluno.create);
router.get('/', ListarAlunos.show);
router.get('/byId/:id', ProcurarAluno.get);
router.put('/:id', AtualizarAluno.update);
router.delete('/byId/:id', ExcluiAluno.delete);

export default router;