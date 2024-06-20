const express = require('express');
//const bodyParser = require('body-parser');
//const morgan = require('morgan');
const app = express();


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