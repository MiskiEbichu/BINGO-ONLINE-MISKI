function sortear(){

let n=Math.floor(Math.random()*75)+1;

document.getElementById("numero").innerText=n;

localStorage.setItem("numeroActual",n);

}
