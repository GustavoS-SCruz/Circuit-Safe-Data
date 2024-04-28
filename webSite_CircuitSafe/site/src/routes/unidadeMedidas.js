var express = require("express");
var router = express.Router();

var unidadeController = require("../controllers/unidadeMedidaController");

router.post("/criar", function (req, res) {
    unidadeController.criarUnidade(req, res);
});

router.get("/listar", function (req, res) {
    unidadeController.listarUnidades(req, res);
});

router.put("/atualizar", function (req, res) {
    unidadeController.atualizarUnidade(req, res);
});

router.delete("/deletar", function (req, res) {
    unidadeController.deletarUnidade(req, res);
});

module.exports = router;