'use strict'
let data2 = 1;
document.querySelector("#counting2").innerText = data2;

function increment() {
    if (data2 > 1) {
        data2 = data2 - 1;
        document.querySelector("#counting2").innerText = data2;
    }
}
function decrement() {
    data2 = data2 + 1;
    document.querySelector("#counting2").innerText = data2;
}