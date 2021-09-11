import Proprietario from "../models/proprietario.model.js";
async function insertProprietario(proprietario) {
  try {
    return await Proprietario.create(proprietario);
  } catch (err) {
    throw err;
  }
}

async function updateProprietario(proprietarioId, proprietario) {
  try {
    await Proprietario.update(proprietario, {
      where: {
        proprietarioId,
      },
    });
    return await listarProprietarioPorID(proprietarioId);
  } catch (error) {
    throw error;
  }
}

async function deleteProprietario(proprietarioId) {
  try {
    await Proprietario.destroy({
      where: {
        proprietarioId,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function listarProprietarios() {
  try {
    return await Proprietario.findAll();
  } catch (error) {
    throw error;
  }
}

async function listarProprietarioPorID(proprietarioId) {
  try {
    return await Proprietario.findByPk(proprietarioId);
  } catch (err) {
    throw err;
  }
}

export default {
  insertProprietario,
  updateProprietario,
  deleteProprietario,
  listarProprietarios,
  listarProprietarioPorID,
};
