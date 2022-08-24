const controller = require("../controller/alunos.controller");

module.exports = function(app){
    app.get("/alunos", controller.obterAlunos);
    
    // GET /alunos/123 
    app.get("/alunos/:id", controller.obterAluno);
}