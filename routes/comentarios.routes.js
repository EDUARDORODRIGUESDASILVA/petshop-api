import { Router } from "express";
import postsController from "../controllers/posts.controller.js";
const router = Router();

router.post("/", postsController.createComentario);

export { router as comentariosRouter };
