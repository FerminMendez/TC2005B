const users = [
    {
        username: "aaa",
        password: "123"
    },
    {
        username: "abc",
        password: "321"
    }
];

// Abria que poner un require del util

module.exports = class User {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_username, nuevo_passw) {
        this.uasername = nuevo_nombre;
        this.password = nuevo_passw;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        users.push(this);
        console.log(users);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return users;
    }

}