const grade = document.getElementById("grade");
const result = document.getElementById("result");
const submit = document.getElementById("submit")

submit.onclick = function(){
    score = Number(grade.value);
    switch(true){
        case score >= 80:
            result.textContent = "you got an A";
            break;
        case score >= 70:
            result.textContent= "you got a B";
            break;
        case score >= 66:
            result.textContent = "you got an C";
            break;
        case score >= 55:
            result.textContent= "you got a D"
            break;
        case score >= 45:
            result.textContent = "you got an E";
            break;
        case score <= 44:
            result.textContent= "you got an F"
            break;
    }
}