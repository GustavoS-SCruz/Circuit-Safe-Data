var express = require("express");
var router = express.Router();

var maquinaComponenteController = require("../controllers/maquinaComponenteController");

router.post("/criar", function (req, res) {
    maquinaComponenteController.criarMaquinaComponente(req, res);
});

router.get("/listar", function (req, res) {
    maquinaComponenteController.listarMaquinasComponentes(req, res);
});

router.delete("/deletar", function (req, res) {
    maquinaComponenteController.deletarMaquinaComponente(req, res);
});

module.exports = router;