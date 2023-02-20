
/* DEFINICION DE CONSTANTES */

const nombre = document.querySelector("#nombre");
const mail = document.querySelector("#mail");
const celular = document.querySelector("#celular");
const ciudad = document.querySelector("#ciudad");
const edad = document.querySelector("#edad");
const fotoperfil = document.querySelector("#fotoperfil");
const pais = document.querySelector("#pais");
const empresa = document.querySelector("#empresa");
const celuref = document.querySelector("#celuref");

/* VARIABLES PARA LAS FUNCIONES DE OBTENCION DE DATOS RANDOM */

var generofoto = "aaa";
var generodata = "aaa";


/* ESTABLECEMOS EL GENERO DEL USUARIO EN MODO ALEATORIO */

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

/*CON EL GENERO DEFINIDO, ASIGNAMOS LAS URL PARA LAS API DE DATOS */

if (genero() == "male") {
    generodata = "https://randomuser.me/api/?gender=male&nat=ES";
    generofoto = "https://xsgames.co/randomusers/avatar.php?g=male";

} else {
    generodata = "https://randomuser.me/api/?gender=female&nat=ES";
    generofoto = "https://xsgames.co/randomusers/avatar.php?g=female";
}

console.log("url de la data es " + generodata);
console.log("url de la foto es " + generofoto);

/* SE ESTABLECE LA FOTO DEL PERFIL */
fotoperfil.src = generofoto; 


/* SE TOMAN LOS DATOS DE LA API RANDOMUSER.me SEGUN EL GENERO ELEGIDO ANTERIORMENTE */
window.onload = async function generardatos() {
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
}


/* LINK YOUTUBE DEL VIDEO CV CON EL BOTON DE FLECHA */

document.getElementById("cv-btn").addEventListener("click", videocv);

function videocv() {
    window.open("https://www.youtube.com/watch?v=kZ3dF-HpICg");
}

