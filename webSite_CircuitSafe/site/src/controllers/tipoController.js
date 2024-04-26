var tipoModel = require("../models/tipoModel");

function criarTipo(req, res) {
    var nome_tipo = req.body.nome_tipo;

    tipoModel.criarTipo(nome_tipo)
        .then(function(resultados) {
            res.json(resultados);
        })
        .catch(function(erro) {
            res.status(500).json(erro);
        });
}

function listarTipos(req, res) {
    tipoModel.listarTipos()
        .then(function(resultados) {
            res.json(resultados);
        })
        .catch(function(erro) {
            res.status(500).json(erro);
        });
}

function atualizarTipo(req, res) {
    var id_tipo = req.body.id_tipo;
    var nome_tipo = req.body.nome_tipo;

    tipoModel.atualizarTipo(id_tipo, nome_tipo)
        .then(function(resultados) {
            res.json(resultados);
        })
        .catch(function(erro) {
            res.status(500).json(erro);
        });
}

function deletarTipo(req, res) {
    var id_tipo = req.body.id_tipo;

    tipoModel.deletarTipo(id_tipo)
        .then(function(resultados) {
            res.json(resultados);
        })
        .catch(function(erro) {
            res.status(500).json(erro);
        });
}

module.exports = {
    criarTipo,
    listarTipos,
    atualizarTipo,
    deletarTipo
};