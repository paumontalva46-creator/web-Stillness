//  CARRUSEL DE LA HOME 

// 1. Creo un array con los nombres de las fotos (sin la extensión)
// He revisado que los nombres coincidan exactamente con los archivos de la carpeta
const imagenesHome = ["home1", "home2", "home3"];

// 2. Variable tipo 'let' para saber en qué imagen estamos empezando 
let posicionActual = 0;

// 3. Selecciono los elementos del HTML por su ID para poder cambiarlos luego
const imagenPrincipal = document.getElementById("carrusel-img");
const fuenteWebp = document.getElementById("carrusel-source");

// 4. Función que se encarga de ir pasando las fotos
function pasarFoto() {
    // Sumo uno a la posición para ir a la siguiente imagen
    posicionActual++;

    // Control de seguridad: Si llego al final del array, vuelvo a la primera
    if (posicionActual >= imagenesHome.length) {
        posicionActual = 0;
    }

    // 5. Cambio las rutas de los archivos usando el nombre que toca según el indice
    // Actualizo el .jpg para que se vea en todos los navegadores y móviles, EN ESTA PARTE DE CAMBIAR LAS RUTAS E TENIDO AYUDA DE LA IA, DADO QUE DESPUES DE HACERLO YO, ME FUNCIONAVA EN DESKOPT PERO NO EN MOVIL
    if (imagenPrincipal) {
        imagenPrincipal.src = "carrusel/" + imagenesHome[posicionActual] + ".jpg";
    }

    // Tambien actualizo el .webp para que en ordenadores cargue la versión optimizada
    if (fuenteWebp) {
        fuenteWebp.srcset = "carrusel/" + imagenesHome[posicionActual] + ".webp";
    }
}

// 6. Activo el temporizador para que la función se ejecute sola cada 3 segundos
setInterval(pasarFoto, 3000);



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