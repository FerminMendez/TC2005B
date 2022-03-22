const animes = [
    {
        nombre: "Fairy tail",
        imagen: '"https://tierragamer.com/wp-content/uploads/2019/09/Fairy-Tail-Temporada-Final.jpg"'
    },
    {
        nombre: "Demon slayer",
        imagen: '"https://i.blogs.es/54d36e/demon-slayer-segunda-temporada-arco-del-distrito-entretenimiento-estreno-5-diciembre-crunchyroll-funimation/1366_2000.jpg"'
    },
    {
        nombre: "Seven deadly sins",
        imagen: '"https://i.blogs.es/46a41a/the-seven-deadly-sins-knights-of-britannia_20180206160241_1/450_1000.jpg"'
    }
];

// Abria que poner un require del util

module.exports = class Anime {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_nombre, nueva_imagen) {
        this.nombre = nuevo_nombre;
        this.imagen = nueva_imagen;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        animes.push(this);
        console.log(animes);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return animes;
    }

}