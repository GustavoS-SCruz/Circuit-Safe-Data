var database = require("../database/config");

function criarRegistroRecurso(fk_maquina, fk_componente, valor, dt_hora_registro) {
    console.log("Criando novo registro de recurso");
    var instrucao = `
        INSERT INTO registro_recurso (fk_maquina, fk_componente, valor, dt_hora_registro) 
        VALUES (${fk_maquina}, ${fk_componente}, ${valor}, '${dt_hora_registro}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarRegistrosRecursos() {
    var instrucao = `
        SELECT id_registro, fk_maquina, fk_componente, valor, dt_hora_registro FROM registro_recurso;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizarRegistroRecurso(id_registro, fk_maquina, fk_componente, valor, dt_hora_registro) {
    console.log("Atualizando registro de recurso com id:", id_registro);
    var instrucao = `
        UPDATE registro_recurso 
        SET fk_maquina = ${fk_maquina}, fk_componente = ${fk_componente}, valor = ${valor}, dt_hora_registro = '${dt_hora_registro}' 
        WHERE id_registro = ${id_registro};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletarRegistroRecurso(id_registro) {
    console.log("Deletando registro de recurso com id:", id_registro);
    var instrucao = `
        DELETE FROM registro_recurso WHERE id_registro = ${id_registro};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    criarRegistroRecurso,
    listarRegistrosRecursos,
    atualizarRegistroRecurso,
    deletarRegistroRecurso
};