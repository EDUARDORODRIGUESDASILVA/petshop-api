import { Router } from "express";
import servicosController from "../controllers/servicos.controller.js";
const router = Router();

router.post("/", servicosController.createServico);
router.put("/:id", servicosController.updateServico);
router.delete("/:id", servicosController.deleteServico);
router.get("/", servicosController.listarServicos);
router.get("/:id", servicosController.listarServicoPorID);

export { router as servicosRouter };
