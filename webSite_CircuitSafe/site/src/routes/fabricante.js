var express = require("express");
var router = express.Router();

var fabricanteController = require("../controllers/fabricanteController");

router.get("/buscar/:id", function (req, res) {
    fabricanteController.buscarPorId(req, res);
});

router.get("/listar", function (req, res) {
    fabricanteController.listar(req, res);
});

router.post("/cadastrar", function (req, res) {
    fabricanteController.cadastrar(req, res);
});

module.exports = router;