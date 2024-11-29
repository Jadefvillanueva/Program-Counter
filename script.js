
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const label = document.getElementById("label");

let countLabel = 0;

increase.onclick = function(){
countLabel++;
label.textContent = countLabel;
}

decrease.onclick = function(){
    countLabel--;
    label.textContent = countLabel;
}

reset.onclick = function(){
    countLabel = 0;
    label.textContent = countLabel;
    }
    