const students = document.getElementById("student");
const nysc = document.getElementById("nysc");
const selfemployed = document.getElementById("selfemployed");
const employed = document.getElementById("employed");
const retired = document.getElementById("retired");
const unemployed = document.getElementById("unemployed");
const single = document.getElementById("single");
const married = document.getElementById("married");
const engaged = document.getElementById("engaged");
const talkingstage = document.getElementById("talkingstage");
const notinterested = document.getElementById("notinterested");
const myresult = document.getElementById("myresult");
const myoutcome = document.getElementById("myoutcome");
const submit = document.getElementById("submit");

submit.onclick = function() {
    if(students.checked){
        myresult.textContent = "you are a student";
    }
    else if(retired.checked){
        myresult.textContent = "you are retired";
    }
    else if(nysc.checked){
        myresult.textContent = "you are undergoing nysc";
    }
    else if(employed.checked){
        myresult.textContent = "you are employed";
    }
    else if(unemployed.checked){
        myresult.textContent = "you are unemployed";
    }
    else if(selfemployed.checked){
        myresult.textContent = "you are self employed";
    }
    if (single.checked){
        myoutcome.textContent = "you are still single";
    }
    else if (married.checked){
        myoutcome.textContent = "you are married";
    }
    else if(engaged.checked){
        myoutcome.textContent = "you are engaged";
    }
    else if(talkingstage.checked){
        myoutcome.textContent = "you are in a talking stage";
    }
    else if(notinterested.checked){
        myoutcome.textContent = "you are not interested";
    }
}