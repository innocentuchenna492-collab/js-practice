const myusername = document.getElementById("myusername");
const mypassword = document.getElementById("mypassword");
const submit = document.getElementById("submit");
const welcome = document.getElementById("welcome");

submit.onclick = function(){
    while(true){
        if(myusername.value === "Yellowston" && mypassword.value === "nation10"){
            welcome.textContent = "Welcome back Yellowston";
            break;
        }
        else{
            welcome.textContent = "invalid username and password";
            break;
        }
    }
}