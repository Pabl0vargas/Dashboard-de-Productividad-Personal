// ----- Task Initialization -----
let listaTareas = JSON.parse(localStorage.getItem("tareas")) || [];

if (!Array.isArray(listaTareas) || listaTareas.length === 0) {
  listaTareas = [
    { texto: "Definir metas claras", timestamp: Date.now() },
    { texto: "Identificar prioridades semanales", timestamp: Date.now() },
    { texto: "Elegir una herramienta de organización", timestamp: Date.now() },
    { texto: "Planificar tu día la noche anterior", timestamp: Date.now() },
    { texto: "Priorizar tus tareas en orden de importancia", timestamp: Date.now() },
    { texto: "Eliminar distracciones", timestamp: Date.now() },
    { texto: "Tomar descansos regulares", timestamp: Date.now() },
    { texto: "Completar tareas pequeñas rápidamente", timestamp: Date.now() },
    { texto: "Revisar y reflexionar sobre tu día al final", timestamp: Date.now() }
  ];
  localStorage.setItem("tareas", JSON.stringify(listaTareas));
}

// ----- 1. Conditional Greeting Button -----
function saludar() {
  const hora = new Date().getHours();
  let mensaje = "";

  if (hora < 12) {
    mensaje = "¡Buenos días, princesita!";
  } else if (hora < 18) {
    mensaje = "¡Buenas tardes, caballero 😎!";
  } else {
    mensaje = "¡Buenas noches, persona trans! 😴";
  }

  document.getElementById("saludoResultado").textContent = mensaje;
}

// ----- 2. Dark Mode Toggle -----
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('darkModeToggle');
  const body = document.body;

  // Set icon depending on current mode
  const setIcon = (isDarkMode) => {
    toggleButton.textContent = isDarkMode ? '☀️' : '🌙';
  };

  // Check and apply saved preference
  const darkModeEnabled = localStorage.getItem('darkMode') === 'enabled';
  if (darkModeEnabled) {
    body.classList.add('dark-mode');
  }

  setIcon(darkModeEnabled);

  toggleButton.addEventListener('click', function () {
    const isDark = body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
    setIcon(isDark);
  });

  body.classList.add('ready');
});

// ----- 3. Task Management -----

// DOM references
const btnValidar = document.getElementById("btnValidar");
const inputTarea = document.getElementById("inputTarea");
const mensaje = document.getElementById("mensajeValidacion");

// Filter tasks from the last 24 hours
function getRecentTasks() {
  const now = Date.now();
  return listaTareas.filter(t => now - t.timestamp < 86400000);
}

// Display recent tasks
function showRecentTasks() {
  const recentTasks = getRecentTasks();
  const taskContainer = document.getElementById("tareaReciente");

  if (recentTasks.length === 0) {
    taskContainer.innerHTML = "<em>No hay tareas recientes</em>";
    return;
  }

  taskContainer.innerHTML = "<strong>Tareas recientes (últimas 24h):</strong><ul>" +
    recentTasks.map(t => {
      const time = new Date(t.timestamp).toLocaleTimeString('es-CO', {
        hour: '2-digit', minute: '2-digit'
      });
      return `<li>${t.texto} <span style="color:gray;">(${time})</span></li>`;
    }).join("") +
    "</ul>";
}

// Add task when clicking button
btnValidar.addEventListener("click", (event) => {
  event.preventDefault();

  const value = inputTarea.value.trim();

  if (!value) {
    mensaje.textContent = "*Por favor, introduzca una tarea antes de añadir.";
    mensaje.className = "error";
  } else {
    mensaje.textContent = "¡Tarea añadida con éxito!";
    mensaje.className = "ok";

    const newTask = {
      texto: value,
      timestamp: Date.now()
    };

    listaTareas.push(newTask);
    localStorage.setItem("tareas", JSON.stringify(listaTareas));
    inputTarea.value = "";

    if (tareasVisibles) mostrarTodasLasTareas();
    if (tareaReciente.style.display === "block") showRecentTasks();

    setTimeout(() => {
      mensaje.textContent = "";
      mensaje.className = "";
    }, 2000);
  }
});

// ----- 4. Weekly Task Display (with delete) -----
const btnMostrarTareas = document.getElementById('mostrarTareas');
const btnOcultarTareas = document.getElementById('ocultarTareas');
const tareas = document.getElementById('listaTareas');

let tareasVisibles = false; // Track visibility

function eliminarTarea(index) {
  listaTareas.splice(index, 1);
  localStorage.setItem("tareas", JSON.stringify(listaTareas));
  if (tareasVisibles) mostrarTodasLasTareas();
  if (tareaReciente.style.display === "block") showRecentTasks();
}

function mostrarTodasLasTareas() {
  tareas.innerHTML = "";

  listaTareas.forEach((t, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${t.texto}
      <button class="btnEliminar" data-index="${index}">🗑️</button>
    `;
    tareas.appendChild(li);
  });

  tareas.style.display = tareasVisibles ? "block" : "none";

  document.querySelectorAll(".btnEliminar").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const index = e.target.getAttribute("data-index");
      eliminarTarea(index);
    });
  });
}

btnMostrarTareas.addEventListener("click", () => {
  tareasVisibles = true;
  tareas.style.display = "block";
});

btnOcultarTareas.addEventListener("click", () => {
  tareasVisibles = false;
  tareas.style.display = "none";
});

// ----- 5. Toggle Recent Tasks Section -----
const btnMostrarRecientes = document.getElementById("mostrarRecientes");
const btnOcultarRecientes = document.getElementById("ocultarRecientes");
const tareaReciente = document.getElementById("tareaReciente");

// When the user clicks "Mostrar tareas recientes"
btnMostrarRecientes.addEventListener("click", () => {
  showRecentTasks(); // Render recent tasks
  tareaReciente.style.display = "block"; // Show container
  btnOcultarRecientes.style.display = "inline-block"; // Show "Ocultar" button
  btnMostrarRecientes.style.display = "none"; // Hide "Mostrar" button
});

// When the user clicks "Ocultar tareas recientes"
btnOcultarRecientes.addEventListener("click", () => {
  tareaReciente.style.display = "none"; // Hide container
  btnOcultarRecientes.style.display = "none"; // Hide "Ocultar" button
  btnMostrarRecientes.style.display = "inline-block"; // Show "Mostrar" button
});


// ----- 6. Task Counter -----
let cont = 0;

const contador = document.getElementById("contador");
const btnIncrementar = document.getElementById("sumar");
const btnDecrementar = document.getElementById("restar");
const btnResetear = document.getElementById("resetear");

btnIncrementar.addEventListener("click", () => {
  cont++;
  contador.innerHTML = cont;
});

btnDecrementar.addEventListener("click", () => {
  if (cont > 0) {
    cont--;
    contador.innerHTML = cont;
  }
});

btnResetear.addEventListener("click", () => {
  cont = 0;
  contador.innerHTML = cont;
});

// ----- 7. Random Productivity Tip -----
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

// ----- 8. On Page Load -----
document.addEventListener("DOMContentLoaded", () => {
  mostrarTodasLasTareas(); // Do not auto-show recent tasks
});

//Preloader

window.addEventListener("load", () => {
  document.body.classList.add("ready");
});


