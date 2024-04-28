var usuarioModel = require("../models/usuarioModel");

function autenticarUsuario(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    usuarioModel.autenticar(email, senha)
        .then(
            function (resultadoAutenticar) {
                console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); 
            
                if (resultadoAutenticar.length == 1) {
                    console.log(resultadoAutenticar);
                    res.status(200).json(resultadoAutenticar);
                } else if (resultadoAutenticar.length == 0) {
                    res.status(403).send("Email e/ou senha inválido(s)");
                } else {
                    res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                }
            }
        )
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