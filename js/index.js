// CARRUSEL del HOME 

// 1. Definimos las imágenes que tenemos en la carpeta 'carrusel'
// He usado WebP y JPG para que la web cargue rápido en cualquier dispositivo
const imagenesHome = ["home1", "home2", "home3"];
let posicionActual = 0;

// 2. Guardamos los elementos del HTML para poder manipularlos
const imagenPrincipal = document.getElementById("carrusel-img");
const fuenteWebp = document.getElementById("carrusel-source");

function pasarFoto() {
    // 3. CONTROL DE DISPOSITIVO:
    // Si la pantalla es pequeña (móvil), detenemos la función aquí.
    // He decidido dejar la imagen fija en móviles porque estuve teniendo muchos problemas al final, de hecho este codigo esta hecho como 11 veces, esta parte de window con ayuda de la IA
    if (window.innerWidth < 800) {
        return; 
    }

    // 4. Sumamos 1 a la imagen de partida
    posicionActual++;

    // Si llegamos al final del array, volvemos a la primera imagen
    if (posicionActual >= imagenesHome.length) {
        posicionActual = 0;
    }

    // 5. Actualizamos las rutas de las imágenes 
    if (imagenPrincipal) {
        imagenPrincipal.src = "carrusel/" + imagenesHome[posicionActual] + ".jpg";
    }

    if (fuenteWebp) {
        fuenteWebp.srcset = "carrusel/" + imagenesHome[posicionActual] + ".webp";
    }
}

// 6. Ejecutamos la función cada 3 segundos (3000 milisegundos)
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