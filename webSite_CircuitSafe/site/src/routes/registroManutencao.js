var express = require("express");
var router = express.Router();

var registroManutencaoController = require("../controllers/registroManutencaoController");

router.post("/criar", function (req, res) {
    registroManutencaoController.criarRegistroManutencao(req, res);
});

router.get("/listar", function (req, res) {
    registroManutencaoController.listarRegistrosManutencao(req, res);
});

router.put("/atualizar", function (req, res) {
    registroManutencaoController.atualizarRegistroManutencao(req, res);
});

router.delete("/deletar", function (req, res) {
    registroManutencaoController.deletarRegistroManutencao(req, res);
});

module.exports = router;