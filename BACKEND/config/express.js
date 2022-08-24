const express = require("express");
const routes_aluno = require("../app/route/alunos.route");

module.exports = function(){
    let app = express();
    app.set("port", 3000);
    routes_aluno(app);
    app.use(express.static("./public"))
    return app;
}