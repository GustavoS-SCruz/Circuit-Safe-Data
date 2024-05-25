var fabricanteModel = require("../models/fabricanteModel");

function buscarPorId(req, res) {
    var id = req.params.id;

    fabricanteModel.buscarPorId(id)
        .then(function(resultados) {
            res.json(resultados);
        })
        .catch(function(erro) {
            res.status(500).json(erro);
        });
}

function listar(req, res) {
    fabricanteModel.listar()
        .then(function(resultados) {
            res.json(resultados);
        })
        .catch(function(erro) {
            res.status(500).json(erro);
        });
}

function cadastrar(req, res) {
    var nomeFabricante = req.body.nomeFabricante;

    fabricanteModel.cadastrar(nomeFabricante)
        .then(function(resultados) {
            res.json(resultados);
        })
        .catch(function(erro) {
            res.status(500).json(erro);
        });
}

module.exports = {
    buscarPorId,
    listar,
    cadastrar
};