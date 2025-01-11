let count = 0;
let total = 0;

//function for the decrease button
document.getElementById("decreaseBtn").onclick = function () {
    count = count - 1;

    document.getElementById("counter").innerHTML = count
}


//function for the reset button
document.getElementById("resetBtn").onclick = function () {
    total = total + count;
    count = 0;


    document.getElementById("counter").innerHTML = count
    document.getElementById("totalPass").innerHTML = total
}


//function for the increase button
document.getElementById("increaseBtn").onclick = function () {
    count = count + 1;

    document.getElementById("counter").innerHTML = count
}


//function for the total reset button
document.getElementById("totalReset").onclick = function () {
    count = 0
    total = count;

    document.getElementById("totalPass").innerHTML = total
}