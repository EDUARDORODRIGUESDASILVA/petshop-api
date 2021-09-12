import { ErrorHandler } from "../util/error.handler.js";
import blogService from "../services/blog.service.js";

async function listarPosts(req, res, next) {
  try {
    const posts = await blogService.listarPosts();
    res.status(200).send(posts);
  } catch (error) {
    const e = new ErrorHandler(400, error.message);
    next(e);
  }
}

async function listarPostPorId(req, res, next) {
  try {
    const id = req.params.id;

    const c = await blogService.listarPostPorId(id);
    res.status(200).send(c);
  } catch (error) {
    const e = new ErrorHandler(400, error.message);
    next(e);
  }
}

async function createPost(req, res, next) {
  try {
    const post = req.body;

    if (!post.titulo || !post.conteudo) {
      throw new ErrorHandler(400, "Missing required titulo or conteudo fields");
    }

    const id = await blogService.createPost(post);
    res.status(200).send(id);
  } catch (error) {
    const e = new ErrorHandler(400, error.message);
    next(e);
  }
}

async function createComentario(req, res, next) {
  try {
    const id = req.body.id;

    const comentario = {};
    comentario.nome = req.body.nome;
    comentario.conteudo = req.body.conteudo;

    if (!id || !comentario.nome || !comentario.conteudo) {
      throw new ErrorHandler(400, "Missing required nome or conteudo fields");
    }

    const c = await blogService.createComentario(id, comentario);
    res.status(200).send(c);
  } catch (error) {
    const e = new ErrorHandler(400, error.message);
    next(e);
  }
}

export default { listarPosts, listarPostPorId, createPost, createComentario };
