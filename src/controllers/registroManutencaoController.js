var registroManutencaoModel = require("../models/registroManutencaoModel");

function criarRegistroManutencao(req, res) {
    var fk_maquina = req.body.fk_maquina;
    var fk_usuario = req.body.fk_usuario;
    var descricao = req.body.descricao;

    registroManutencaoModel.criarRegistroManutencao(fk_maquina, fk_usuario, descricao)
        .then(function(resultados) {
            res.json(resultados);
        })
        .catch(function(erro) {
            res.status(500).json(erro);
        });
}

function listarRegistrosManutencao(req, res) {
    registroManutencaoModel.listarRegistrosManutencao()
        .then(function(resultados) {
            res.json(resultados);
        })
        .catch(function(erro) {
            res.status(500).json(erro);
        });
}

function atualizarRegistroManutencao(req, res) {
    var id_registro_manutencao = req.body.id_registro_manutencao;
    var fk_maquina = req.body.fk_maquina;
    var fk_usuario = req.body.fk_usuario;
    var descricao = req.body.descricao;

    registroManutencaoModel.atualizarRegistroManutencao(id_registro_manutencao, fk_maquina, fk_usuario, descricao)
        .then(function(resultados) {
            res.json(resultados);
        })
        .catch(function(erro) {
            res.status(500).json(erro);
        });
}

function deletarRegistroManutencao(req, res) {
    var id_registro_manutencao = req.body.id_registro_manutencao;

    registroManutencaoModel.deletarRegistroManutencao(id_registro_manutencao)
        .then(function(resultados) {
            res.json(resultados);
        })
        .catch(function(erro) {
            res.status(500).json(erro);
        });
}

module.exports = {
    criarRegistroManutencao,
    listarRegistrosManutencao,
    atualizarRegistroManutencao,
    deletarRegistroManutencao
};