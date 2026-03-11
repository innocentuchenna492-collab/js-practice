submit.onclick = function() {
    const submit = document.getElementById("submit");
    const inputNum = document.getElementById("inputNum").value;
    const result = document.getElementById("result");
    let image = [];
    let outputs = [];
    let maxNum = 6;
    let minNum = 1;


    for (let i = 0; i < inputNum; i++){
    const value = Math.floor(Math.random () * (maxNum - minNum + 1)) + minNum;
    outputs.push(value);
    image.push(`<img src="assets/${value}.svg">`);
    }
        result.textContent = outputs.join(`: `) ;
}