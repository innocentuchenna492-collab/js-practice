const input = document.getElementById("input");
const roll = document.getElementById("roll");
const result = document.getElementById("result");
let maxNum = 6;
let minNum = 1;
let code;

roll.onclick = function(){
    code = Math.floor(Math.random()*(maxNum - minNum + 1)) + minNum;
    result.textContent = code;
}
