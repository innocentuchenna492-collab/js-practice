const food1 = "rice";
const food2 = "beans";
const food3 = "garri";
const food4 = "fish";
const food5 = "meat";
const food6 = "egusi";

function foodstack (...foodcombo){
    console.log(...foodcombo);
}
foodstack(food1, food2, food3, food4, food5, food6);