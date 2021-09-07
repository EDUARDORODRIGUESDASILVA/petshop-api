
import { Router } from 'express';
import proprietariosController from '../controllers/proprietarios.controller.js';
const router = Router();

router.post('/', proprietariosController.createProprietario);
router.put('/:id', proprietariosController.updateProprietario);
router.delete('/:id', proprietariosController.deleteProprietario);
router.get('/', proprietariosController.listarProprietarios);
router.get('/:id', proprietariosController.listarProprietarioPorID);


export {router as proprietariosRouter};

