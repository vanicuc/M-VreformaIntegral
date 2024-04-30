document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");
    const successMessage = document.getElementById("success-message");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); 
  
  
      // Mostrar el mensaje de éxito
      successMessage.style.display = "block";
    });
  });
