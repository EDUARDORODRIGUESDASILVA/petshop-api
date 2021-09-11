import ServicosRepository from '../repositories/servicos.repository.js';

async function createServico(servico) {
    return await ServicosRepository.insertServico(servico);
  }

async function updateServico(servicoId, servico) {
    return await ServicosRepository.updateServico(servicoId, servico);
  }  

async function listarServicos() {
    return await ServicosRepository.listarServicos();
}  

async function listarServicoPorID(servicoId) {
    return await ServicosRepository.listarServicoPorID(servicoId);
}  

async function listarServicosPorProprietarioId(proprietarioId) {
  return await ServicosRepository.listarServicosPorProprietarioId(proprietarioId);
}  

async function deleteServico(servicoId) {
  return await ServicosRepository.deleteServico(servicoId);
}

export default {createServico, updateServico, listarServicoPorID, deleteServico, listarServicos, listarServicosPorProprietarioId}  ;