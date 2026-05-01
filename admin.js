let usados=[];

function sortear(){

let n;

do{
n=Math.floor(Math.random()*75)+1;
}while(usados.includes(n));

usados.push(n);

document.getElementById("numero").innerText=n;
localStorage.setItem("ultimo",n);

}

setInterval(()=>{

let u=localStorage.getItem("ultimo");

if(document.getElementById("cantado")){
document.getElementById("cantado").innerText=u;
}

},1000);

function crearCartilla(){

let nums=[];

while(nums.length<25){
let n=Math.floor(Math.random()*75)+1;
if(!nums.includes(n)) nums.push(n);
}

return nums;
}
