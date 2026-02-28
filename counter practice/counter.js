let increase = document.getElementById("incre-btn");
let decrease = document.getElementById("decre-btn");
let reset = document.getElementById("reset");
let counter = document.getElementById("counter")
let count = 0;

increase.onclick = function(){
    count++;
    counter.textContent = count;
}
decrease.onclick = function(){
    count--;
    counter.textContent = count;
}
reset.onclick = function(){
    count = 0;
    counter.textContent = count;
}