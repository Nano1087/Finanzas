const express = require('express');
//const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const {con} = require('./db');
const cors = require("cors")



//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)
 
//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors({
  origin: ["http://127.0.0.1:5501","http://127.0.0.1:5500"]
}))


//server
app.listen(3000, () => {
    console.log('Servidor Express escuchando en el puerto 3000');
  });


 //Rutas

app.post('/api/gasto', async(req, res) => {
  const gasto = await req.body;
  console.log(gasto.descripcion);
  con.query("SELECT * FROM gasto", function (err, result, fields) {
    if (err) throw err;
    //console.log(result);
           });
 var query = "INSERT INTO `app_finanzas`.`gasto` ( `fecha`, `descripcion`, `monto`) VALUES ('" + gasto.fecha + "', '" + gasto.descripcion + "', '" + gasto.monto + "');"
  con.query(query, function (err, result, fields){
    if (err) throw err;
           });
});

app.post('/api/ingreso', async(req, res) => {
  const ingreso = await req.body;
  console.log(ingreso.descripcion);
  con.query("SELECT * FROM ingreso", function (err, result, fields) {
    if (err) throw err;
    //console.log(result);
           });
 var query = "INSERT INTO `app_finanzas`.`ingreso` ( `fecha`, `descripcion`, `monto`) VALUES ('" + ingreso.fecha + "', '" + ingreso.descripcion + "', '" + ingreso.monto + "');"
  con.query(query, function (err, result, fields){
    if (err) throw err;
           });
});



app.get('/api/balance', (req, res) => {    
  /* res.json(
      {
          "Title": "Hola mundo"
      }
  ); */
})


app.get('/api/gasto/consulta', async(req, res) => {

con.query("SELECT * FROM gasto ", (err, result) =>{
  if (err) throw err;
  res.json(result);
  //console.log(result);
  })


})


app.get('/api/ingreso/consulta', async(req, res) => {

  con.query("SELECT * FROM ingreso ", (err, result) =>{
    if (err) throw err;
    res.json(result);
    //console.log(result);
    })
  
  
  })