var mysql = require('mysql');
const dotenv = require('dotenv').config()
const host = process.env.HOST;
const user = process.env.USER;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;

var con = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connectado a base de datos");
  });



  module.exports ={
    con
}