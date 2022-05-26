let toDos = []

function create(incoming_obj) {
    toDos.push(incoming_obj)
    console.log(toDos)
}

function getAll() {
    return toDos
}


// function getAll() {
//     return users;
// }

module.exports = {
    create, 
    getAll
}