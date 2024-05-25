var express = require("express");
var router = express.Router();

var registroRecursoController = require("../controllers/registroRecursoController");

router.post("/criar", function (req, res) {
    registroRecursoController.criarRegistroRecurso(req, res);
});

router.get("/listar", function (req, res) {
    registroRecursoController.listarRegistrosRecursos(req, res);
});

router.put("/atualizar", function (req, res) {
    registroRecursoController.atualizarRegistroRecurso(req, res);
});

router.delete("/deletar", function (req, res) {
    registroRecursoController.deletarRegistroRecurso(req, res);
});

module.exports = router;