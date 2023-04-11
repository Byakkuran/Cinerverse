const botonMover = document.getElementById('boton_mover');

const botonMover2 = document.getElementById('boton_mover2');

const botonMover3 = document.getElementById('boton_mover3');

const botonMover4 = document.getElementById('boton_mover4');

const botonRegresar = document.getElementById('boton_regresar');

const botonRegresar2 = document.getElementById('boton_regresar2');

const botonRegresar3 = document.getElementById('boton_regresar3');

const botonRegresar4 = document.getElementById('boton_regresar4');

const  movForm = document.querySelector('.formulario');

const  sTatic = document.querySelector('.formcontainer');

const progressBar = document.querySelector(".progressbar");

var usuario = document.getElementById("usuario");

var contraseña = document.getElementById("contraseña");

const botonDescargar = document.getElementById('descarga');

botonDescargar.addEventListener('click', () => {  // boton de descarga

  /*alert("working on it");*/
  // se aclara que div sera el contenido del div a imprimir
  const resumeImprimible = document.getElementById("resumeimprimible");

  // crea un onbjeto html2pdf

  
  const opcion = {
    margin:       -1,
    filename:     'documento.pdf',
    image:        { type: 'jpeg', quality: 0.98 }, /* qulity tambien controla la calidad del screenshot/ */
    html2canvas:  { windowWidth: 700, windowHeight: 500, scale: 1, scrollX:1100 }, /* escale controla la caliad en pixeles/ */
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait'}
  };

  // convierte el contendo del div en un archivo PDF
  html2pdf().set(opcion).from(resumeImprimible).save();

});

botonMover.addEventListener('click', () => {
   
    document.getElementById("userresume").innerHTML = usuario.value;
    document.getElementById("contraseñaresume").innerHTML = contraseña.value;
    movForm.style.marginLeft = '-100%';
    sTatic.style.transform = 'translateY(0)';
    progressBar.style.backgroundImage = "linear-gradient(to right, crimson 30%, transparent 0%)";
    

  });

botonMover2.addEventListener('click', () => {
   

    movForm.style.marginLeft = '-200%';
    sTatic.style.transform = 'translateY(0)';
    progressBar.style.backgroundImage = "linear-gradient(to right, crimson 30%, transparent 0%)";


  });

botonMover3.addEventListener('click', () => {
   

    movForm.style.marginLeft = '-300%';
    sTatic.style.transform = 'translateY(0)';
    progressBar.style.backgroundImage = "linear-gradient(to right, crimson 30%, transparent 0%)";


  });

botonMover4.addEventListener('click', () => {
   

    movForm.style.marginLeft = '-400%';
    sTatic.style.transform = 'translateY(0)';
    progressBar.style.backgroundImage = "linear-gradient(to right, crimson 30%, transparent 0%)";


  });




botonRegresar.addEventListener('click', () => {
   

    movForm.style.marginLeft = '-0%';
    sTatic.style.transform = 'translateY(0)';
    progressBar.style.backgroundImage = "linear-gradient(to right, crimson 30%, transparent 0%)";


  });

botonRegresar2.addEventListener('click', () => {
   

    movForm.style.marginLeft = '-100%';
    sTatic.style.transform = 'translateY(0)';
    progressBar.style.backgroundImage = "linear-gradient(to right, crimson 30%, transparent 0%)";
    

  });

  
botonRegresar3.addEventListener('click', () => {
   

    movForm.style.marginLeft = '-200%';
    sTatic.style.transform = 'translateY(0)';
    progressBar.style.backgroundImage = "linear-gradient(to right, crimson 30%, transparent 0%)";
    

  });

botonRegresar4.addEventListener('click', () => {
   

    movForm.style.marginLeft = '-300%';
    sTatic.style.transform = 'translateY(0)';
    progressBar.style.backgroundImage = "linear-gradient(to right, crimson 30%, transparent 0%)";
    

  });

  /* parte del script de precio */



function updatePrices(price) {
    const thePrices = document.querySelectorAll(".theprice");
    thePrices.forEach(function(thePrice) {
      thePrice.innerHTML = price + " $";
    });
}

document.addEventListener("DOMContentLoaded", function() { // codigo del formulario
  let price = 0;
  var pricebackup = 0;
  var pricebackup2 = 0;
  var pricebackup3 = 0;
  var pricebackup4 = 0;
  updatePrices(price);

  var cantPantallas = document.getElementById("pantallas");
  var elegiReso = document.getElementById("resolucion");
  var idiomaSino = document.getElementById("idiomasino");
  var ipSino = document.getElementById("restriccionip");
  var premierSino = document.getElementById("avanpremier");
  var contdesSino = document.getElementById("contenidodescargable");

  
  var userResume = document.getElementById("userresume");

  cantPantallas.onchange = function() {
    price = cantPantallas.value * 100;

    // Actualizar precio en función de la resolución
    if ( elegiReso.value == 0){
      price= price + 0;
    }else if (elegiReso.value == 1) {
      price = price + 400;
    } else if (elegiReso.value == 2) {
      price = price + 800;
    } else if (elegiReso.value == 3) {
      price = price + 1500;
    } else if (elegiReso.value == 4) {
      price = price + 2000;
    } else if (elegiReso.value == 5) {
      price = price + 2500;
    } else if (elegiReso.value == 6) {
      price = price + 3000;
    } else if (elegiReso.value == 7) {
      price = price + 4000;
    }
    
    updatePrices(price);
    pricebackup = price;
  };

  elegiReso.onchange = function() {
    // Reiniciar el precio a su valor original
    price = cantPantallas.value * 100;

    if (elegiReso.value == 1) {
      price = price + 400;
    } else if (elegiReso.value == 2) {
      price = price + 800;
    } else if (elegiReso.value == 3) {
      price = price + 1500;
    } else if (elegiReso.value == 4) {
      price = price + 2000;
    } else if (elegiReso.value == 5) {
      price = price + 2500;
    } else if (elegiReso.value == 6) {
      price = price + 3000;
    } else if (elegiReso.value == 7) {
      price = price + 4000;
    }
 
    updatePrices(price);
    pricebackup = price;
  };

  idiomaSino.onchange = function(){

   

    if(idiomaSino.value == 2){
      price = price + 300;
 
    } 
    if (idiomaSino.value == 3){
      price = pricebackup;

    }


    updatePrices(price);
    pricebackup2 = price;

  }

  ipSino.onchange = function(){

    

    if(ipSino.value == 2){
      price = price + 600;
      
    } 
    if (ipSino.value == 3){
      price = pricebackup2;

    }

    updatePrices(price);
    pricebackup3 = price;

  }

  premierSino.onchange = function(){

    if(premierSino.value == 2){
      price = price + 600;
      
    }
    if(premierSino.value == 3){
      price = price + 1600;
      
    }
    if (premierSino.value == 4){
      price = pricebackup3;

    }

    updatePrices(price);
    pricebackup4 = price;

  }


  contdesSino.onchange = function(){

    if(contdesSino.value == 2){
      price = price + 600;
      
    }

    if (contdesSino.value == 3){
      price = pricebackup4;

    }

    updatePrices(price);
   

  }


  

});




function updateUser() {


document.getElementById("userresume").innerHTML = usuario;



}
/*

  var usuario = document.getElementById("usuario");
  var userResume = document.getElementById("userresume");

function updatePrices(price) {
  const thePrices = document.querySelectorAll(".theprice");
  thePrices.forEach(function(thePrice) {
    thePrice.innerHTML = price + " $";
  });
}

*/