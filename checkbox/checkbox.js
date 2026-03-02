const students = document.getElementById("student");
const nysc = document.getElementById("nysc");
const selfemployed = document.getElementById("selfemployed");
const employed = document.getElementById("employed");
const retired = document.getElementById("retired");
const unemployed = document.getElementById("unemployed");
const single = document.getElementById("single");
const marrried = document.getElementById("marrried");
const engaged = document.getElementById("engaged");
const taking_stage = document.getElementById("talking_stage");
const not_interested = document.getElementById("not_interested");
const myresult = document.getElementById("myresult");
const myoutcome = document.getElementById("myoutcome");
const submit = document.getElementById("submit");
document.querySelectorAll(".occupation").forEach (r => r.checked = false);

submit.onclick = function(){
    if(students.checked){
        myresult.textContent = "you are a student"
    }
    else if(retired.checked){
        myresult.textContent = "you are retired"

    }
}