import { Router } from "express";
import animaisController from "../controllers/animais.controller.js";
const router = Router();

router.post("/", animaisController.createAnimal);
router.put("/:id", animaisController.updateAnimal);
router.delete("/:id", animaisController.deleteAnimal);
router.get("/", animaisController.listarAnimais);
router.get("/:id", animaisController.listarAnimalPorID);

export { router as animaisRouter };
