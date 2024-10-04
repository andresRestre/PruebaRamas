const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const bodyParser=require('body-parser')


//creamos server
const app = express();

//configurar en mongoDB
const connectDB =async()=>{
try {
    await mongoose.connect('mongodb://localhost:27017/restapis')
console.log('Conexion exitosa a mongoDB')
} catch (error) {
    console.log('Error en conexion a mongoDB',error) 
}

}

//llamar funcion
connectDB();


//habilitaar body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))



//agregamos rutas
app.use('/',routes())



//puerto
app.listen(3000);