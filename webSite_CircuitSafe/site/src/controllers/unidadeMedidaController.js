var unidadeModel = require("../models/unidadeModel");

function criarUnidade(req, res) {
    var nome_tipo = req.body.nome_tipo;

    unidadeModel.criarUnidadeMedida(nome_tipo)
        .then(function(resultados) {
            res.json(resultados);
        })
        .catch(function(erro) {
            res.status(500).json(erro);
        });
}

function listarUnidades(req, res) {
    unidadeModel.listarUnidadesMedida()
        .then(function(resultados) {
            res.json(resultados);
        })
        .catch(function(erro) {
            res.status(500).json(erro);
        });
}

function atualizarUnidade(req, res) {
    var id_tipo = req.body.id_tipo;
    var nome_tipo = req.body.nome_tipo;

    unidadeModel.atualizarUnidadeMedida(id_tipo, nome_tipo)
        .then(function(resultados) {
            res.json(resultados);
        })
        .catch(function(erro) {
            res.status(500).json(erro);
        });
}

function deletarUnidade(req, res) {
    var id_tipo = req.body.id_tipo;

    unidadeModel.deletarUnidadeMedida(id_tipo)
        .then(function(resultados) {
            res.json(resultados);
        })
        .catch(function(erro) {
            res.status(500).json(erro);
        });
}

module.exports = {
    criarUnidade,
    listarUnidades,
    atualizarUnidade,
    deletarUnidade
};