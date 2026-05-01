let numerosCantados = [];

function entrar(){

let carton = [
5,18,33,46,70,
2,20,31,55,61,
14,22,"FREE",52,66,
8,27,40,57,73,
12,19,35,48,64
];

mostrarCarton(carton);

}

function mostrarCarton(datos){

let html="";

datos.forEach(n=>{

html += `<div class="casilla" id="n${n}">${n}</div>`;

});

document.getElementById("carton").innerHTML = html;

}

function cantarNumero(num){

numerosCantados.push(num);

document.getElementById("cantados").innerHTML += num + " - ";

let casilla = document.getElementById("n"+num);

if(casilla){
casilla.classList.add("marcado");
}

}
