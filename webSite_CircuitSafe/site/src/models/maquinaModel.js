var database = require("../database/config");

function buscarMaquinasPorEmpresa(empresaId) {

  instrucaoSql = `SELECT * FROM maquina WHERE fk_empresa = ${empresaId}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(numeroSerial, localizacao, empresaId) {
  
  instrucaoSql = `INSERT INTO maquina (numero_serial, localizacao, fk_empresa) VALUES ('${numeroSerial}', '${localizacao}', ${empresaId})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarMaquinasPorEmpresa,
  cadastrar
}