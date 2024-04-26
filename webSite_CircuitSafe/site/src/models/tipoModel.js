var database = require("../database/config");

function criarTipo(nome_tipo) {
    console.log("Criando novo tipo com nome:", nome_tipo);
    var instrucao = `
        INSERT INTO tipo (nome_tipo) VALUES ('${nome_tipo}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarTipos() {
    var instrucao = `
        SELECT id_tipo, nome_tipo FROM tipo;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizarTipo(id_tipo, nome_tipo) {
    console.log("Atualizando tipo com id:", id_tipo);
    var instrucao = `
        UPDATE tipo SET nome_tipo = '${nome_tipo}' WHERE id_tipo = ${id_tipo};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletarTipo(id_tipo) {
    console.log("Deletando tipo com id:", id_tipo);
    var instrucao = `
        DELETE FROM tipo WHERE id_tipo = ${id_tipo};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    criarTipo,
    listarTipos,
    atualizarTipo,
    deletarTipo
};