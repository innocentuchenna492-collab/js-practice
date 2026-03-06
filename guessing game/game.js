const minNum = 50;
const maxNum = 101;
const userinput = Math.floor(Math.random()*(maxNum - minNum + 1)) + minNum;

let guess;
let attempts = 0;
let running = true;

while(running){
    guess = window.prompt(`Enter a number between ${maxNum} - ${minNum}`);
    guess = Number(guess);
    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("Please enter a valid number");
    }
    else{
        attempts ++;
        if(guess < userinput){
            window.alert("TO LOW! TRY AGAIN");
        }
        else if(guess > userinput){
            window.alert("TOO HIGH!, TRY AGAIN");
        }
        else{
            window.alert(`CONGRATULATION!! YOU WON after ${attempts} attempts`);
            running = false;
        }

    }

}