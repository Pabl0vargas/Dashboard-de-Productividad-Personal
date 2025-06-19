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


// Button dark mode
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('darkModeToggle');
  const body = document.body;

  // Changes the button icon according to the current mode
  const setIcon = (isDarkMode) => {
    toggleButton.textContent = isDarkMode ? '☀️' : '🌙';
  };

  // Check if the user already had dark mode
  const darkModeEnabled = localStorage.getItem('darkMode') === 'enabled';

  if (darkModeEnabled) {
    body.classList.add('dark-mode');
  }

  // Set the correct icon when loading
  setIcon(darkModeEnabled);

  // Button click event
  toggleButton.addEventListener('click', function () {
    const isDark = body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
    setIcon(isDark);
  });


  body.classList.add('ready');
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


//Lista de elementos en una estructura repetidad
const listaTareas = [
  "Definir metas claras",
  "Identificar prioridades semanales",
  "Elegir una herramienta de organización",
  "Planificar tu día la noche anterior",
  "Priorizar tus tareas en orden de importancia",
  "Eliminar distracciones",
  "Tomar descansos regulares",
  "Completar tareas pequeñas rápidamente",
  "Revisar y reflexionar sobre tu día al final"
];

const btnMostrarTareas = document.getElementById('mostrarTareas');
const btnOcultarTareas = document.getElementById('ocultarTareas');
const tareas = document.getElementById('listaTareas');

btnMostrarTareas.addEventListener("click", () => {
  tareas.innerHTML = "";   //Limpio mi lista antes de generar los demas elementos

  for(let i=0; i<listaTareas.length; i++) {
    const li = document.createElement('li');
    li.textContent = listaTareas[i];
    tareas.appendChild(li);
  }

  tareas.style.display = "block";

});

btnOcultarTareas.addEventListener('click', () => {
  tareas.style.display = "none";
});




