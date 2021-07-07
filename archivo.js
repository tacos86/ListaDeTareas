cartaElegidaPrimero = prompt('Elija un número de carta del 1 al 10');
console.log(cartaElegidaPrimero);

cartaElegidaSegundo = prompt('Elija otra carta del 1 al 10');
console.log(cartaElegidaSegundo)
    
if (cartaElegidaPrimero === cartaElegidaSegundo) {
    alert('Iguales! Ganaste')
    
} else {
    alert(`No hubo coincidencia Segui participando`
    )
}

//Constructor para las cartas del memotest
class carta{
    constructor(id,tipo,descripcion){
        this.id=id;
        this.tipo=tipo;
        this.descripcion=descripcion;
}
}

const uno = new carta (1, "imagen", "imagen de un chanchito");
const dos = new carta (2, "palabra", "pig");
const tres = new carta (3, "imagen", "imagen de un sol");
const cuatro = new carta (4, "palabra", "sun"); 
const cinco = new carta (5, "imagen", "imagen de un perro");
const seis = new carta (6, "palabra", "dog");
const siete = new carta (7, "imagen", "imagen de una gorra");
const ocho = new carta (8, "palabra", "cap");
const nueve = new carta (9, "imagen", "imagen de un tren");
const diez = new carta (10, "palabra", "train");
const once = new carta (11, "imagen", "imagen de un gato");
const doce = new carta (12, "palabra", "cat");
//console.log(uno);

let juego = [uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez, once, doce];
//console.log(juego);

let descripcionCartaElegidaPrimero = juego.filter(carta => carta.id == cartaElegidaPrimero);
    console.log(descripcionCartaElegidaPrimero);

    let descripcionCartaElegidaSegundo = juego.filter(carta => carta.id == cartaElegidaSegundo);
    console.log(descripcionCartaElegidaSegundo);
