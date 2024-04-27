var empresaModel = require("../models/empresaModel");

function buscarPorId(req, res) {
    var id = req.params.id;

    empresaModel.buscarPorId(id)
        .then(function(resultados) {
            res.json(resultados);
        })
        .catch(function(erro) {
            res.status(500).json(erro);
        });
}

function listar(req, res) {
    empresaModel.listar()
        .then(function(resultados) {
            res.json(resultados);
        })
        .catch(function(erro) {
            res.status(500).json(erro);
        });
}

function buscarPorCnpj(req, res) {
    var cnpj = req.params.cnpj;

    empresaModel.buscarPorCnpj(cnpj)
        .then(function(resultados) {
            res.json(resultados);
        })
        .catch(function(erro) {
            res.status(500).json(erro);
        });
}

function cadastrar(req, res) {
    var nomeFantasia = req.body.nomeFantasia;
    var razaoSocial = req.body.razaoSocial;
    var cnpj = req.body.cnpj;

    empresaModel.cadastrar(nomeFantasia, razaoSocial, cnpj)
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
    buscarPorCnpj,
    cadastrar
};