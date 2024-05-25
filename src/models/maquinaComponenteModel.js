var database = require("../database/config");

function criarMaquinaComponente(fk_maquina, fk_componente) {
    console.log("Criando nova relação máquina-componente");
    var instrucao = `
        INSERT INTO maquina_has_componente (fk_maquina, fk_componente) 
        VALUES (${fk_maquina}, ${fk_componente});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarMaquinasComponentes() {
    var instrucao = `
        SELECT fk_maquina, fk_componente FROM maquina_has_componente;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletarMaquinaComponente(fk_maquina, fk_componente) {
    console.log("Deletando relação máquina-componente");
    var instrucao = `
        DELETE FROM maquina_has_componente WHERE fk_maquina = ${fk_maquina} AND fk_componente = ${fk_componente};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    criarMaquinaComponente,
    listarMaquinasComponentes,
    deletarMaquinaComponente
};