import { ErrorHandler } from "../util/error.handler.js";
import proprietariosService from "../services/proprietarios.service.js";
import animaisService from "../services/animais.service.js";

async function createProprietario(req, res, next) {
  try {
    const data = req.body;

    if (!data.nome || !data.telefone) {
      throw new ErrorHandler(400, "Missing required nome and telefone fields");
    }
    const c = await proprietariosService.createProprietario(data);
    res.status(201).send(c);
  } catch (error) {
    const e = new ErrorHandler(400, error.message);
    next(e);
  }
}

async function updateProprietario(req, res, next) {
  try {
    const id = parseInt(req.params.id);
    const data = req.body;

    if (!data.nome || !data.telefone) {
      throw new ErrorHandler(400, "Missing required nome or telefone fields");
    }
    const c = await proprietariosService.updateProprietario(id, data);
    res.send(c);
  } catch (error) {
    const e = new ErrorHandler(400, error.message);
    next(e);
  }
}

async function deleteProprietario(req, res, next) {
  try {
    const id = parseInt(req.params.id);

    if (!id) {
      throw new ErrorHandler(400, "Missing required id");
    }

    const animais = await animaisService.listarAnimalPorProprietarioID(id);
    if (animais.length > 0) {
      throw new ErrorHandler(400, "O proprietário tem animais vinculados!");
    }
    const c = await proprietariosService.deleteProprietario(id);
    res.send(c);
  } catch (error) {
    const e = new ErrorHandler(400, error.message);
    next(e);
  }
}

async function listarProprietarios(req, res, next) {
  try {
    const c = await proprietariosService.listarProprietarios();
    res.status(200).send(c);
  } catch (error) {
    const e = new ErrorHandler(400, error.message);
    next(e);
  }
}

async function listarProprietarioPorID(req, res, next) {
  try {
    const id = parseInt(req.params.id);

    if (!id) {
      throw new ErrorHandler(400, "Missing required id");
    }
    const c = await proprietariosService.listarProprietarioPorID(id);
    res.status(200).send(c);
  } catch (error) {
    const e = new ErrorHandler(400, error.message);
    next(e);
  }
}

export default {
  createProprietario,
  updateProprietario,
  deleteProprietario,
  listarProprietarios,
  listarProprietarioPorID,
};
