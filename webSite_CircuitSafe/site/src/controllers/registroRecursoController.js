var registroRecursoModel = require("../models/registroRecursoModel");

function criarRegistroRecurso(req, res) {
    var fk_maquina = req.body.fk_maquina;
    var fk_componente = req.body.fk_componente;
    var valor = req.body.valor;
    var dt_hora_registro = req.body.dt_hora_registro;

    registroRecursoModel.criarRegistroRecurso(fk_maquina, fk_componente, valor, dt_hora_registro)
        .then(function(resultados) {
            res.json(resultados);
        })
        .catch(function(erro) {
            res.status(500).json(erro);
        });
}

function listarRegistrosRecursos(req, res) {
    registroRecursoModel.listarRegistrosRecursos()
        .then(function(resultados) {
            res.json(resultados);
        })
        .catch(function(erro) {
            res.status(500).json(erro);
        });
}

function atualizarRegistroRecurso(req, res) {
    var id_registro = req.body.id_registro;
    var fk_maquina = req.body.fk_maquina;
    var fk_componente = req.body.fk_componente;
    var valor = req.body.valor;
    var dt_hora_registro = req.body.dt_hora_registro;

    registroRecursoModel.atualizarRegistroRecurso(id_registro, fk_maquina, fk_componente, valor, dt_hora_registro)
        .then(function(resultados) {
            res.json(resultados);
        })
        .catch(function(erro) {
            res.status(500).json(erro);
        });
}

function deletarRegistroRecurso(req, res) {
    var id_registro = req.body.id_registro;

    registroRecursoModel.deletarRegistroRecurso(id_registro)
        .then(function(resultados) {
            res.json(resultados);
        })
        .catch(function(erro) {
            res.status(500).json(erro);
        });
}

module.exports = {
    criarRegistroRecurso,
    listarRegistrosRecursos,
    atualizarRegistroRecurso,
    deletarRegistroRecurso
};