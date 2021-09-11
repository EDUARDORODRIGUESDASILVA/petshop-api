import { ErrorHandler } from "../util/error.handler.js";
import AnimaisService from "../services/Animais.service.js";

async function createAnimal(req, res, next) {
  try {
    const data = req.body;

    if (!data.nome || !data.tipo || !data.proprietario_id) {
      throw new ErrorHandler(
        400,
        "Missing required nome, tipo, or proprieratio_id fields"
      );
    }
    const c = await AnimaisService.createAnimal(data);
    res.status(201).send(c);
  } catch (error) {
    const e = new ErrorHandler(400, error.message);
    next(e);
  }
}

async function updateAnimal(req, res, next) {
  try {
    const id = parseInt(req.params.id);
    const data = req.body;

    if (!data.nome || !data.tipo || !data.proprietario_id) {
      throw new ErrorHandler(
        400,
        "Missing required nome, tipo, or proprieratio_id fields"
      );
    }
    const c = await AnimaisService.updateAnimal(id, data);
    res.send(c);
  } catch (error) {
    const e = new ErrorHandler(400, error.message);
    next(e);
  }
}

async function deleteAnimal(req, res, next) {
  try {
    const id = parseInt(req.params.id);

    if (!id) {
      throw new ErrorHandler(400, "Missing required id");
    }

    const temAnimal = false;
    if (temAnimal) {
      throw new ErrorHandler(400, "O proprietário tem animais vinculados!");
    }
    const c = await AnimaisService.deleteAnimal(id);
    res.send(c);
  } catch (error) {
    const e = new ErrorHandler(400, error.message);
    next(e);
  }
}

async function listarAnimais(req, res, next) {
  try {
    const propID = req.query.proprietario_id;
    if (!propID) {
      const c = await AnimaisService.listarAnimais();
      res.send(c);
    } else {
      const id = parseInt(propID);
      const c = await AnimaisService.listarAnimalPorProprietarioID(id);
      res.send(c);
    }
  } catch (error) {
    const e = new ErrorHandler(400, error.message);
    next(e);
  }
}

async function listarAnimalPorID(req, res, next) {
  try {
    const id = parseInt(req.params.id);

    if (!id) {
      throw new ErrorHandler(400, "Missing required id");
    }
    const c = await AnimaisService.listarAnimalPorID(id);

    res.status(200).send(c);
  } catch (error) {
    const e = new ErrorHandler(400, error.message);
    next(e);
  }
}

async function teste(req, res, next) {
  try {
    await AnimaisService.teste();
    res.end();
  } catch (error) {
    const e = new ErrorHandler(400, error.message);
    next(e);
  }
}

export default {
  createAnimal,
  updateAnimal,
  deleteAnimal,
  listarAnimalPorID,
  listarAnimais,
  teste,
};
