import Servico from "../models/servico.model.js";
import db from "../repositories/db.js";
import { Sequelize } from "sequelize";

async function insertServico(servico) {
  try {
    return await Servico.create(servico);
  } catch (err) {
    throw err;
  }
}

async function updateServico(servicoId, servico) {
  try {
    return await Servico.update(servico, {
      where: {
        servicoId,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function listarServicos() {
  try {
    return await Servico.findAll();
  } catch (error) {
    throw error;
  }
}

async function listarServicosPorProprietarioId(proprietarioId) {
  try {
    const query = `SELECT servico_id as "servicoId", descricao, valor,
        servicos.animal_id as "animalId" 	
        FROM "public"."servicos" 
        INNER JOIN  animais
        ON animais.animal_Id = servicos.animal_id
        where proprietario_id = ? `;
    console.log(query);
    // return query;

    const type = Sequelize.QueryTypes.SELECT;
    //{ type: Sequelize.QueryTypes.SELECT}
    const res = await db.query(
      { query, values: [proprietarioId] },
      { type: Sequelize.QueryTypes.SELECT }
    );
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function listarServicoPorID(servicoId) {
  try {
    return await Servico.findByPk(servicoId);
  } catch (err) {
    throw err;
  }
}

async function deleteServico(servicoId) {
  try {
    await Servico.destroy({
      where: {
        servicoId,
      },
    });
  } catch (err) {
    throw err;
  }
}

export default {
  insertServico,
  updateServico,
  listarServicoPorID,
  deleteServico,
  listarServicos,
  listarServicosPorProprietarioId,
};
