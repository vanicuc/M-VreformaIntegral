


   

    const enlaceAvisoLegal = document.getElementById("avisoLegal");

enlaceAvisoLegal.addEventListener("click", () => {
  // Calcula el centro de la pantalla
  const leftPosition = (window.screen.width - 600) / 2;
  const topPosition = (window.screen.height - 700) / 2;
  
  // Abre la ventana emergente centrada
  window.open("../legal.html", "legal", "width=600,height=700,top=" + topPosition + ",left=" + leftPosition);
});

const enlaceprivacidad = document.getElementById("privacidad");

enlaceprivacidad.addEventListener("click", () => {
  // Calcula el centro de la pantalla
  const leftPosition = (window.screen.width - 600) / 2;
  const topPosition = (window.screen.height - 700) / 2;
  
  // Abre la ventana emergente centrada
  window.open("../privacidad.html", "privacidad", "width=600,height=700,top=" + topPosition + ",left=" + leftPosition);
});



// const enlaceContacto = document.getElementById("ventana-contacto-info");

// enlaceContacto.addEventListener("click", (event) => {
//   event.preventDefault(); 
//   const leftPosition = (window.screen.width - 800) / 2;
//   const topPosition = (window.screen.height - 500) / 2;

  
//   window.open("contacto.html", "contacto", "width=800,height=500,top=" + topPosition + ",left=" + leftPosition);
// });



/// PARA QUE LA VENTANA DE LA GALERIA SE HAGA GRANDE ///

// let modal =document.getElementById("modalFoto");
// let modalImg= document.getElementById("modalImage");

// let imagenes = document.getElementsByClassName("gallery-image");

// for(let i= 0; i < imagenes.length; i++){
//     imagenes[i].addEventListener("click", function(){
//         modal.style.display="block";
    
//         modalImg.src= imagenes[i].src ;
//     })
// };
// let close= document.querySelector(".close");
// close.addEventListener("click", function(){
//     modal.style.display="none";
// })



//boton pedir presupuesto //

function redirect() {
 
  window.location.href = "presupuesto.html";
}
  // Función para detectar si el usuario está en un dispositivo móvil
  function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  }

  // Obtener el elemento de video
  var video = document.getElementById("myVideo");

  // Si no es un dispositivo móvil, reproducir el video automáticamente
  if (!isMobileDevice()) {
    video.play();
  }


  //VIDEO 
  // document.addEventListener("DOMContentLoaded", function() {
  //   var video = document.getElementById("myVideo");
  //   var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  //   if (isMobile) {
  //     var playButton = document.createElement("button");
  //     playButton.innerHTML = "Play";
  //     playButton.classList.add("play-button");
  //     playButton.addEventListener("click", function() {
  //       video.play();
  //       playButton.style.display = "none";
  //     });

  //     // Verificar si el elemento de video existe antes de insertar el botón de reproducción
  //     if (video) {
  //       video.parentNode.insertBefore(playButton, video);
  //     }
  //   } else {
  //     video.play();
  //   }
  // });

  