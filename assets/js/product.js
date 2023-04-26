'use strict'
let data = 1;
document.querySelector("#counting").innerText = data;

function increment() {
    if (data > 1) {
        data = data - 1;
        document.querySelector("#counting").innerText = data;
    }
}
function decrement() {
    data = data + 1;
    document.querySelector("#counting").innerText = data;
}