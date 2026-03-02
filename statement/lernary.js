const isonline = false;
const status = isonline ? "online" : "offline";
console.log(status);


const pass = 40;
const promotion = pass ? "pass" : "fail";
console.log(promotion);


const age = document.getElementById("age");
const submit = document.getElementById("submit");
const result = document.getElementById("result");

submit.onclick = function(){
    message = age.value >= 18 ? "you can vote" : "you can't vote";
    result.textContent = message;
}

let isloggedin; 
const message = isloggedin ? "welcome back" : "please log in"

console.log(message);