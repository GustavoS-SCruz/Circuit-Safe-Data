var express = require("express");
var router = express.Router();

var tipoController = require("../controllers/tipoController");

router.post("/criar", function (req, res) {
    tipoController.criarTipo(req, res);
});

router.get("/listar", function (req, res) {
    tipoController.listarTipos(req, res);
});

router.put("/atualizar", function (req, res) {
    tipoController.atualizarTipo(req, res);
});

router.delete("/deletar", function (req, res) {
    tipoController.deletarTipo(req, res);
});

module.exports = router;