import db from './db.js';

async function insertProprietario(data) {
    const conn = await db.connect();

    try {
        const sql = 'INSERT INTO PROPRIETARIOS (nome, telefone) VALUES ($1, $2) RETURNING *;';
        const res = await conn.query(sql, [data.nome, data.telefone]);
        return res.rows[0];
    } catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}


async function updateProprietario(id, data) {
    const conn = await db.connect();

    try {
        const sql = 'update proprietarios set nome = $1, telefone=$2 where proprietario_id = $3 RETURNING *;';
        const res = await conn.query(sql, [data.nome, data.telefone, id]);
        return res.rows[0];
    } catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}

async function deleteProprietario(id) {
    const conn = await db.connect();

    try {
        const sql = 'delete from proprietarios where proprietario_id = $1 RETURNING *;';
        const res = await conn.query(sql, [id]);
        return res.rows[0];
    } catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}

async function listarProprietarios() {
    const conn = await db.connect();

    try {
        const sql = 'select * from proprietarios ;';
        const res = await conn.query(sql);
        return res.rows;
    } catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}

async function listarProprietarioPorID(id) {
    const conn = await db.connect();

    try {
        const sql = 'select * from proprietarios where proprietario_id = $1;';
        const res = await conn.query(sql, [id]);
        return res.rows[0];
    } catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}



export default { insertProprietario, updateProprietario, deleteProprietario, listarProprietarios, listarProprietarioPorID };