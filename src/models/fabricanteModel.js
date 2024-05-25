var database = require("../database/config");

function buscarPorId(id) {
  var query = `SELECT * FROM fabricante WHERE id_fabricante = '${id}'`;

  return database.executar(query);
}

function listar() {
  var query = `SELECT * FROM fabricante`;

  return database.executar(query);
}

function cadastrar(nomeFabricante) {
  var query = `INSERT INTO fabricante (nome_fabricante) VALUES ('${nomeFabricante}')`;

  return database.executar(query);
}

module.exports = { buscarPorId, cadastrar, listar };