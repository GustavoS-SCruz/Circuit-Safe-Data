var database = require("../database/config");

function criarUnidadeMedida(nome_tipo) {
    console.log("Criando nova unidade de medida com nome:", nome_tipo);
    var instrucao = `
        INSERT INTO tipo (nome_tipo) VALUES ('${nome_tipo}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarUnidadesMedida() {
    var instrucao = `
        SELECT id_tipo, nome_tipo FROM tipo;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizarUnidadeMedida(id_tipo, nome_tipo) {
    console.log("Atualizando unidade de medida com id:", id_tipo);
    var instrucao = `
        UPDATE tipo SET nome_tipo = '${nome_tipo}' WHERE id_tipo = ${id_tipo};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletarUnidadeMedida(id_tipo) {
    console.log("Deletando unidade de medida com id:", id_tipo);
    var instrucao = `
        DELETE FROM tipo WHERE id_tipo = ${id_tipo};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    criarUnidadeMedida,
    listarUnidadesMedida,
    atualizarUnidadeMedida,
    deletarUnidadeMedida
};