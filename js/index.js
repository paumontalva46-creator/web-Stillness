

//CARRUSEL HOME


// 1. Hacemos un array con las imagenes primero 
const imatges = [
    "home1", // La que esta ahora
    "home2", // La que falta
    "home3"  // La que falta
];

// 2. Creo una variable para empezar por la 0
let index = 0;

// 3. Entro y cojo mis dos elementos de mi picture
const imatgeElement = document.getElementById("carrusel-img");
const sourceElement = document.getElementById("carrusel-source");

// 4. Y empiezo una función en la que le digo a index, que seria en este caso la posicion 0 del array, que le voy a sumar 1
function canviarImatge() {
    
    index++;

    // y que si llega al final de la lista que vuelva a 0
    if (index >= imatges.length) {
        index = 0;
    }

    // y ya cambio las rutas de las imagenes
    
    sourceElement.srcset = `carrusel/${imatges[index]}.webp`;
    imatgeElement.src = `carrusel/${imatges[index]}.jpg`;
}

// 5. Por último le digo cada cuanto tiene que hacer el cambio.
setInterval(canviarImatge, 3000);