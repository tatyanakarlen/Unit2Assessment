let todosModel = require('../models/todos-model.js');


function index(req,res) {
    let toDos = todosModel.getAll()
    res.render('index.ejs', {
        toDos: toDos
    })
}

function create(req,res) {
    console.log('form data', req.body)
    let obj = {
        id: Math.random().toString(), 
        todo: req.body.newtodo, 
        done: false
    }
    todosModel.create(obj)
    res.redirect('/todos')
}



module.exports = {
    index, 
    create
}
