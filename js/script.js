// Mostrar el GIF durante 3 segundos
setTimeout(function() {
    // Ocultar el GIF
    document.getElementById("loading").style.display = "none";
    // Redirigir a la página index.html
    window.location.href = "../pages/main.html";
  }, 3000);
  