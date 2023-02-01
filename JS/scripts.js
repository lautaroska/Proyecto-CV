
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const mail = document.querySelector("#mail");
const celular = document.querySelector("#celular");
const ciudad = document.querySelector("#ciudad");
const edad = document.querySelector("#edad");
const fotoperfil = document.querySelector("#fotoperfil");
const pais = document.querySelector("#pais");
const empresa = document.querySelector("#empresa");
const celuref = document.querySelector("#celuref");


window.onload = async function generardatos() {
    const randomuserurl = "https://randomuser.me/api/?nat=es"; //recurrimos esta url y le pedimos datos random de personajes españoles (es)
    const respuesta = await fetch(randomuserurl);
    const { results } = await respuesta.json(); // me devuleve un obj con la propiedad result 
    const datosrandom = results[0]; //en results guarda un array donde en su pos 0 tiene los datos random

    nombre.textContent = datosrandom.name.first;
    apellido.textContent = datosrandom.name.last;
    mail.textContent = datosrandom.email;
    celular.textContent = datosrandom.cell;
    ciudad.textContent = datosrandom.location.city;
    pais.textContent = datosrandom.location.country;
    edad.textContent = datosrandom.dob.age;
    empresa.textContent = datosrandom.location.state;
    celuref.textContent = datosrandom.phone;
    fotoperfil.src = datosrandom.picture.large;

}

document.getElementById("botoncv").addEventListener("click", videocv);

function videocv() {
    window.open("https://www.youtube.com/watch?v=kZ3dF-HpICg");
}