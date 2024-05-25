var maquinaModel = require("../models/maquinaModel");

function buscarMaquinasPorEmpresa(req, res) {
    var empresaId = req.params.empresaId;

    maquinaModel.buscarMaquinasPorEmpresa(empresaId)
        .then(function(resultados) {
            res.json(resultados);
        })
        .catch(function(erro) {
            res.status(500).json(erro);
        });
}

function cadastrar(req, res) {
    var numeroSerial = req.body.numeroSerial;
    var localizacao = req.body.localizacao;
    var empresaId = req.body.empresaId;

    maquinaModel.cadastrar(numeroSerial, localizacao, empresaId)
        .then(function(resultados) {
            res.json(resultados);
        })
        .catch(function(erro) {
            res.status(500).json(erro);
        });
}

module.exports = {
    buscarMaquinasPorEmpresa,
    cadastrar
};