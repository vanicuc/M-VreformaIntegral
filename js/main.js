


   

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

