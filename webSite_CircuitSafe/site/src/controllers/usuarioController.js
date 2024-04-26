var usuarioModel = require("../models/usuarioModel");

function autenticarUsuario(req, res) {
    var email = req.body.email;
    var senha = req.body.senha;

    usuarioModel.autenticar(email, senha)
        .then(function(resultados) {
            res.json(resultados);
        })
        .catch(function(erro) {
            res.status(500).json(erro);
        });
}

function cadastrarUsuario(req, res) {
    var nome = req.body.nome;
    var email = req.body.email;
    var senha = req.body.senha;
    var nivel = req.body.nivel;
    var empresaId = req.body.empresaId;

    usuarioModel.cadastrar(nome, email, senha, nivel, empresaId)
        .then(function(resultados) {
            res.json(resultados);
        })
        .catch(function(erro) {
            res.status(500).json(erro);
        });
}

module.exports = {
    autenticarUsuario,
    cadastrarUsuario
};