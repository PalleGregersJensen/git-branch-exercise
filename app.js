"use strict"

window.addEventListener("load", start);

function start() {
    console.log("JS kører");
    secondFunction();
}

function secondFunction() {
    console.log("anden funktion");
    thirdFunction();
}

function thirdFunction() {
    console.log("tredje funktion");
}