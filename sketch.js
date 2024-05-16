let manchas = [];
let layer = [];
let anchoImagen, altoImagen;
let clickCount = 0; // Contador de clics
let moveManchas = false; // Variable para controlar el movimiento de las manchas
let yOffsets = [0, 0, 0, 0]; // Desplazamientos verticales para cada capa

function preload() {
  for (let i = 0; i < 20; i++) {
    let nombre = "imagenes/mancha" + nf(i, 2) + ".png";
    manchas[i] = loadImage(nombre);
  }
}

function setup() {
  createCanvas(1360, 765);
  colorMode(HSB, 255, 255, 255, 255);
  background(220);

  // Crear las capas de gráficos
  for (let i = 0; i < 4; i++) {
    layer[i] = createGraphics(1360, 765);
  }

  // Redimensionar todas las imágenes
  anchoImagen = width / 5;
  altoImagen = height;
}

function draw() {
  // Limpiar las capas
  for (let i = 0; i < 4; i++) {
    layer[i].clear();
   
}

  // Dibujar las imágenes en cada capa y aplicar tint inicial
  for (let i = 0; i < 4; i++) {
    let x = 0;
    let y = yOffsets[i]; // Inicializar el desplazamiento vertical para la capa actual
    for (let j = 0; j < 5; j++) {
      let imagen = manchas[i * 5 + j];
      if (moveManchas) {
        // Mover las manchas en función del tiempo
        y += 5 * sin(frameCount * 0.2);
        x -= 5 * sin(frameCount * 0.05);
      }
      
      // Aplicar tint para cada capa
      if (i === 1) {
        if (clickCount % 2 === 0) {
          let valueCapa2 = map(mouseY, 0, height, 60, 0);
          layer[i].tint(valueCapa2, 255); // Tint de la capa 2
        } else {
          let aclararCapa2 = map(mouseY, 0, height, 120, 60);
          layer[i].tint(color(20, 255, aclararCapa2, 255)); // Tint de la capa 3 en marrón
        }
      } else if (i === 2) {
        if (clickCount % 2 === 0) {
          layer[i].tint(color(38, 165, 255, 255)); // Tint de la capa 3 en amarillo
        } else {
          layer[i].tint(color(42, 165, 190, 255)); // Tint de la capa 3 en mostaza
        }
      } else if (i === 3) {
         if (clickCount % 2 === 0) {
          let valorCapa4 = map(mouseY, 0, height, 200, 100);
          layer[i].tint(color(170, 185, valorCapa4, 255)); // Tint de la capa 4 en azul
        } else {
          let aclararCapa2 = map(mouseY, 0, height, 255, 200);
          layer[i].tint(color(170, aclararCapa2, 255, 255)); // Tint de la capa 3 en marrón
        }
      }
      
      layer[i].image(imagen, x + 60, y + 30); // Aplicar desplazamiento vertical
      x += anchoImagen;
    }
  }

  // Dibujar las capas en el lienzo principal
  for (let i = 0; i < 4; i++) {
    image(layer[i], 0, 0);
  }

  // Actualizar el tint de la primera capa según la posición del mouse
  let mouseGray = map(mouseX, 0, width, 70, 150);
  for (let j = 0; j < 5; j++) {
    let imagen = manchas[j];
    layer[0].tint(mouseGray); // Cambiar el tint de la primera capa según la posición del mouse
    layer[0].image(imagen, j * anchoImagen + 60, 30);
  }
}

// Función para detectar clics en cualquier lugar
function mouseClicked() {
  // Incrementar el contador de clics
  clickCount++;
  // Cambiar el color azul de las manchas en la capa 3 gradualmente al hacer clic
  if (clickCount % 2 === 0) { // Si el contador de clics es par, cambiar a marrón
    for (let j = 0; j < 5; j++) {
      let imagen = manchas[10 + j];
      imagen.loadPixels();
      for (let i = 0; i < imagen.pixels.length; i += 4) {
        let r = imagen.pixels[i];
        let g = imagen.pixels[i + 1];
        let b = imagen.pixels[i + 2];
        if (r === 170 && g === 255 && b === 255) { // Verificar si el color es azul
          imagen.pixels[i] = lerp(imagen.pixels[i], 42, 0.33); // Cambiar gradualmente el componente rojo a marrón
          imagen.pixels[i + 1] = lerp(imagen.pixels[i + 1], 42, 0.33); // Cambiar gradualmente el componente verde a marrón
          imagen.pixels[i + 2] = lerp(imagen.pixels[i + 2], 0, 0.33); // Cambiar gradualmente el componente azul a marrón
        }
      }
      imagen.updatePixels();
      image(imagen, j * anchoImagen + 60, 30);
    }
  } else { // Si el contador de clics es impar, volver al azul
    for (let j = 0; j < 5; j++) {
      let imagen = manchas[10 + j];
      imagen.loadPixels();
      for (let i = 0; i < imagen.pixels.length; i += 4) {
        let r = imagen.pixels[i];
        let g = imagen.pixels[i + 1];
        let b = imagen.pixels[i + 2];
        if (r === 42 && g === 255 && b === 255) { // Verificar si el color es marrón
          imagen.pixels[i] = lerp(imagen.pixels[i], 170, 0.33); // Cambiar gradualmente el componente rojo al valor original
          imagen.pixels[i + 1] = lerp(imagen.pixels[i + 1], 255, 0.33); // Cambiar gradualmente el componente verde al valor original
          imagen.pixels[i + 2] = lerp(imagen.pixels[i + 2], 255, 0.33); // Cambiar gradualmente el componente azul al valor original
        }
      }
      imagen.updatePixels();
      image(imagen, j * anchoImagen + 60, 30);
    }
  }
  moveManchas = true; // Activar el movimiento de las manchas cuando se hace clic
}
