const express = require("express");
const server = express();
const nunjucks = require("nunjucks");
const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require("./pages");

//configurar nunjucks
nunjucks.configure("src/views", {
    express: server,
    noCache:true,
})

server
//receber dados do req
.use(express.urlencoded({ extended: true}))
//configurar arquivos estáticos(css, script, imagens)
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500);
