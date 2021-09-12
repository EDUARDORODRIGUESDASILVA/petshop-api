import blogRepository from "../repositories/blog.repository.js";

async function listarPosts() {
  return await blogRepository.listarPosts();
}

async function listarPostPorId(id) {
  return await blogRepository.listarPostPorId(id);
}

async function createPost(post) {
  return await blogRepository.createPost(post);
}

async function createComentario(id, comentario) {
  // TODO verificar se o post existe
  return await blogRepository.createComentario(id, comentario);
}

export default { listarPosts, createPost, createComentario, listarPostPorId };
