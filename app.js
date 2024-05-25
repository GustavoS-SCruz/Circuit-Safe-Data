process.env.AMBIENTE_PROCESSO = "desenvolvimento";

var express = require("express");
var app = express();
const path = require('path');
var cors = require("cors");
var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3333 : 8080;

var indexRouter = require("./src/routes/tipo");
var usuarioRouter = require("./src/routes/usuarios");
var avisosRouter = require("./src/routes/registroRecurso");
var medidasRouter = require("./src/routes/unidadeMedidas");
var maquinaRouter = require("./src/routes/maquina");
var empresasRouter = require("./src/routes/registroManutencao");
var componenteRouter = require("./src/routes/componente");
var fabricanteRouter = require("./src/routes/fabricante"); 
var empresaRouter = require("./src/routes/empresa"); 

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/avisos", avisosRouter);
app.use("/medidas", medidasRouter);
app.use("/maquinas", maquinaRouter);
app.use("/empresas", empresasRouter);
app.use("/componentes", componenteRouter);
app.use("/fabricantes", fabricanteRouter); 
app.use("/empresas", empresaRouter); 

app.listen(PORTA, function () {
    console.log(`Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://localhost:${PORTA} \n
    Você está rodando sua aplicação em Ambiente de ${process.env.AMBIENTE_PROCESSO} \n
    \t\tSe "desenvolvimento", você está se conectando ao banco LOCAL (MySQL Workbench). \n
    \t\tSe "producao", você está se conectando ao banco REMOTO (SQL Server em nuvem Azure) \n
    \t\t\t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'`);
});