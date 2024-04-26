// Importar a configuração do banco de dados
var database = require("../database/config");

// Função para autenticar um usuário
function autenticar(email, senha) {
    console.log("Autenticando usuário com email:", email);
    var instrucao = `
        SELECT id_usuario, nome_usuario, email, nivel, fk_empresa AS empresaId FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Função para cadastrar um novo usuário
function cadastrar(nome, email, senha, nivel, empresaId) {
    console.log("Cadastrando novo usuário com nome:", nome);
    
    var instrucao = `
        INSERT INTO usuario (nome_usuario, email, senha, nivel, fk_empresa) VALUES ('${nome}', '${email}', '${senha}', '${nivel}', '${empresaId}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Exportar as funções para serem usadas em outros arquivos
module.exports = {
    autenticar,
    cadastrar
};