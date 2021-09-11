import Animal from '../models/animal.model.js';
async function insertAnimal(animal) {
    try {
        return await Animal.create(animal);
    } catch (err) {
        throw err;
    }
}

async function updateAnimal(animalId, animal) {
    try {
        await Animal.update(animal, {
            where: {
                animalId
            }
        });
        return await listarAnimalPorID(animalId);        
    } catch (error) {
        throw error;
    }       
}

async function deleteAnimal(animalId) {
    try {
        await Animal.destroy({
            where: {
                animalId
            }
        });
    } catch (err) {
        throw err;
    }
}

async function listarAnimais() {
    try {
        return await Animal.findAll();
    }
    catch (error) {
        throw error;
    }
   
}

async function listarAnimalPorID(animalId) {
    try {
        return await  Animal.findByPk(animalId);
    } catch (err) {
        throw err;
    } 
}

async function listarAnimalPorProprietarioID(proprietarioId) {
    try {
        return await Animal.findAll({
            where: {
                proprietario_id: proprietarioId
            }
        });
    }
    catch (error) {
        throw error;
    }
}

export default { insertAnimal, updateAnimal, deleteAnimal, listarAnimais, listarAnimalPorID, listarAnimalPorProprietarioID};