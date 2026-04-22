// --- CARRUSEL DE LA HOME (VERSIÓ ANTI-CACHÉ) ---

const imagenesHome = ["home1", "home2", "home3"];
let posicionActual = 0;

const imagenPrincipal = document.getElementById("carrusel-img");
const fuenteWebp = document.getElementById("carrusel-source");

function pasarFoto() {
    posicionActual++;

    if (posicionActual >= imagenesHome.length) {
        posicionActual = 0;
    }

    // Creem una marca de temps per a "enganyar" al navegador
    // Això fa que el mòbil pense que és una foto nova cada vegada
    const v = "?v=" + new Date().getTime();

    if (imagenPrincipal) {
        imagenPrincipal.src = "carrusel/" + imagenesHome[posicionActual] + ".jpg" + v;
    }

    if (fuenteWebp) {
        fuenteWebp.srcset = "carrusel/" + imagenesHome[posicionActual] + ".webp" + v;
    }
    
    console.log("Cambiando a: " + imagenesHome[posicionActual]);
}

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