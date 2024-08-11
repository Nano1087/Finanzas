

const balance = document.getElementById('boton-balance');
let totalGasto = 0;
let totalIngreso = 0;
balance.addEventListener('click', async function(event) {
console.log(`El botón con ID ${event.target.id} fue clickeado`);
await gastoConsulta();
await ingresoConsulta();
calcular()
generarGrafico();
})

async function gastoConsulta(){
  const res = await fetch("http://localhost:3000/api/gasto/consulta");
  const resJson = await res.json();
  console.log(resJson);
  gastos = resJson;
  //console.log(gastos);
  totalGasto = gastos.reduce((acc, gasto) => acc + gasto.monto, 0);
  console.log(`El total de los gastos es: ${totalGasto}`);
  
}


async function ingresoConsulta(){
  const res = await fetch("http://localhost:3000/api/ingreso/consulta");
  const resJson = await res.json();
  console.log(resJson);
  gastos = resJson;
  //console.log(gastos);
  totalIngreso = gastos.reduce((acc, gasto) => acc + gasto.monto, 0);
  console.log(`El total de los ingreso es: ${totalIngreso}`);
  
}

function calcular(){

  console.log(totalGasto,totalIngreso);

  total = (totalIngreso-totalGasto);
  console.log(`El balance total es: ${total}`);
  alert(`El balance total es: ${total.toLocaleString('es-ES')}`)
  return total;
}

function generarGrafico(){
  const total = calcular();
  const ctx = document.getElementById('myChart').getContext('2d');
  const myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Ingresos', 'Gastos', 'Total'],
        datasets: [{
            data: [totalIngreso, totalGasto, total],
            backgroundColor: ['green', 'red', 'yellow'],
            hoverBackgroundColor: ['#389B3D', '#921313', '#DDAF3B']
        }]
    },

    options: {
      responsive: true,
      plugins: {
          legend: {
              position: 'top',
          },
          tooltip: {
              callbacks: {
                  label: function(context) {
                      let label = context.label || '';
                      if (label) {
                          label += ': ';
                      }
                      label += context.raw;
                      return label;
                  }
              }
          }
      }
  }
});
 /*  const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Gastos', 'Ingresos', 'Total'],
      datasets: [{
        label: 'Montos',
        data: [totalGasto, totalIngreso, total],
        backgroundColor: [
          'rgba(255, 0, 0, 0.2)',
          'rgba(119, 163, 69, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
     
    }
  });*/
}
 