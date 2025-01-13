let count = 0;
let total = 0;
let finalCount = 0;

//function for the decrease button
document.getElementById("decreaseBtn").onclick = function () {
    count = count - 1;

    document.getElementById("counter").innerHTML = count
}


//function for the reset button
document.getElementById("resetBtn").onclick = function () {
    finalCount = total + count;
    count = 0;
    total = finalCount


    document.getElementById("counter").innerHTML = count
    document.getElementById("totalPass").innerHTML = finalCount
}


//function for the increase button
document.getElementById("increaseBtn").onclick = function () {
    count = count + 1;

    document.getElementById("counter").innerHTML = count
}


//function for the total reset button
document.getElementById("totalReset").onclick = function () {


    if (total = 0) {
        window.alert(`There are no Passengers Today`);
    } else {
        window.alert(`The Total Number of Passengers at The Train Station Today is ${total}`)
    }
    

    document.getElementById("totalPass").innerHTML = finalCount
    total = 0
    count = 0
}