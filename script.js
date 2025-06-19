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
