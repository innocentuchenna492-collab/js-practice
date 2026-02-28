const spin = document.getElementById("spin");
const roll = document.getElementById("roll");
let randomNum;
let max = 6;
let min = 1;

spin.onclick = function (){
    randomNum = Math.floor(Math.random () *max) + min;
    roll.textContent = randomNum;
}