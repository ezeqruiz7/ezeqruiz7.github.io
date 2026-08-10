// ============================================================
// HERENCIA
// ============================================================
// 01 - Grilla Bauhaus
// 02 - Herencia Bauhaus
// 03 - Forma / Color según mouse
// 04 - Figuras por tipo y color
// 05 - Arrastre por familias
// 06 - Figuras ocultas
// 07 - Atracción hacia el mouse
// 08 - Círculo + triángulo + cuadrados
// 09 - Círculo grande + círculos que lo siguen y absorbe
// ============================================================


// ============================================================
// EXPERIMENTO ACTUAL
// ============================================================

let actual = 1;

const titulosExperiencias = [
  "Memoria",
  "Herencia",
  "Caducidad",
  "Identidad",
  "Empatia",
  "Incertidumbre",
  "Expectativa",
  "Ansiedad",
  "Colaboracion"
];
// ============================================================
// CANVAS
// ============================================================

let miCanvas;


// ============================================================
// PALETA GENERAL
// ============================================================

const CREMA = "#efe9d8";
const ROJO = "#d22d23";
const AMARILLO = "#f0b419";
const AZUL = "#234b91";
const NEGRO = "#191815";


// ============================================================
// CÓDIGO 1
// ============================================================

let circulos = [];

let ultimoClick = 0;

const duracion = 3000;

const columnas = 8;
const filas = 5;

let espacioX;
let espacioY;

const margenX = 40;
const margenY = 80;


// ============================================================
// CÓDIGO 2
// ============================================================

let individuos = [];
let conexiones = [];
let nacimientos = [];

let individuoActual = null;

let estado = 0;

let tiempoAnimacion = 0;

const duracionLineas = 3.0;

const fondoBauhaus = "#f5f2e8";

const colores = [
  "#d2322d",
  "#235a91",
  "#ebb428",
  "#237d55",
  "#d74b7d"
];


// ============================================================
// CÓDIGO 3
// ============================================================

let posX3;
let posY3;

const tamano3 = 120;

let colorActual3 = 0;


// ============================================================
// CÓDIGO 4
// ============================================================

let figuras4 = [];

let figuraPresionada4 = null;

const delayResaltado4 = 180;


// ============================================================
// CÓDIGO 5
// ============================================================

let figuras5 = [];

let figuraAgarrada5 = null;

let mouseAnteriorX5;
let mouseAnteriorY5;


// ============================================================
// CÓDIGO 6
// ============================================================

let figuras6 = [];

const cantidadFiguras6 = 35;

const radioMouse6 = 35;

const distanciaRevelado6 = 130;


// ============================================================
// CÓDIGO 7
// ============================================================

let figuras7 = [];

const cantidadFiguras7 = 35;

let sistemaActivado7 = false;

let atrayendo7 = false;

const velocidadAtraccion7 = 0.003;
const velocidadRegreso7 = 0.025;


// ============================================================
// CÓDIGO 8
// ============================================================

// CÍRCULO AZUL

let circuloX8;
let circuloY8;

const radioCirculo8 = 30;


// TRIÁNGULO AMARILLO

let trianguloX8;
let trianguloY8;

let origenTrianguloX8;
let origenTrianguloY8;

const radioTriangulo8 = 45;

const distanciaSegura8 = 105;

const velocidadEscape8 = 2.5;


// CUADRADOS ROJOS

let cuadrados8 = [];


// ============================================================
// CÓDIGO 9
// ============================================================

// CÍRCULO GRANDE

let circuloX9;
let circuloY9;

let radioCirculo9 = 45;

let radioObjetivo9 = 45;

let velocidad9 = 0.025;

const velocidadMaxima9 = 0.15;

const aumentoVelocidad9 = 0.015;

const aumentoRadio9 = 7;


// FIGURAS

let figuras9 = [];


// ============================================================
// SETUP
// ============================================================

function setup() {

  crearCanvasActual();

  inicializarActual();

  ultimoClick = millis();

  actualizarBotones();

}


// ============================================================
// CREAR CANVAS
// ============================================================

function crearCanvasActual() {

  if (miCanvas) {
    miCanvas.remove();
  }

  if (
    actual === 8 ||
    actual === 9
  ) {

    miCanvas = createCanvas(
      700,
      530
    );

  } else {

    miCanvas = createCanvas(
      700,
      530
    );

  }

  miCanvas.parent("sketch");

}


// ============================================================
// DRAW
// ============================================================

function draw() {

  if (actual === 1) {

    dibujarCodigo1();

  }

  else if (actual === 2) {

    dibujarCodigo2();

  }

  else if (actual === 3) {

    dibujarCodigo3();

  }

  else if (actual === 4) {

    dibujarCodigo4();

  }

  else if (actual === 5) {

    dibujarCodigo5();

  }

  else if (actual === 6) {

    dibujarCodigo6();

  }

  else if (actual === 7) {

    dibujarCodigo7();

  }

  else if (actual === 8) {

    dibujarCodigo8();

  }

  else if (actual === 9) {

    dibujarCodigo9();

  }

}


// ============================================================
// CAMBIAR EXPERIMENTO
// ============================================================

function cambiar(numero) {

  if (actual === numero) {
    return;
  }

  actual = numero;

  circulos = [];

  individuos = [];
  conexiones = [];
  nacimientos = [];
  individuoActual = null;

  figuras4 = [];
  figuraPresionada4 = null;

  figuras5 = [];
  figuraAgarrada5 = null;

  figuras6 = [];

  figuras7 = [];
  sistemaActivado7 = false;
  atrayendo7 = false;

  cuadrados8 = [];

  figuras9 = [];

  estado = 0;

  tiempoAnimacion = 0;

  ultimoClick = millis();

  crearCanvasActual();

  inicializarActual();

  actualizarBotones();

}


// ============================================================
// INICIALIZAR
// ============================================================

function inicializarActual() {

  if (actual === 1) {

    espacioX =
      (width - margenX * 2) /
      (columnas - 1);

    espacioY =
      (height - margenY * 2) /
      (filas - 1);

  }

  else if (actual === 3) {

    posX3 = width / 2;
    posY3 = height / 2;

    colorActual3 = 0;

  }

  else if (actual === 4) {

    generarFiguras4();

  }

  else if (actual === 5) {

    generarFiguras5();

  }

  else if (actual === 6) {

    generarFiguras6();

  }

  else if (actual === 7) {

    generarFiguras7();

  }

  else if (actual === 8) {

    inicializarCodigo8();

  }

  else if (actual === 9) {

    inicializarCodigo9();

  }

}


// ============================================================
// BOTONES
// ============================================================

function actualizarBotones() {

  for (
    let i = 1;
    i <= 9;
    i++
  ) {

    const boton =
      document.getElementById(
        "btn" + i
      );

    if (boton) {

      boton.classList.toggle(
        "activo",
        actual === i
      );

    }

  }
 const titulo =
  document.getElementById("tituloExperiencia");

 if (titulo) {

  titulo.textContent =
    titulosExperiencias[actual - 1];

 }
}


for (
  let i = 1;
  i <= 9;
  i++
) {

  const boton =
    document.getElementById(
      "btn" + i
    );

  if (boton) {

    boton.addEventListener(
      "click",
      function () {

        cambiar(i);

      }
    );

  }

}


// ============================================================
// ============================================================
// CÓDIGO 1
// ============================================================
// ============================================================

function dibujarCodigo1() {

  background(CREMA);

  const tiempo =
    millis() - ultimoClick;

  let alpha;

  if (tiempo < duracion) {

    alpha =
      map(
        tiempo,
        0,
        duracion,
        255,
        0
      );

  }

  else {

    alpha = 0;

  }

  for (
    let i = 0;
    i < circulos.length;
    i++
  ) {

    circulos[i].mostrar(alpha);

  }

}


// ============================================================
// MOUSE CÓDIGO 1
// ============================================================

function clickCodigo1() {

  const columna =
    constrain(
      round(
        (mouseX - margenX) /
        espacioX
      ),
      0,
      columnas - 1
    );

  const fila =
    constrain(
      round(
        (mouseY - margenY) /
        espacioY
      ),
      0,
      filas - 1
    );

  const x =
    margenX +
    columna * espacioX;

  const y =
    margenY +
    fila * espacioY;

  circulos.push(
    new Circulo1(x, y)
  );

  ultimoClick = millis();

}


// ============================================================
// CLASE CÍRCULO 1
// ============================================================

class Circulo1 {

  constructor(x, y) {

    this.x = x;
    this.y = y;

    const opcion =
      floor(random(3));

    if (opcion === 0) {
      this.colorCirculo = ROJO;
    }

    if (opcion === 1) {
      this.colorCirculo = AMARILLO;
    }

    if (opcion === 2) {
      this.colorCirculo = AZUL;
    }

    this.velocidad =
      random(0.01, 0.02);

    this.fase =
      random(TWO_PI);

  }

  mostrar(alpha) {

    if (alpha <= 0) {
      return;
    }

    push();

    translate(
      this.x,
      this.y
    );

    noStroke();

    fill(this.colorCirculo);

    drawingContext.globalAlpha =
      alpha / 255;

    ellipse(
      0,
      0,
      88,
      88
    );

    const movimiento =
      sin(
        frameCount *
        this.velocidad +
        this.fase
      );

    stroke(CREMA);

    strokeWeight(2);

    const largo =
      map(
        movimiento,
        -1,
        1,
        8,
        18
      );

    line(
      -largo,
      0,
      largo,
      0
    );

    drawingContext.globalAlpha = 1;

    pop();

  }

}


// ============================================================
// ============================================================
// CÓDIGO 2
// ============================================================
// ============================================================

function dibujarCodigo2() {

  background(CREMA);

  if (estado === 2) {

    tiempoAnimacion +=
      deltaTime / 1000;

    actualizarAnimacion();

  }

  for (
    let i = 0;
    i < conexiones.length;
    i++
  ) {

    conexiones[i].dibujar();

  }

  for (
    let i = 0;
    i < individuos.length;
    i++
  ) {

    individuos[i].dibujar();

  }

  for (
    let i = nacimientos.length - 1;
    i >= 0;
    i--
  ) {

    const n =
      nacimientos[i];

    n.actualizar();

    n.dibujar();

    if (n.termino) {

      nacimientos.splice(
        i,
        1
      );

    }

  }

}


// ============================================================
// CÓDIGO 2 — CLICK
// ============================================================

function clickCodigo2() {

  if (estado === 2) {
    return;
  }

  if (estado === 0) {

    if (
      posicionDisponible(
        mouseX,
        mouseY
      )
    ) {

      individuoActual =
        crearIndividuo(
          mouseX,
          mouseY,
          1
        );

      estado = 1;

    }

    return;

  }

  if (estado === 1) {

    if (
      posicionDisponible(
        mouseX,
        mouseY
      )
    ) {

      const segundo =
        crearIndividuo(
          mouseX,
          mouseY,
          1
        );

      iniciarUnion(
        individuoActual,
        segundo
      );

      estado = 2;

      tiempoAnimacion = 0;

    }

    return;

  }

  if (estado === 3) {

    if (
      posicionDisponible(
        mouseX,
        mouseY
      )
    ) {

      const nuevo =
        crearIndividuo(
          mouseX,
          mouseY,
          1
        );

      iniciarUnion(
        individuoActual,
        nuevo
      );

      estado = 2;

      tiempoAnimacion = 0;

    }

    return;

  }

}


// ============================================================
// POSICIÓN DISPONIBLE
// ============================================================

function posicionDisponible(x, y) {

  const distanciaMinima = 80;

  for (
    let i = 0;
    i < individuos.length;
    i++
  ) {

    const distancia =
      dist(
        x,
        y,
        individuos[i].x,
        individuos[i].y
      );

    if (
      distancia <
      distanciaMinima
    ) {

      return false;

    }

  }

  const radio = 34;

  if (x - radio < 0) {
    return false;
  }

  if (x + radio > width) {
    return false;
  }

  if (y - radio < 0) {
    return false;
  }

  if (y + radio > height) {
    return false;
  }

  return true;

}


// ============================================================
// CREAR INDIVIDUO
// ============================================================

function crearIndividuo(
  x,
  y,
  generacion
) {

  const c =
    random(colores);

  const nuevo =
    new Individuo2(
      x,
      y,
      c,
      generacion
    );

  individuos.push(nuevo);

  return nuevo;

}


// ============================================================
// INICIAR UNIÓN
// ============================================================

function iniciarUnion(a, b) {

  const hijoX =
    (a.x + b.x) / 2;

  const hijoY =
    (a.y + b.y) / 2;

  conexiones.push(
    new Conexion2(
      a.x,
      a.y,
      hijoX,
      hijoY
    )
  );

  conexiones.push(
    new Conexion2(
      b.x,
      b.y,
      hijoX,
      hijoY
    )
  );

}


// ============================================================
// ACTUALIZAR ANIMACIÓN
// ============================================================

function actualizarAnimacion() {

  let progreso =
    constrain(
      tiempoAnimacion /
      duracionLineas,
      0,
      1
    );

  progreso =
    easeInOut(
      progreso
    );

  const ultima =
    conexiones.length - 1;

  const anterior =
    conexiones.length - 2;

  if (anterior >= 0) {

    conexiones[anterior].progreso =
      progreso;

  }

  if (ultima >= 0) {

    conexiones[ultima].progreso =
      progreso;

  }

  if (progreso >= 1) {

    crearHijo();

    estado = 3;

  }

}


// ============================================================
// CREAR HIJO
// ============================================================

function crearHijo() {

  const padre =
    individuos[
      individuos.length - 2
    ];

  const madre =
    individuos[
      individuos.length - 1
    ];

  const hijoX =
    (padre.x + madre.x) / 2;

  const hijoY =
    (padre.y + madre.y) / 2;

  const colorHijo =
    mezclarColores(
      padre.c,
      madre.c
    );

  const nuevaGeneracion =
    max(
      padre.generacion,
      madre.generacion
    ) + 1;

  const hijo =
    new Individuo2(
      hijoX,
      hijoY,
      colorHijo,
      nuevaGeneracion
    );

  hijo.escala = 0;

  individuos.push(hijo);

  individuoActual = hijo;

  nacimientos.push(
    new Nacimiento2(
      hijo,
      padre.c,
      madre.c
    )
  );

}


// ============================================================
// MEZCLAR COLORES
// ============================================================

function mezclarColores(a, b) {

  const ca = color(a);
  const cb = color(b);

  return color(

    (
      red(ca) +
      red(cb)
    ) / 2,

    (
      green(ca) +
      green(cb)
    ) / 2,

    (
      blue(ca) +
      blue(cb)
    ) / 2

  );

}


// ============================================================
// EASING
// ============================================================

function easeInOut(x) {

  return (
    x *
    x *
    (
      3 -
      2 * x
    )
  );

}


// ============================================================
// CLASE INDIVIDUO 2
// ============================================================

class Individuo2 {

  constructor(
    x,
    y,
    c,
    generacion
  ) {

    this.x = x;
    this.y = y;

    this.c = c;

    this.generacion =
      generacion;

    this.radio = 34;

    this.escala = 1;

  }

  dibujar() {

    push();

    translate(
      this.x,
      this.y
    );

    scale(
      this.escala
    );

    stroke(NEGRO);

    strokeWeight(8);

    fill(this.c);

    ellipse(
      0,
      0,
      this.radio * 2,
      this.radio * 2
    );

    pop();

  }

}


// ============================================================
// CLASE CONEXIÓN 2
// ============================================================

class Conexion2 {

  constructor(
    x1,
    y1,
    x2,
    y2
  ) {

    this.x1 = x1;
    this.y1 = y1;

    this.x2 = x2;
    this.y2 = y2;

    this.progreso = 0;

  }

  dibujar() {

    if (this.progreso <= 0) {
      return;
    }

    const actualX =
      lerp(
        this.x1,
        this.x2,
        this.progreso
      );

    const actualY =
      lerp(
        this.y1,
        this.y2,
        this.progreso
      );

    stroke(NEGRO);

    strokeWeight(8);

    line(
      this.x1,
      this.y1,
      actualX,
      actualY
    );

  }

}


// ============================================================
// CLASE NACIMIENTO 2
// ============================================================

class Nacimiento2 {

  constructor(
    hijo,
    c1,
    c2
  ) {

    this.hijo = hijo;

    this.c1 = c1;

    this.c2 = c2;

    this.progreso = 0;

    this.termino = false;

  }

  actualizar() {

    this.progreso +=
      0.025;

    if (
      this.progreso >= 1
    ) {

      this.progreso = 1;

      this.termino = true;

    }

    const suave =
      easeInOut(
        this.progreso
      );

    this.hijo.escala =
      suave;

  }

  dibujar() {

    if (
      this.progreso >= 1
    ) {

      return;

    }

    const expansion =
      sin(
        this.progreso * PI
      ) * 45;

    noFill();

    stroke(this.c1);

    strokeWeight(4);

    ellipse(
      this.hijo.x,
      this.hijo.y,
      70 + expansion,
      70 + expansion
    );

    stroke(this.c2);

    ellipse(
      this.hijo.x,
      this.hijo.y,
      45 + expansion,
      45 + expansion
    );

  }

}


// ============================================================
// ============================================================
// CÓDIGO 3
// ============================================================
// ============================================================

function dibujarCodigo3() {

  background(30);

  const x =
    map(
      mouseX,
      0,
      width,
      0,
      100
    );

  const y =
    map(
      mouseY,
      0,
      height,
      0,
      100
    );

  posX3 = mouseX;
  posY3 = mouseY;

  posX3 =
    constrain(
      posX3,
      tamano3 / 2,
      width - tamano3 / 2
    );

  posY3 =
    constrain(
      posY3,
      tamano3 / 2,
      height - tamano3 / 2
    );

  const amarillo3 =
    color("#EDBA3B");

  const rojo3 =
    color("#B92E2B");

  const azul3 =
    color("#133E73");

  let colorObjetivo;

  if (y < 50) {

    colorObjetivo =
      map(
        y,
        0,
        50,
        0,
        1
      );

  }

  else {

    colorObjetivo =
      map(
        y,
        50,
        100,
        1,
        2
      );

  }

  colorActual3 =
    lerp(
      colorActual3,
      colorObjetivo,
      0.12
    );

  let colorFinal;

  if (colorActual3 < 1) {

    colorFinal =
      lerpColor(
        amarillo3,
        rojo3,
        colorActual3
      );

  }

  else {

    colorFinal =
      lerpColor(
        rojo3,
        azul3,
        colorActual3 - 1
      );

  }

  noStroke();

  fill(colorFinal);

  if (x < 25) {

    rectMode(CENTER);

    rect(
      posX3,
      posY3,
      tamano3,
      tamano3
    );

  }

  else if (x < 75) {

    triangle(

      posX3,
      posY3 - tamano3 / 2,

      posX3 - tamano3 / 2,
      posY3 + tamano3 / 2,

      posX3 + tamano3 / 2,
      posY3 + tamano3 / 2

    );

  }

  else {

    ellipse(
      posX3,
      posY3,
      tamano3,
      tamano3
    );

  }

}


// ============================================================
// ============================================================
// CÓDIGO 4
// ============================================================
// ============================================================

function dibujarCodigo4() {

  background(30);

  for (
    let i = 0;
    i < figuras4.length;
    i++
  ) {

    figuras4[i].mostrar();

  }

}


// ============================================================
// GENERAR FIGURAS 4
// ============================================================

function generarFiguras4() {

  const colores4 = [
    color("#EDBA3B"),
    color("#B92E2B"),
    color("#133E73")
  ];

  const formas4 = [
    "circulo",
    "cuadrado",
    "triangulo"
  ];

  for (
    let i = 0;
    i < formas4.length;
    i++
  ) {

    for (
      let j = 0;
      j < colores4.length;
      j++
    ) {

      let posicionValida = false;

      while (!posicionValida) {

        const x =
          random(
            80,
            width - 80
          );

        const y =
          random(
            80,
            height - 80
          );

        const tam =
          random(
            75,
            105
          );

        const nueva =
          new Figura4(
            x,
            y,
            tam,
            formas4[i],
            colores4[j]
          );

        posicionValida = true;

        for (
          let k = 0;
          k < figuras4.length;
          k++
        ) {

          const f =
            figuras4[k];

          const distancia =
            dist(
              nueva.x,
              nueva.y,
              f.x,
              f.y
            );

          if (
            distancia <
            (
              nueva.tam +
              f.tam
            ) * 0.65
          ) {

            posicionValida = false;

            break;

          }

        }

        if (posicionValida) {

          figuras4.push(nueva);

        }

      }

    }

  }

}


// ============================================================
// MOUSE 4
// ============================================================

function clickCodigo4() {

  figuraPresionada4 = null;

  for (
    let i = figuras4.length - 1;
    i >= 0;
    i--
  ) {

    const f =
      figuras4[i];

    if (
      f.estaDentro(
        mouseX,
        mouseY
      )
    ) {

      figuraPresionada4 = f;

      f.tiempoPresionado =
        millis();

      break;

    }

  }

}


// ============================================================
// CLASE FIGURA 4
// ============================================================

class Figura4 {

  constructor(
    x,
    y,
    tam,
    tipo,
    c
  ) {

    this.x = x;
    this.y = y;

    this.tam = tam;

    this.tipo = tipo;

    this.c = c;

    this.tiempoPresionado = 0;

  }

  mostrar() {

    let resaltar = false;

    if (
      figuraPresionada4 !== null
    ) {

      const terminoDelay =
        millis() -
        figuraPresionada4.tiempoPresionado
        >= delayResaltado4;

      if (
        terminoDelay &&
        this.tipo ===
        figuraPresionada4.tipo
      ) {

        resaltar = true;

      }

    }

    noStroke();

    fill(this.c);

    this.dibujarForma();

    if (resaltar) {

      const bordeClaro =
        aclararColor4(
          this.c,
          35
        );

      noFill();

      stroke(bordeClaro);

      strokeWeight(7);

      this.dibujarForma();

    }

  }

  dibujarForma() {

    if (
      this.tipo ===
      "circulo"
    ) {

      ellipse(
        this.x,
        this.y,
        this.tam,
        this.tam
      );

    }

    else if (
      this.tipo ===
      "cuadrado"
    ) {

      rectMode(CENTER);

      rect(
        this.x,
        this.y,
        this.tam,
        this.tam
      );

    }

    else if (
      this.tipo ===
      "triangulo"
    ) {

      const altura =
        this.tam * 0.9;

      triangle(

        this.x,
        this.y - altura / 2,

        this.x - this.tam / 2,
        this.y + altura / 2,

        this.x + this.tam / 2,
        this.y + altura / 2

      );

    }

  }

  estaDentro(mx, my) {

    if (
      this.tipo ===
      "circulo"
    ) {

      return (
        dist(
          mx,
          my,
          this.x,
          this.y
        ) <
        this.tam / 2
      );

    }

    else if (
      this.tipo ===
      "cuadrado"
    ) {

      return (
        mx >
        this.x - this.tam / 2 &&

        mx <
        this.x + this.tam / 2 &&

        my >
        this.y - this.tam / 2 &&

        my <
        this.y + this.tam / 2
      );

    }

    else if (
      this.tipo ===
      "triangulo"
    ) {

      return (
        mx >
        this.x - this.tam / 2 &&

        mx <
        this.x + this.tam / 2 &&

        my >
        this.y - this.tam / 2 &&

        my <
        this.y + this.tam / 2
      );

    }

    return false;

  }

}


// ============================================================
// ACLARAR COLOR 4
// ============================================================

function aclararColor4(
  original,
  cantidad
) {

  const r =
    min(
      255,
      red(original) + cantidad
    );

  const g =
    min(
      255,
      green(original) + cantidad
    );

  const b =
    min(
      255,
      blue(original) + cantidad
    );

  return color(
    r,
    g,
    b
  );

}


// ============================================================
// ============================================================
// CÓDIGO 5
// ============================================================
// ============================================================

function dibujarCodigo5() {

  background(30);

  if (
    figuraAgarrada5 !== null &&
    mouseIsPressed
  ) {

    const movimientoX =
      mouseX -
      mouseAnteriorX5;

    const movimientoY =
      mouseY -
      mouseAnteriorY5;

    for (
      let i = 0;
      i < figuras5.length;
      i++
    ) {

      const f =
        figuras5[i];

      if (
        f.tipo ===
        figuraAgarrada5.tipo
      ) {

        f.x += movimientoX;
        f.y += movimientoY;

      }

    }

  }

  mouseAnteriorX5 = mouseX;
  mouseAnteriorY5 = mouseY;

  for (
    let i = 0;
    i < figuras5.length;
    i++
  ) {

    figuras5[i].mostrar();

  }

}


// ============================================================
// GENERAR FIGURAS 5
// ============================================================

function generarFiguras5() {

  const colores5 = [
    color("#EDBA3B"),
    color("#B92E2B"),
    color("#133E73")
  ];

  const formas5 = [
    "circulo",
    "cuadrado",
    "triangulo"
  ];

  for (
    let i = 0;
    i < formas5.length;
    i++
  ) {

    for (
      let j = 0;
      j < colores5.length;
      j++
    ) {

      let posicionValida = false;

      while (!posicionValida) {

        const x =
          random(
            80,
            width - 80
          );

        const y =
          random(
            80,
            height - 80
          );

        const tam =
          random(
            75,
            105
          );

        const nueva =
          new Figura5(
            x,
            y,
            tam,
            formas5[i],
            colores5[j]
          );

        posicionValida = true;

        for (
          let k = 0;
          k < figuras5.length;
          k++
        ) {

          const f =
            figuras5[k];

          const distancia =
            dist(
              nueva.x,
              nueva.y,
              f.x,
              f.y
            );

          if (
            distancia <
            (
              nueva.tam +
              f.tam
            ) * 0.65
          ) {

            posicionValida = false;

            break;

          }

        }

        if (posicionValida) {

          figuras5.push(nueva);

        }

      }

    }

  }

}


// ============================================================
// MOUSE 5
// ============================================================

function clickCodigo5() {

  figuraAgarrada5 = null;

  for (
    let i = figuras5.length - 1;
    i >= 0;
    i--
  ) {

    const f =
      figuras5[i];

    if (
      f.estaDentro(
        mouseX,
        mouseY
      )
    ) {

      figuraAgarrada5 = f;

      break;

    }

  }

  mouseAnteriorX5 = mouseX;
  mouseAnteriorY5 = mouseY;

}


// ============================================================
// CLASE FIGURA 5
// ============================================================

class Figura5 {

  constructor(
    x,
    y,
    tam,
    tipo,
    c
  ) {

    this.x = x;
    this.y = y;

    this.tam = tam;

    this.tipo = tipo;

    this.c = c;

  }

  mostrar() {

    noStroke();

    fill(this.c);

    this.dibujarForma();

    if (
      figuraAgarrada5 !== null &&
      figuraAgarrada5.tipo ===
      this.tipo
    ) {

      noFill();

      stroke(
        aclararColor5(
          this.c,
          35
        )
      );

      strokeWeight(6);

      this.dibujarForma();

    }

  }

  dibujarForma() {

    if (
      this.tipo ===
      "circulo"
    ) {

      ellipse(
        this.x,
        this.y,
        this.tam,
        this.tam
      );

    }

    else if (
      this.tipo ===
      "cuadrado"
    ) {

      rectMode(CENTER);

      rect(
        this.x,
        this.y,
        this.tam,
        this.tam
      );

    }

    else if (
      this.tipo ===
      "triangulo"
    ) {

      const altura =
        this.tam * 0.9;

      triangle(

        this.x,
        this.y - altura / 2,

        this.x - this.tam / 2,
        this.y + altura / 2,

        this.x + this.tam / 2,
        this.y + altura / 2

      );

    }

  }

  estaDentro(mx, my) {

    if (
      this.tipo ===
      "circulo"
    ) {

      return (
        dist(
          mx,
          my,
          this.x,
          this.y
        ) <
        this.tam / 2
      );

    }

    else {

      return (
        mx >
        this.x - this.tam / 2 &&

        mx <
        this.x + this.tam / 2 &&

        my >
        this.y - this.tam / 2 &&

        my <
        this.y + this.tam / 2
      );

    }

  }

}


// ============================================================
// ACLARAR COLOR 5
// ============================================================

function aclararColor5(
  original,
  cantidad
) {

  return color(

    min(
      255,
      red(original) + cantidad
    ),

    min(
      255,
      green(original) + cantidad
    ),

    min(
      255,
      blue(original) + cantidad
    )

  );

}


// ============================================================
// ============================================================
// CÓDIGO 6
// ============================================================
// ============================================================

function dibujarCodigo6() {

  background(30);

  for (
    let i = 0;
    i < figuras6.length;
    i++
  ) {

    figuras6[i].mostrar();

  }

  noStroke();

  fill("#B92E2B");

  ellipse(
    mouseX,
    mouseY,
    radioMouse6 * 2,
    radioMouse6 * 2
  );

}


// ============================================================
// GENERAR FIGURAS 6
// ============================================================

function generarFiguras6() {

  let intentosMaximos = 10000;

  let intentos = 0;

  while (
    figuras6.length <
      cantidadFiguras6 &&
    intentos <
      intentosMaximos
  ) {

    intentos++;

    const x =
      random(
        50,
        width - 50
      );

    const y =
      random(
        50,
        height - 50
      );

    const tam =
      random(
        35,
        75
      );

    const tipo =
      floor(
        random(3)
      );

    let c;

    const colorElegido =
      floor(
        random(3)
      );

    if (
      colorElegido === 0
    ) {

      c = "#EDBA3B";

    }

    else if (
      colorElegido === 1
    ) {

      c = "#B92E2B";

    }

    else {

      c = "#133E73";

    }

    const nueva =
      new Figura6(
        x,
        y,
        tam,
        tipo,
        c
      );

    let seSuperpone = false;

    for (
      let i = 0;
      i < figuras6.length;
      i++
    ) {

      const f =
        figuras6[i];

      const distancia =
        dist(
          nueva.x,
          nueva.y,
          f.x,
          f.y
        );

      const distanciaMinima =
        nueva.tam / 2 +
        f.tam / 2 +
        15;

      if (
        distancia <
        distanciaMinima
      ) {

        seSuperpone = true;

        break;

      }

    }

    if (!seSuperpone) {

      figuras6.push(nueva);

    }

  }

}


// ============================================================
// CLASE FIGURA 6
// ============================================================

class Figura6 {

  constructor(
    x,
    y,
    tam,
    tipo,
    c
  ) {

    this.x = x;
    this.y = y;

    this.tam = tam;

    this.tipo = tipo;

    this.c = c;

    this.opacidad = 0;

  }

  mostrar() {

    const d =
      dist(
        mouseX,
        mouseY,
        this.x,
        this.y
      );

    let objetivo =
      map(
        d,
        radioMouse6,
        distanciaRevelado6,
        255,
        0
      );

    objetivo =
      constrain(
        objetivo,
        0,
        255
      );

    this.opacidad =
      lerp(
        this.opacidad,
        objetivo,
        0.12
      );

    if (
      this.opacidad < 1
    ) {

      return;

    }

    push();

    translate(
      this.x,
      this.y
    );

    noStroke();

    fill(
      red(this.c),
      green(this.c),
      blue(this.c),
      this.opacidad
    );

    if (
      this.tipo === 0
    ) {

      ellipse(
        0,
        0,
        this.tam,
        this.tam
      );

    }

    else if (
      this.tipo === 1
    ) {

      rectMode(CENTER);

      rect(
        0,
        0,
        this.tam,
        this.tam
      );

    }

    else if (
      this.tipo === 2
    ) {

      const h =
        this.tam * 0.9;

      triangle(

        0,
        -h / 2,

        -this.tam / 2,
        h / 2,

        this.tam / 2,
        h / 2

      );

    }

    pop();

  }

}


// ============================================================
// ============================================================
// CÓDIGO 7
// ============================================================
// ============================================================

function dibujarCodigo7() {

  background(30);

  if (
    mouseIsPressed &&
    !sistemaActivado7 &&
    !atrayendo7
  ) {

    for (
      let i = 0;
      i < figuras7.length;
      i++
    ) {

      const f =
        figuras7[i];

      if (
        f.estaDentro(
          mouseX,
          mouseY
        )
      ) {

        sistemaActivado7 = true;

        break;

      }

    }

  }

  if (
    sistemaActivado7 &&
    mouseIsPressed
  ) {

    atrayendo7 = true;

  }

  if (
    atrayendo7 &&
    mouseIsPressed
  ) {

    for (
      let i = 0;
      i < figuras7.length;
      i++
    ) {

      figuras7[i]
        .acercarseAlMouse();

    }

  }

  if (
    atrayendo7 &&
    !mouseIsPressed
  ) {

    let todasVolvieron = true;

    for (
      let i = 0;
      i < figuras7.length;
      i++
    ) {

      const f =
        figuras7[i];

      f.volverAOrigen();

      const d =
        dist(
          f.x,
          f.y,
          f.origenX,
          f.origenY
        );

      if (
        d > 0.5
      ) {

        todasVolvieron = false;

      }

    }

    if (todasVolvieron) {

      atrayendo7 = false;

      sistemaActivado7 = false;

    }

  }

  for (
    let i = 0;
    i < figuras7.length;
    i++
  ) {

    figuras7[i].mostrar();

  }

}


// ============================================================
// GENERAR FIGURAS 7
// ============================================================

function generarFiguras7() {

  let intentos = 0;

  while (
    figuras7.length <
      cantidadFiguras7 &&
    intentos <
      10000
  ) {

    intentos++;

    const x =
      random(
        50,
        width - 50
      );

    const y =
      random(
        50,
        height - 50
      );

    const tam =
      random(
        35,
        75
      );

    const tipo =
      floor(
        random(3)
      );

    let c;

    const colorElegido =
      floor(
        random(3)
      );

    if (
      colorElegido === 0
    ) {

      c = "#EDBA3B";

    }

    else if (
      colorElegido === 1
    ) {

      c = "#B92E2B";

    }

    else {

      c = "#133E73";

    }

    const nueva =
      new Figura7(
        x,
        y,
        tam,
        tipo,
        c
      );

    let superpuesta = false;

    for (
      let i = 0;
      i < figuras7.length;
      i++
    ) {

      const f =
        figuras7[i];

      const d =
        dist(
          nueva.x,
          nueva.y,
          f.x,
          f.y
        );

      const distanciaMinima =
        nueva.tam / 2 +
        f.tam / 2 +
        15;

      if (
        d <
        distanciaMinima
      ) {

        superpuesta = true;

        break;

      }

    }

    if (!superpuesta) {

      figuras7.push(nueva);

    }

  }

}


// ============================================================
// CLASE FIGURA 7
// ============================================================

class Figura7 {

  constructor(
    x,
    y,
    tam,
    tipo,
    c
  ) {

    this.x = x;
    this.y = y;

    this.origenX = x;
    this.origenY = y;

    this.tam = tam;

    this.tipo = tipo;

    this.c = c;

  }


  mostrar() {

    push();

    translate(
      this.x,
      this.y
    );

    noStroke();

    fill(this.c);

    if (
      this.tipo === 0
    ) {

      ellipse(
        0,
        0,
        this.tam,
        this.tam
      );

    }

    else if (
      this.tipo === 1
    ) {

      rectMode(CENTER);

      rect(
        0,
        0,
        this.tam,
        this.tam
      );

    }

    else if (
      this.tipo === 2
    ) {

      const h =
        this.tam * 0.9;

      triangle(

        0,
        -h / 2,

        -this.tam / 2,
        h / 2,

        this.tam / 2,
        h / 2

      );

    }

    pop();

  }


  estaDentro(
    mx,
    my
  ) {

    const d =
      dist(
        mx,
        my,
        this.x,
        this.y
      );

    return (
      d <
      this.tam / 2
    );

  }


  acercarseAlMouse() {

    const dx =
      mouseX -
      this.x;

    const dy =
      mouseY -
      this.y;

    const distancia =
      sqrt(
        dx * dx +
        dy * dy
      );

    if (
      distancia < 1
    ) {

      return;

    }

    const direccionX =
      dx /
      distancia;

    const direccionY =
      dy /
      distancia;

    this.x +=
      direccionX *
      distancia *
      velocidadAtraccion7;

    this.y +=
      direccionY *
      distancia *
      velocidadAtraccion7;

  }


  volverAOrigen() {

    this.x =
      lerp(
        this.x,
        this.origenX,
        velocidadRegreso7
      );

    this.y =
      lerp(
        this.y,
        this.origenY,
        velocidadRegreso7
      );

  }

}


// ============================================================
// ============================================================
// CÓDIGO 8
// ============================================================
// CÍRCULO + TRIÁNGULO + CUADRADOS
// ============================================================
// El círculo azul sigue al mouse.
// El triángulo amarillo escapa.
// Los cuadrados rojos también escapan.
// ============================================================


// ============================================================
// INICIALIZAR CÓDIGO 8
// ============================================================

function inicializarCodigo8() {

  circuloX8 =
    width / 2;

  circuloY8 =
    height - 100;

  trianguloX8 =
    width / 2;

  trianguloY8 =
    100;

  origenTrianguloX8 =
    trianguloX8;

  origenTrianguloY8 =
    trianguloY8;

  cuadrados8 = [];

  generarCuadrados8();

}


// ============================================================
// DRAW CÓDIGO 8
// ============================================================

function dibujarCodigo8() {

  background(30);

  // CÍRCULO SIGUE AL MOUSE

  circuloX8 = mouseX;
  circuloY8 = mouseY;

  circuloX8 =
    constrain(
      circuloX8,
      radioCirculo8,
      width - radioCirculo8
    );

  circuloY8 =
    constrain(
      circuloY8,
      radioCirculo8,
      height - radioCirculo8
    );


  // TRIÁNGULO

  escaparTriangulo8();


  // CUADRADOS

  for (
    let i = 0;
    i < cuadrados8.length;
    i++
  ) {

    cuadrados8[i].actualizar();

  }


  // DIBUJAR CUADRADOS

  for (
    let i = 0;
    i < cuadrados8.length;
    i++
  ) {

    cuadrados8[i].mostrar();

  }


  // DIBUJAR TRIÁNGULO

  dibujarTriangulo8();


  // DIBUJAR CÍRCULO

  noStroke();

  fill(AZUL);

  ellipse(
    circuloX8,
    circuloY8,
    radioCirculo8 * 2,
    radioCirculo8 * 2
  );

}


// ============================================================
// TRIÁNGULO ESCAPA
// ============================================================

function escaparTriangulo8() {

  let dx =
    trianguloX8 -
    circuloX8;

  let dy =
    trianguloY8 -
    circuloY8;

  let distancia =
    sqrt(
      dx * dx +
      dy * dy
    );


  // Si el círculo está cerca

  if (
    distancia < 220
  ) {

    let dirX;
    let dirY;

    if (
      distancia > 0.01
    ) {

      dirX =
        dx /
        distancia;

      dirY =
        dy /
        distancia;

    }

    else {

      dirX = 0;
      dirY = -1;

    }


    // Cuanto más cerca,
    // más rápido

    let intensidad =
      map(
        distancia,
        220,
        distanciaSegura8,
        0,
        1
      );

    intensidad =
      constrain(
        intensidad,
        0,
        1
      );


    let velocidad =
      velocidadEscape8 +
      (1 - intensidad) * 4;


    trianguloX8 +=
      dirX *
      velocidad;

    trianguloY8 +=
      dirY *
      velocidad;

  }


  // PROTECCIÓN CONTRA EL CÍRCULO

  let nuevaDistancia =
    dist(
      trianguloX8,
      trianguloY8,
      circuloX8,
      circuloY8
    );

  if (
    nuevaDistancia <
    distanciaSegura8
  ) {

    dx =
      trianguloX8 -
      circuloX8;

    dy =
      trianguloY8 -
      circuloY8;

    let d =
      sqrt(
        dx * dx +
        dy * dy
      );

    if (
      d < 0.01
    ) {

      dx = 1;
      dy = 0;

      d = 1;

    }

    dx /= d;
    dy /= d;

    trianguloX8 =
      circuloX8 +
      dx *
      distanciaSegura8;

    trianguloY8 =
      circuloY8 +
      dy *
      distanciaSegura8;

  }


  // VOLVER LENTAMENTE
  // AL LUGAR ORIGINAL

  if (
    distancia > 220
  ) {

    trianguloX8 =
      lerp(
        trianguloX8,
        origenTrianguloX8,
        0.01
      );

    trianguloY8 =
      lerp(
        trianguloY8,
        origenTrianguloY8,
        0.01
      );

  }


  // NO SALIR DE LA VENTANA

  trianguloX8 =
    constrain(
      trianguloX8,
      radioTriangulo8,
      width - radioTriangulo8
    );

  trianguloY8 =
    constrain(
      trianguloY8,
      radioTriangulo8,
      height - radioTriangulo8
    );

}


// ============================================================
// DIBUJAR TRIÁNGULO 8
// ============================================================

function dibujarTriangulo8() {

  push();

  translate(
    trianguloX8,
    trianguloY8
  );

  noStroke();

  fill(AMARILLO);

  triangle(

    0,
    -radioTriangulo8,

    -radioTriangulo8,
    radioTriangulo8,

    radioTriangulo8,
    radioTriangulo8

  );

  pop();

}


// ============================================================
// GENERAR CUADRADOS 8
// ============================================================

function generarCuadrados8() {

  const cantidad = 28;

  const tamano = 14;

  let intentos = 0;

  while (
    cuadrados8.length <
      cantidad &&
    intentos <
      10000
  ) {

    intentos++;

    const x =
      random(
        100,
        width - 100
      );

    const y =
      random(
        300,
        480
      );


    let valido = true;


    // Comprobar que no se superponga
    // con otro cuadrado

    for (
      let i = 0;
      i < cuadrados8.length;
      i++
    ) {

      const c =
        cuadrados8[i];

      const d =
        dist(
          x,
          y,
          c.x,
          c.y
        );

      if (
        d <
        tamano + 8
      ) {

        valido = false;

        break;

      }

    }


    if (valido) {

      cuadrados8.push(
        new Cuadrado8(
          x,
          y,
          tamano
        )
      );

    }

  }

}


// ============================================================
// CLASE CUADRADO 8
// ============================================================

class Cuadrado8 {

  constructor(
    x_,
    y_,
    tamano_
  ) {

    this.x = x_;
    this.y = y_;

    this.origenX = x_;
    this.origenY = y_;

    this.tamano = tamano_;

  }


  // ==========================================================
  // ACTUALIZAR
  // ==========================================================

  actualizar() {

    let dx =
      this.x -
      circuloX8;

    let dy =
      this.y -
      circuloY8;

    let distancia =
      sqrt(
        dx * dx +
        dy * dy
      );


    // ESCAPAR

    if (
      distancia < 180
    ) {

      let dirX;
      let dirY;

      if (
        distancia > 0.01
      ) {

        dirX =
          dx /
          distancia;

        dirY =
          dy /
          distancia;

      }

      else {

        dirX = 1;
        dirY = 0;

      }


      // Los cuadrados escapan
      // más suavemente que el triángulo

      let intensidad =
        map(
          distancia,
          180,
          distanciaSegura8,
          0,
          1
        );

      intensidad =
        constrain(
          intensidad,
          0,
          1
        );


      let velocidad =
        1.2 +
        (1 - intensidad) * 2.5;


      this.x +=
        dirX *
        velocidad;

      this.y +=
        dirY *
        velocidad;

    }


    // PROTECCIÓN CONTRA EL CÍRCULO

    let nuevaDistancia =
      dist(
        this.x,
        this.y,
        circuloX8,
        circuloY8
      );


    if (
      nuevaDistancia <
      distanciaSegura8
    ) {

      dx =
        this.x -
        circuloX8;

      dy =
        this.y -
        circuloY8;

      let d =
        sqrt(
          dx * dx +
          dy * dy
        );


      if (
        d < 0.01
      ) {

        dx = 1;
        dy = 0;

        d = 1;

      }


      dx /= d;
      dy /= d;


      this.x =
        circuloX8 +
        dx *
        distanciaSegura8;

      this.y =
        circuloY8 +
        dy *
        distanciaSegura8;

    }


    // VOLVER A LA POSICIÓN ORIGINAL

    if (
      distancia > 180
    ) {

      this.x =
        lerp(
          this.x,
          this.origenX,
          0.015
        );

      this.y =
        lerp(
          this.y,
          this.origenY,
          0.015
        );

    }


    // NO SALIR DE LA VENTANA

    const mitad =
      this.tamano / 2;


    this.x =
      constrain(
        this.x,
        mitad,
        width - mitad
      );

    this.y =
      constrain(
        this.y,
        mitad,
        height - mitad
      );

  }


  // ==========================================================
  // DIBUJAR
  // ==========================================================

  mostrar() {

    rectMode(CENTER);

    noStroke();

    fill(ROJO);

    rect(
      this.x,
      this.y,
      this.tamano,
      this.tamano
    );

  }

}


// ============================================================
// ============================================================
// CÓDIGO 9
// ============================================================
// CÍRCULO GRANDE + CÍRCULOS QUE LO SIGUEN
// ============================================================
// El círculo azul sigue al mouse.
// Los círculos azules pequeños lo siguen.
// Cuando entran completamente dentro,
// son absorbidos y el círculo grande crece.
// ============================================================


// ============================================================
// INICIALIZAR CÓDIGO 9
// ============================================================

function inicializarCodigo9() {

  circuloX9 =
    width / 2;

  circuloY9 =
    height / 2;

  radioCirculo9 =
    45;

  radioObjetivo9 =
    45;

  velocidad9 =
    0.025;

  figuras9 = [];

  generarFiguras9();

}


// ============================================================
// DRAW CÓDIGO 9
// ============================================================

function dibujarCodigo9() {

  background(30);


  // CÍRCULO GRANDE SIGUE AL MOUSE

  seguirMouse9();


  // CRECIMIENTO SUAVE

  radioCirculo9 =
    lerp(
      radioCirculo9,
      radioObjetivo9,
      0.08
    );


  // ACTUALIZAR FIGURAS

  // Recorremos de atrás hacia adelante
  // para poder eliminar figuras.

  for (
    let i = figuras9.length - 1;
    i >= 0;
    i--
  ) {

    const f =
      figuras9[i];

    f.actualizar();


    // SI FUE ABSORBIDA

    if (f.comida) {

      // El círculo grande crece

      radioObjetivo9 +=
        aumentoRadio9;


      // Aumenta la velocidad

      velocidad9 +=
        aumentoVelocidad9;

      velocidad9 =
        constrain(
          velocidad9,
          0.025,
          velocidadMaxima9
        );


      // Eliminamos la figura

      figuras9.splice(
        i,
        1
      );

    }

  }


  // DIBUJAR FIGURAS

  for (
    let i = 0;
    i < figuras9.length;
    i++
  ) {

    figuras9[i].mostrar();

  }


  // DIBUJAR CÍRCULO GRANDE

  noStroke();

  fill(AZUL);

  ellipse(
    circuloX9,
    circuloY9,
    radioCirculo9 * 2,
    radioCirculo9 * 2
  );

}


// ============================================================
// CÍRCULO GRANDE SIGUE AL MOUSE
// ============================================================

function seguirMouse9() {

  let dx =
    mouseX -
    circuloX9;

  let dy =
    mouseY -
    circuloY9;


  circuloX9 +=
    dx *
    velocidad9;

  circuloY9 +=
    dy *
    velocidad9;


  // No puede salir de la ventana

  circuloX9 =
    constrain(
      circuloX9,
      radioCirculo9,
      width - radioCirculo9
    );

  circuloY9 =
    constrain(
      circuloY9,
      radioCirculo9,
      height - radioCirculo9
    );

}


// ============================================================
// GENERAR FIGURAS 9
// ============================================================

function generarFiguras9() {

  const cantidad = 80;

  let intentos = 0;

  while (
    figuras9.length <
      cantidad &&
    intentos <
      20000
  ) {

    intentos++;


    const x =
      random(
        25,
        width - 25
      );

    const y =
      random(
        25,
        height - 25
      );

    const tamano =
      random(
        14,
        28
      );

    const tipo =
      floor(
        random(3)
      );

    let c;


    // CÍRCULOS = AZUL

    if (
      tipo === 0
    ) {

      c = AZUL;

    }


    // CUADRADOS = ROJO

    else if (
      tipo === 1
    ) {

      c = ROJO;

    }


    // TRIÁNGULOS = AMARILLO

    else {

      c = AMARILLO;

    }


    // EVITAR SUPERPOSICIONES

    let valido = true;

    for (
      let i = 0;
      i < figuras9.length;
      i++
    ) {

      const f =
        figuras9[i];

      const distancia =
        dist(
          x,
          y,
          f.x,
          f.y
        );

      const distanciaMinima =
        tamano / 2 +
        f.tamano / 2 +
        8;


      if (
        distancia <
        distanciaMinima
      ) {

        valido = false;

        break;

      }

    }


    if (valido) {

      figuras9.push(
        new Figura9(
          x,
          y,
          tamano,
          tipo,
          c
        )
      );

    }

  }

}


// ============================================================
// CLASE FIGURA 9
// ============================================================

class Figura9 {

  constructor(
    x_,
    y_,
    tamano_,
    tipo_,
    c_
  ) {

    this.x = x_;
    this.y = y_;

    this.tamano =
      tamano_;

    this.tipo =
      tipo_;

    this.c =
      c_;


    // Si está siguiendo
    // al círculo grande

    this.siguiendo =
      false;


    // Si fue absorbida

    this.comida =
      false;

  }


  // ==========================================================
  // ACTUALIZAR
  // ==========================================================

  actualizar() {

    // Solo los círculos pueden seguir
    // al círculo grande.

    if (
      this.tipo !== 0
    ) {

      return;

    }


    // ========================================================
    // SI TODAVÍA NO SIGUE
    // ========================================================

    if (
      !this.siguiendo
    ) {

      const distancia =
        dist(
          this.x,
          this.y,
          circuloX9,
          circuloY9
        );


      // Cuando el círculo grande pasa
      // suficientemente cerca...

      if (
        distancia <
        radioCirculo9 +
        this.tamano / 2 +
        15
      ) {

        this.siguiendo =
          true;

      }

    }


    // ========================================================
    // SI YA ESTÁ SIGUIENDO
    // ========================================================

    if (
      this.siguiendo
    ) {

      this.seguirCirculoGrande();


      // COMPROBAR SI FUE ABSORBIDO

      const distancia =
        dist(
          this.x,
          this.y,
          circuloX9,
          circuloY9
        );


      // Cuando el círculo pequeño
      // entra completamente dentro
      // del círculo grande.

      if (
        distancia <
        radioCirculo9 -
        this.tamano / 2
      ) {

        this.comida =
          true;

      }

    }

  }


  // ==========================================================
  // SEGUIR AL CÍRCULO GRANDE
  // ==========================================================

  seguirCirculoGrande() {

    const dx =
      circuloX9 -
      this.x;

    const dy =
      circuloY9 -
      this.y;

    const distancia =
      sqrt(
        dx * dx +
        dy * dy
      );


    // Evitar división por cero

    if (
      distancia > 0.01
    ) {

      const dirX =
        dx /
        distancia;

      const dirY =
        dy /
        distancia;


      // Mientras está lejos,
      // se acerca normalmente.

      const velocidadSeguir =
        0.07;


      this.x +=
        dirX *
        distancia *
        velocidadSeguir;

      this.y +=
        dirY *
        distancia *
        velocidadSeguir;

    }


    // NO SALIR DE LA VENTANA

    const mitad =
      this.tamano / 2;


    this.x =
      constrain(
        this.x,
        mitad,
        width - mitad
      );

    this.y =
      constrain(
        this.y,
        mitad,
        height - mitad
      );

  }


  // ==========================================================
  // DIBUJAR
  // ==========================================================

  mostrar() {

    push();

    translate(
      this.x,
      this.y
    );

    noStroke();

    fill(this.c);


    // CÍRCULO

    if (
      this.tipo === 0
    ) {

      ellipse(
        0,
        0,
        this.tamano,
        this.tamano
      );

    }


    // CUADRADO

    else if (
      this.tipo === 1
    ) {

      rectMode(CENTER);

      rect(
        0,
        0,
        this.tamano,
        this.tamano
      );

    }


    // TRIÁNGULO

    else {

      const h =
        this.tamano * 0.9;

      triangle(

        0,
        -h / 2,

        -this.tamano / 2,
        h / 2,

        this.tamano / 2,
        h / 2

      );

    }

    pop();

  }

}


// ============================================================
// MOUSE GENERAL
// ============================================================

function mousePressed() {

  if (
    mouseX < 0 ||
    mouseX > width ||
    mouseY < 0 ||
    mouseY > height
  ) {

    return;

  }


  if (
    actual === 1
  ) {

    clickCodigo1();

  }

  else if (
    actual === 2
  ) {

    clickCodigo2();

  }

  else if (
    actual === 4
  ) {

    clickCodigo4();

  }

  else if (
    actual === 5
  ) {

    clickCodigo5();

  }

}


// ============================================================
// MOUSE RELEASED
// ============================================================

function mouseReleased() {

  if (
    actual === 4
  ) {

    figuraPresionada4 = null;

  }

  else if (
    actual === 5
  ) {

    figuraAgarrada5 = null;

  }

}


// ============================================================
// TECLA R
// ============================================================

function keyPressed() {

  if (
    actual === 2 &&
    (
      key === "r" ||
      key === "R"
    )
  ) {

    individuos = [];

    conexiones = [];

    nacimientos = [];

    individuoActual = null;

    estado = 0;

    tiempoAnimacion = 0;

  }

}