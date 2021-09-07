import db from './db.js';

async function insertAnimal(data) {
    const conn = await db.connect();

    try {
        const sql = 'insert into animais (nome, tipo, proprietario_id) values ($1, $2, $3) RETURNING *;';
        const res = await conn.query(sql, [data.nome, data.tipo, data.proprietario_id]);
        return res.rows[0];
    } catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}


async function updateAnimal(id, data) {
    const conn = await db.connect();

    try {
        const sql = 'update animais set nome = $1, tipo=$2, proprietario_id=$3 where animal_id= $4 RETURNING *;';
        const res = await conn.query(sql, [data.nome, data.tipo, data.proprietario_id, id]);
        return res.rows[0];
    } catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}

async function deleteAnimal(id) {
    const conn = await db.connect();

    try {
        const sql = 'delete from Animais where Animal_id = $1 RETURNING *;';
        const res = await conn.query(sql, [id]);
        return res.rows[0];
    } catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}

async function listarAnimais() {
    const conn = await db.connect();

    try {
        const sql = 'select * from Animais ;';
        const res = await conn.query(sql);
        return res.rows;
    } catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}

async function listarAnimalPorID(id) {
    const conn = await db.connect();

    try {
        const sql = 'select * from Animais where Animal_id = $1;';
        const res = await conn.query(sql, [id]);
        return res.rows[0];
    } catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}

async function listarAnimalPorProprietarioID(id) {
    const conn = await db.connect();

    try {
        const sql = 'select * from animais where proprietario_id= $1;';
        const res = await conn.query(sql, [id]);
        return res.rows;
    } catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}


export default { insertAnimal, updateAnimal, deleteAnimal, listarAnimais, listarAnimalPorID, listarAnimalPorProprietarioID };