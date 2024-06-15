const btn = document.querySelector("#btn");
const gastosHtml = document.querySelector('.table')
const form = document.querySelector("#form");
const filas = document.getElementById('filas');
const tabla = document.querySelector('.tabla');


form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (descripcion.value !== "") {
     console.log("se ingreso un gasto");
     createGasto();
     const fecha = document.querySelector("#fecha").value;
     const descripcion = document.querySelector("#descripcion").value;
     const monto = document.querySelector("#monto").value;
     form.reset();
    }
  });


   
  

 function createGasto(){
  tabla.style.display = 'block'; // Mostrar el elemento
  
  let newHTMLCode = `<tr id="filas" class="filas">
     
  <td>${fecha.value}</td><td>${descripcion.value}</td><td>${monto.value}</td>
  </tr>`
  gastosHtml.innerHTML+=newHTMLCode;
} 