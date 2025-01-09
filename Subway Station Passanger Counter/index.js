let count = 0;

document.getElementById("increaseBtn").onclick = function () {
    count = count + 1;

    document.getElementById("counter").innerHTML = count
}