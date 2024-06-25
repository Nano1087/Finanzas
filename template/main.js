document.addEventListener("DOMContentLoaded", function() {
const btn = document.querySelector("#btn");
const gastosHtml = document.querySelector('.table')
const form = document.querySelector("#form");
const filas = document.getElementById('filas');
const tabla = document.querySelector('.tabla');


const URL_API = 'http://localhost:3000/api/'

let ingresos = [];
let gastos = [];


//Gastos

// fomrulario 

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (descripcion.value !== "") {
     console.log("se ingreso un gasto");
     createGasto();
     const fecha = document.querySelector("#fecha").value;
     const descripcion = document.querySelector("#descripcion").value;
     const monto = document.querySelector("#monto").value;
     gastos.push({ fecha, descripcion, monto });
     form.reset();
    }
  });


   
 //  funcion para crear gastos

 function createGasto(){
  tabla.style.display = 'block'; // Mostrar el elemento
  
  let newHTMLCode = `<tr id="filas" class="filas">
     
  <td>${fecha.value}</td><td>${descripcion.value}</td><td>${monto.value}</td>
  </tr>`
 gastosHtml.insertAdjacentHTML('beforeend', newHTMLCode);

 saveGasto();
} 

//Enviar gasto a la base de datos
async function saveGasto() {
  var gasto = {
      "fecha":document.querySelector("#fecha").value,
      "descripcion" : document.querySelector("#descripcion").value,
      "monto" : document.querySelector("#monto").value
  }
  //console.log(gasto);

  var url = URL_API + "gasto";
  console.log(url);
  await fetch(url,{
    "method": 'POST',
    "body": JSON.stringify(gasto),
    "headers": {
      "Content-Type": 'application/json'
    }
  })
 // window.location.reload();}

};

//ingresos 

 // Modal elements
 const modal = document.getElementById("incomeModal");
 const openModalButton = document.getElementById("openModalButton");
 const closeModalButton = document.getElementsByClassName("close")[0];
 const incomeForm = document.getElementById('income-form');
 openModalButton.onclick = function() {
     modal.style.display = "block";
 }

 closeModalButton.onclick = function() {
     modal.style.display = "none";
 }

 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }

 

 incomeForm.addEventListener("submit", (e) => {
     e.preventDefault();

     const fecha = document.querySelector("#income-fecha").value;
     const descripcion = document.querySelector("#income-descripcion").value;
     const monto = document.querySelector("#income-monto").value;

     if (descripcion !== "" && monto !== "" && fecha !== "") {
         console.log("Se ingresó un ingreso");
         saveIngreso();
         ingresos.push({ fecha, descripcion, monto });
         incomeForm.reset();
         modal.style.display = "none";
     }
 });



  // Enviar ingreso a la base de datos

  async function saveIngreso() {
    var ingreso = {
        "fecha":document.querySelector("#income-fecha").value,
        "descripcion" : document.querySelector("#income-descripcion").value,
        "monto" : document.querySelector("#income-monto").value
    }
    console.log(ingreso);
  
    var url = URL_API + "ingreso";
    await fetch(url,{
      "method": 'POST',
      "body": JSON.stringify(ingreso),
      "headers": {
        "Content-Type": 'application/json'
      }
    })
   // window.location.reload();}
  
  };


 
});