const spin = document.getElementById("spin");
const roll1 = document.getElementById("roll1");
const roll2 = document.getElementById("roll2");
const roll3 = document.getElementById("roll3");
let randomNum1;
let randomNum2;
let randomNum3;
let max = 6;
let min = 1;

spin.onclick = function (){
    randomNum1 = Math.floor(Math.random () *max) + min;
    randomNum2 = Math.floor(Math.random () *max) + min;
    randomNum3 = Math.floor(Math.random () *max) + min;
    roll1.textContent = randomNum1;
    roll2.textContent = randomNum2;
    roll3.textContent = randomNum3;
}