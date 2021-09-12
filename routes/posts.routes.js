import { Router } from "express";
import postsController from "../controllers/posts.controller.js";
const router = Router();

router.post("/", postsController.createPost);
//router.put("/:id", postsController.updateServico);
//router.delete("/:id", postsController.deleteServico);
router.get("/", postsController.listarPosts);
router.get("/:id", postsController.listarPostPorId);

export { router as postsRouter };
