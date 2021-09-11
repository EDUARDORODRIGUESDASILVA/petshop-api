import servicosService from "../services/servicos.service.js";
import { ErrorHandler } from "../util/error.handler.js";
async function createServico(req, res, next) {
  try {
    const servico = req.body;
    if (!servico.descricao || !servico.valor || !servico.animalId) {
      throw new ErrorHandler(
        400,
        "Missing required descricao, valor, or animalId fields"
      );
    }
    const c = await servicosService.createServico(servico);
    res.status(200).send(c);
  } catch (error) {
    const e = new ErrorHandler(400, error.message);
    next(e);
  }
}

async function updateServico(req, res, next) {
  try {
    const id = parseInt(req.params.id);
    const servico = req.body;

    if (!servico.descricao || !servico.valor || !servico.animalId) {
      throw new ErrorHandler(
        400,
        "Missing required descricao, valor, or animalId fields"
      );
    }
    await servicosService.updateServico(id, servico);

    const c = await servicosService.listarServicoPorID(id);
    res.send(c);
  } catch (error) {
    const e = new ErrorHandler(400, error.message);
    next(e);
  }
}

async function deleteServico(req, res, next) {
  try {
    const id = parseInt(req.params.id);

    if (!id) {
      throw new ErrorHandler(400, "Missing required id");
    }

    const c = await servicosService.deleteServico(id);
    res.send(c);
  } catch (error) {
    const e = new ErrorHandler(400, error.message);
    next(e);
  }
}

async function listarServicos(req, res, next) {
  try {
    if (!req.query.proprietario_id) {
      const c = await servicosService.listarServicos();
      res.status(200).send(c);
    } else {
      console.log(parseInt(req.query.proprietario_id));
      const proprietarioId = parseInt(req.query.proprietario_id);
      const c = await servicosService.listarServicosPorProprietarioId(
        proprietarioId
      );
      res.status(200).send(c);
    }
  } catch (error) {
    const e = new ErrorHandler(400, error.message);
    next(e);
  }
}

async function listarServicoPorID(req, res, next) {
  try {
    const id = parseInt(req.params.id);

    if (!id) {
      throw new ErrorHandler(400, "Missing required id");
    }
    const c = await servicosService.listarServicoPorID(id);
    res.status(200).send(c);
  } catch (error) {
    const e = new ErrorHandler(400, error.message);
    next(e);
  }
}

export default {
  createServico,
  updateServico,
  deleteServico,
  listarServicos,
  listarServicoPorID,
};
