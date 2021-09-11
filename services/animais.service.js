import AnimaisRepository from '../repositories/Animais.repository.js';

async function createAnimal(data) {
  return await AnimaisRepository.insertAnimal(data);
}

async function updateAnimal(id, data) {
  return await AnimaisRepository.updateAnimal(id, data);
}

async function deleteAnimal(id) {
  return await AnimaisRepository.deleteAnimal(id);
}

async function listarAnimais() {
  return await AnimaisRepository.listarAnimais();
}

async function listarAnimalPorID(id) {
  return await AnimaisRepository.listarAnimalPorID(id);
}

async function listarAnimalPorProprietarioID(id) {
  return await AnimaisRepository.listarAnimalPorProprietarioID(id);
}

export default { createAnimal, updateAnimal, deleteAnimal, listarAnimais,
  listarAnimalPorID, listarAnimalPorProprietarioID };