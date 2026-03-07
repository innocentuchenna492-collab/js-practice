const input = document.getElementById("input");
const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const submit = document.getElementById("submit");
const result = document.getElementById("result");

let temp;


submit.onclick = function (){
    if(fahrenheit.checked){
        temp = Number(input.value);
        temp= (temp * 9/5) + 32;
        result.textContent = temp.toFixed(2) + "°F";      
    }
    else if(celsius.checked){
        temp = Number(input.value);
        temp = (temp - 32) * 5/9;
        result.textContent = temp.toFixed(2) + "°C";
    }
    else{
        result.textContent = "Please select a conversion type.";
    }
}