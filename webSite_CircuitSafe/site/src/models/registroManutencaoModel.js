const database = require('../database/config');

function criarRegistroManutencao(fk_maquina, fk_usuario, descricao) {
    var instrucao = `
        INSERT INTO registro_manutencao (fk_maquina, fk_usuario, descricao)
        VALUES (${fk_maquina}, ${fk_usuario}, '${descricao}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarRegistrosManutencao() {
    var instrucao = `
        SELECT 
            id_registro_manutencao,
            fk_maquina,
            fk_usuario,
            descricao
        FROM registro_manutencao;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizarRegistroManutencao(id_registro_manutencao, fk_maquina, fk_usuario, descricao) {
    var instrucao = `
        UPDATE registro_manutencao
        SET fk_maquina = ${fk_maquina}, fk_usuario = ${fk_usuario}, descricao = '${descricao}'
        WHERE id_registro_manutencao = ${id_registro_manutencao};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletarRegistroManutencao(id_registro_manutencao) {
    var instrucao = `
        DELETE FROM registro_manutencao
        WHERE id_registro_manutencao = ${id_registro_manutencao};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    criarRegistroManutencao,
    listarRegistrosManutencao,
    atualizarRegistroManutencao,
    deletarRegistroManutencao
};