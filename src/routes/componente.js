var express = require("express");
var router = express.Router();

var componenteController = require("../controllers/componenteController");

router.post("/criar", function (req, res) {
    componenteController.criarComponente(req, res);
});

router.get("/listar", function (req, res) {
    componenteController.listarComponentes(req, res);
});

router.put("/atualizar", function (req, res) {
    componenteController.atualizarComponente(req, res);
});

router.delete("/deletar", function (req, res) {
    componenteController.deletarComponente(req, res);
});

module.exports = router;