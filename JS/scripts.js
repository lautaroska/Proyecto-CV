
//------------- DEFINICION DE CONSTANTES ----------------------------------

const nombre = document.querySelector("#nombre");
const mail = document.querySelector("#mail");
const celular = document.querySelector("#celular");
const ciudad = document.querySelector("#ciudad");
const edad = document.querySelector("#edad");
const fotoperfil = document.querySelector("#fotoperfil");
const pais = document.querySelector("#pais");
const empresa = document.querySelector("#empresa");
const celuref = document.querySelector("#celuref");

var generofoto = "aaa";
var generodata = "aaa";


//--Datos random para el CV-----------------------------------------------
//1° ESTABLECEMOS EL GENERO DEL USUARIO EN MODO ALEATORIO

function genero() { /*generador aleatorio de genero de perfil*/
    var x = Math.floor(Math.random()*10);
    console.log("el numero al azar es " + x);
    
    if ((x % 2) == 0){
        console.log("el genero al azar es male");
        return "male";
    } else {
        console.log("el genero al azar es female");
        return "female";
    }
}

//2° CON EL GENERO DEFINIDO, ASIGNAMOS LAS URL PARA LAS API DE DATOS

if (genero() == "male") {
    generodata = "https://randomuser.me/api/?gender=male&nat=ES";
    generofoto = "https://xsgames.co/randomusers/avatar.php?g=male";

} else {
    generodata = "https://randomuser.me/api/?gender=female&nat=ES";
    generofoto = "https://xsgames.co/randomusers/avatar.php?g=female";
}

console.log("url de la data es " + generodata);
console.log("url de la foto es " + generofoto);

//3° SE ESTABLECE LA FOTO DEL PERFIL
fotoperfil.src = generofoto; 


//4° SE TOMAN LOS DATOS DE LA API RANDOMUSER.me SEGUN EL GENERO ELEGIDO ANTERIORMENTE

window.onload = async function generardatos() {
    try {
        const randomuserurl = generodata;
        const respuesta = await fetch(randomuserurl);
        const { results } = await respuesta.json(); // me devuleve un obj con la propiedad result 
        const datosrandom = results[0]; //en results guarda un array donde en su pos 0 tiene los datos random

        nombre.textContent = datosrandom.name.first +" "+ datosrandom.name.last;
        mail.textContent = datosrandom.email;
        celular.textContent = datosrandom.cell;
        ciudad.textContent = datosrandom.location.city;
        pais.textContent = datosrandom.location.country;
        edad.textContent = datosrandom.dob.age;
        celuref.textContent = datosrandom.phone;

        console.log ("Información aleatoria cargada exitosamente");
    
    } catch {
        const errorrandomuser = "No se pudo cargar el dato";
        
        nombre.textContent = errorrandomuser;
        mail.textContent = errorrandomuser;
        celular.textContent = errorrandomuser;
        ciudad.textContent = errorrandomuser;
        pais.textContent = errorrandomuser;
        edad.textContent = errorrandomuser;
        celuref.textContent = errorrandomuser;
        
        console.log ("No se pudo conectar con randomuser.me");
        alert ("No se pudo conectar con randomuser.me");
    }
}


// ------BOTÓN MENÚ EN PANTALLA SMALLER------------ //
var menu = "Menu desplegable cerrado";

document.getElementById("menu-btn").onclick = function(){
    if (menu == "Menu desplegable cerrado") {
        document.getElementById("id-menu-icon").classList.remove("fa-bars");
        document.getElementById("id-menu-icon").classList.add("fa-xmark");
        
        var menudesplegado = document.getElementsByClassName("item-de-barra");
            for (var e = 0; e<menudesplegado.length; e++) {
                menudesplegado[e].classList.add("visible");
            }
        
        menu = "Menu desplegable abierto";
        console.log(menu);
    } 
    else if (menu == "Menu desplegable abierto") {
        document.getElementById("id-menu-icon").classList.remove("fa-xmark");
        document.getElementById("id-menu-icon").classList.add("fa-bars");
        
        var menudesplegado = document.getElementsByClassName("item-de-barra");
            for (var e = 0; e<menudesplegado.length; e++) {
                menudesplegado[e].classList.remove("visible");
            }
        menu = "Menu desplegable cerrado";
        console.log(menu);
    }
    else { 
        console.log("Error en el menú desplegable");
    }
}


//-------------- MODO NOCHE - MODO DIA (EN SECTION) -------------------

var modo = "Modo Día";

 // Habilitar modo día
document.getElementById("btn-modo-dia").onclick = function(){
    if (modo == "Modo Noche") {
        var darkmode = document.getElementsByClassName("datos-laborales"); //quita la clase "noche" de las etiquetas seleccionados
        for (var i = 0; i<darkmode.length; i++) {
            darkmode[i].classList.remove("noche");
            }
        
        document.getElementById("btn-modo-noche").classList.remove("activo"); //cambia de posición el switch de modo noche
        document.getElementById("btn-modo-dia").classList.add("activo");
        
        modo = "Modo Día" //señala el modo y lo confirma en consola
        console.log(modo + " activado");
    } else {
        console.log("No responde porque Modo Día ya se encuentra activado");
    }
}

 // Habilitar modo noche
document.getElementById("btn-modo-noche").onclick = function(){
    if (modo == "Modo Día") {
        var darkmode = document.getElementsByClassName("datos-laborales"); //agrega la clase "noche" a las etiquetas seleccionados
        for (var i = 0; i<darkmode.length; i++) {
            darkmode[i].classList.add("noche");
            }
        
        document.getElementById("btn-modo-dia").classList.remove("activo"); //cambia de posición el switch de modo noche
        document.getElementById("btn-modo-noche").classList.add("activo");
        
        modo = "Modo Noche" //señala el modo y lo confirma en consola
        console.log(modo + " activado");
    } else {
        console.log("No responde porque Modo Noche ya se encuentra activado");
    }
}

