var maquinaComponenteModel = require("../models/maquinaComponenteModel");

function criarMaquinaComponente(req, res) {
    var fk_maquina = req.body.fk_maquina;
    var fk_componente = req.body.fk_componente;

    maquinaComponenteModel.criarMaquinaComponente(fk_maquina, fk_componente)
        .then(function(resultados) {
            res.json(resultados);
        })
        .catch(function(erro) {
            res.status(500).json(erro);
        });
}

function listarMaquinasComponentes(req, res) {
    maquinaComponenteModel.listarMaquinasComponentes()
        .then(function(resultados) {
            res.json(resultados);
        })
        .catch(function(erro) {
            res.status(500).json(erro);
        });
}

function deletarMaquinaComponente(req, res) {
    var fk_maquina = req.body.fk_maquina;
    var fk_componente = req.body.fk_componente;

    maquinaComponenteModel.deletarMaquinaComponente(fk_maquina, fk_componente)
        .then(function(resultados) {
            res.json(resultados);
        })
        .catch(function(erro) {
            res.status(500).json(erro);
        });
}

module.exports = {
    criarMaquinaComponente,
    listarMaquinasComponentes,
    deletarMaquinaComponente
};