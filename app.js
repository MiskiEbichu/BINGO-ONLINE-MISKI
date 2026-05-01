let cantados=[];

function entrar(){
crearCartilla();
}

function crearCartilla(){

let html="";

for(let i=1;i<=25;i++){
let n=Math.floor(Math.random()*75)+1;
html+=`<div class="casilla" id="n${n}">${n}</div>`;
}

document.getElementById("cartilla").innerHTML=html;
}

function cantarNumero(num){

cantados.push(num);

document.getElementById("cantados").innerHTML+=num+" ";

let casilla=document.getElementById("n"+num);

if(casilla){
casilla.classList.add("activo");
}

let audio=new Audio("https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg");
audio.play();
}

function reclamar(){
alert("🎉 Bingo reclamado");
}
