var componenteModel = require("../models/componenteModel");

function criarComponente(req, res) {
    var fk_tipo = req.body.fk_tipo;
    var capacidade = req.body.capacidade;
    var fk_unidade_medida = req.body.fk_unidade_medida;
    var fk_fabricante = req.body.fk_fabricante;

    componenteModel.criarComponente(fk_tipo, capacidade, fk_unidade_medida, fk_fabricante)
        .then(function(resultados) {
            res.json(resultados);
        })
        .catch(function(erro) {
            res.status(500).json(erro);
        });
}

function listarComponentes(req, res) {
    componenteModel.listarComponentes()
        .then(function(resultados) {
            res.json(resultados);
        })
        .catch(function(erro) {
            res.status(500).json(erro);
        });
}

function atualizarComponente(req, res) {
    var id_componente = req.body.id_componente;
    var fk_tipo = req.body.fk_tipo;
    var capacidade = req.body.capacidade;
    var fk_unidade_medida = req.body.fk_unidade_medida;
    var fk_fabricante = req.body.fk_fabricante;

    componenteModel.atualizarComponente(id_componente, fk_tipo, capacidade, fk_unidade_medida, fk_fabricante)
        .then(function(resultados) {
            res.json(resultados);
        })
        .catch(function(erro) {
            res.status(500).json(erro);
        });
}

function deletarComponente(req, res) {
    var id_componente = req.body.id_componente;

    componenteModel.deletarComponente(id_componente)
        .then(function(resultados) {
            res.json(resultados);
        })
        .catch(function(erro) {
            res.status(500).json(erro);
        });
}

module.exports = {
    criarComponente,
    listarComponentes,
    atualizarComponente,
    deletarComponente
};