let alunos = [
    {
        id: 1,
        nome:"Marília",
        ira: 3000
    },
    {
        id: 2,
        nome: "João",
        ira: 5000
    },
    {
        id:3,
        nome: "Maria",
        ira: 7000
    }
]

module.exports.obterAlunos = function(req, res){
    res.json(alunos);
}

//jeito mais simples e entendivel do let que está abaixo:
// module.exports.obterAlunos = function(req, res){
//     let id = req.params.id;
//     for(let i=0; i<alunos.length; i++){
//         if(alunos[i].id == id){
//             aluno_procurado = alunos[i];
//         }
//     }
// }

module.exports.obterAlunos = function(req, res){
    let aluno_procurado = alunos.find(aluno=>(aluno.id==id));

    if (aluno_procurado==null){
        res.status(404).json({"mensagem":"aluno nao encontrado"})
    }else{
        res.status(200).json(aluno_procurado);
    }
}