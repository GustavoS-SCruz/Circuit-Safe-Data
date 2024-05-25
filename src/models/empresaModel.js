var database = require("../database/config");

function buscarPorId(id) {
  var query = `SELECT * FROM empresa WHERE id_empresa = '${id}'`;

  return database.executar(query);
}

function listar() {
  var query = `SELECT * FROM empresa`;

  return database.executar(query);
}

function buscarPorCnpj(cnpj) {
  var query = `SELECT * FROM empresa WHERE cnpj = '${cnpj}'`;

  return database.executar(query);
}

function cadastrar(nomeFantasia, razaoSocial, cnpj) {
  var query = `INSERT INTO empresa (nome_fantasia, razao_social, cnpj) VALUES ('${nomeFantasia}', '${razaoSocial}', '${cnpj}')`;

  return database.executar(query);
}

module.exports = { buscarPorCnpj, buscarPorId, cadastrar, listar };