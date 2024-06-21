const express = require('express');
//const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
//const database = require("./database");
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


  app.post('/api/gastos', (req, res) => {
    const nuevoGasto = new Gasto(req.body);
    nuevoGasto.save((err, gasto) => {
        if (err) return res.status(500).send(err);
        res.status(200).send(gasto);
    });
});

app.post('/api', (req, res) => {
  const gasto = req.body.monto;
  console.log(gasto);
  
 
});

app.get('/', (req, res) => {    
  res.json(
      {
          "Title": "Hola mundo"
      }
  );
})