
const roll = document.getElementById("roll");
const result = document.getElementById("result");

let maxNum = 6;
let minNum = 1;
let code;

roll.onclick = function(){
    const input = document.getElementById("input").value;
    let output = " ";

    for (let i = 0; i < input; i++){
        code = Math.floor(Math.random()*(maxNum - minNum + 1)) + minNum;
        output += code + " ";
    }
    result.textContent = output;
}

