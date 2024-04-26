var database = require("../database/config");

function criarComponente(fk_tipo, capacidade, fk_unidade_medida, fk_fabricante) {
    console.log("Criando novo componente");
    var instrucao = `
        INSERT INTO componente (fk_tipo, capacidade, fk_unidade_medida, fk_fabricante) 
        VALUES (${fk_tipo}, ${capacidade}, ${fk_unidade_medida}, ${fk_fabricante});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarComponentes() {
    var instrucao = `
        SELECT id_componente, fk_tipo, capacidade, fk_unidade_medida, fk_fabricante FROM componente;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizarComponente(id_componente, fk_tipo, capacidade, fk_unidade_medida, fk_fabricante) {
    console.log("Atualizando componente com id:", id_componente);
    var instrucao = `
        UPDATE componente 
        SET fk_tipo = ${fk_tipo}, capacidade = ${capacidade}, fk_unidade_medida = ${fk_unidade_medida}, fk_fabricante = ${fk_fabricante} 
        WHERE id_componente = ${id_componente};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletarComponente(id_componente) {
    console.log("Deletando componente com id:", id_componente);
    var instrucao = `
        DELETE FROM componente WHERE id_componente = ${id_componente};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    criarComponente,
    listarComponentes,
    atualizarComponente,
    deletarComponente
};