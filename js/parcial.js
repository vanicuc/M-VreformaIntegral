/// PARA QUE LA VENTANA DE LA GALERIA SE HAGA GRANDE ///


document.addEventListener("DOMContentLoaded", function() {
    let modal = document.getElementById("modalFoto");
    let modalImg = document.getElementById("modalImage");
    let imagenes = document.getElementsByClassName("gallery-image");

    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].addEventListener("click", function() {
            // Verificar si no es un dispositivo móvil
            if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
                modal.style.display = "block";
                modalImg.src = imagenes[i].src;
            }
        });
    }

    let close = document.querySelector(".close");
    close.addEventListener("click", function() {
        modal.style.display = "none";
    });
});



// document.addEventListener("DOMContentLoaded", function() {
//     let modal = document.getElementById("modalFoto");
//     let modalImg = document.getElementById("modalImage");
//     let imagenes = document.getElementsByClassName("gallery-image");
  
//     for (let i = 0; i < imagenes.length; i++) {
//         imagenes[i].addEventListener("click", function() {
//             modal.style.display = "block";
//             modalImg.src = imagenes[i].src;
//         });
//     }
  
//     let close = document.querySelector(".close");
//     close.addEventListener("click", function() {
//         modal.style.display = "none";
//     });
//   });
  