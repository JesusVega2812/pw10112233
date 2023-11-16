var express = require("express");
var mysql = require("mysql");
var app = express(); //ejecuta el constuctor

//configurar conexion a MySql
var conenexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pw1011'
});

//Probamos la conexion
conenexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log("conectado a la base de datos")
    }
});

app.get('/api/alumnos/:id',(req,res) => {
    conenexion.query("select * from alu where ncontrol = ? limit 1",[req.params.id],(error,fila) =>{
        if(error){
            throw error
        }else{
            res.send(fila)
        }
    })
});

app.get("/",function(req,res){
    res.send("<h1>Ruta de inicio principal<h1/>")
});

app.get('/api/alumnos',(req,res) => {
    conenexion.query("select * from alu",(error,filas) => {
        if(error){
            throw error;
        }else{
            res.send(filas);
        }
    });
})

//Crear el servidor
app.listen("3000",function(){
    console.log("Servidor en el puerto 3000 ")
});