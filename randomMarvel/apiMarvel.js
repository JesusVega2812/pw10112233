var nombrePersonaje = "";
var datos = [];

async function apiMarvel(){
    nombrePersonaje = document.getElementById("nombrePersonaje").value;
    const rsp = await fetch("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=67788e74df746a1523d8ebb504ee1008&hash=cf5ec9bfa5a156f031a69417cd0e012c&nameStartsWith="+nombrePersonaje);
    datos = await rsp.json();
    muestra();
}
function muestra(){
    //console.log(datos);
    let foto = document.getElementById("foto");
    let nombre = document.getElementById("nombre");
    let descripcion = document.getElementById("descripcion");
    let comics= document.getElementById("comics");
    foto.setAttribute("src",datos.data.results[0].thumbnail.path+"."+datos.data.results[0].thumbnail.extension); 
    nombre.innerHTML = datos.data.results[0].name;
    descripcion.innerHTML = datos.data.results[0].description;
    comics.innerHTML = datos.data.results[0].comics.available;
    
    
}