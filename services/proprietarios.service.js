import ProprietariosRepository from '../repositories/Proprietarios.repository.js';

async function createProprietario(data) {
  return await ProprietariosRepository.insertProprietario(data);
}

async function updateProprietario(id, data) {
  return  await ProprietariosRepository.updateProprietario(id, data);  
}

async function deleteProprietario(id) {  
  return  await ProprietariosRepository.deleteProprietario(id);  
}

async function listarProprietarios() {  
  return  await ProprietariosRepository.listarProprietarios();  
}

async function listarProprietarioPorID(id) {
  return  await ProprietariosRepository.listarProprietarioPorID(id);
}

export default {createProprietario, updateProprietario, deleteProprietario, listarProprietarios, 
  listarProprietarioPorID};
  