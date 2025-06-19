// ----- Tip Aleatorio -----
const tips = [
  "Organiza tu día en bloques de tiempo.",
  "Tómate pausas activas cada 45 minutos.",
  "Empieza por lo más difícil de tu lista.",
  "Cierra pestañas que no estés usando.",
  "Evita el multitasking, enfócate en una sola cosa.",
  "Usa la regla de los dos minutos para tareas rápidas.",
  "Apaga notificaciones cuando trabajes en algo importante.",
  "Revisa tus pendientes antes de terminar el día."
];

const tipTexto = document.getElementById("tip");
const btnTip = document.getElementById("btnTip");

btnTip.addEventListener("click", () => {
  const indice = Math.floor(Math.random() * tips.length);
  tipTexto.textContent = tips[indice];
});

// Sección para validar la entrada
const btnValidar = document.getElementById("btnValidar");
const inputTarea = document.getElementById("inputTarea");
const mensaje = document.getElementById("mensajeValidacion");

btnValidar.addEventListener("click", () => {
  const valor = inputTarea.value.trim();

  if (!valor) {
    mensaje.textContent = "*Por favor escribe una tarea antes de añadir.";
    mensaje.className = "error";
  } else {
    mensaje.textContent = "¡Tarea añadida correctamente.!";
    mensaje.className = "ok";
  }
});

// Boton para contabilizar tareas
let cont = 0;

const contador = document.getElementById("contador");
const btnIncrementar = document.getElementById("sumar");
const btnDecrementar = document.getElementById("restar");
const btnResetear = document.getElementById("resetear");

btnIncrementar.addEventListener("click", () => {
  cont++;
  contador.innerHTML = cont;
});

btnDecrementar.addEventListener("click", () =>   {
  if(cont > 0){
    cont--;
    contador.innerHTML = cont;
  }
});

btnResetear.addEventListener("click", () => {
  cont = 0;
  contador.innerHTML = cont;
})

