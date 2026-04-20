

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




 //IMAGEN ETIQUETA PARA CADA PROJECT


 //Primero selecciono los enlaces que estan dentro del project item

document.addEventListener("DOMContentLoaded", () => {
   
    const links = document.querySelectorAll('.Project-item a');
    
    // Despues selecciono el conteedor que hará de fondo
    const contenedor = document.querySelector('.Main-works');

    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            //le aplicamos un addeventlistener a cada link y cogemos la ruta que hemos puesto antes , en este caso me ayudé de la ia
            const rutaImagen = link.getAttribute('data-img');
            
            console.log("Canviant fons a: " + rutaImagen); // Para poder verlo en la consola
            
            if (rutaImagen) {
                contenedor.style.backgroundImage = `url('${rutaImagen}')`;
                contenedor.style.backgroundSize = 'cover';
                contenedor.style.backgroundPosition = 'center';
                contenedor.style.backgroundAttachment = 'fixed'; 
            }
        });
                  
        //Aqui me ayude de la ia porque queria hacer que cuando no estuviera el raton encima no huviera ninguna foto
        link.addEventListener('mouseleave', () => {
            
            contenedor.style.backgroundImage = 'none';
        });
    });
});