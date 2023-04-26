"use strict"

window.addEventListener("load", start);

function start() {
    console.log("JS kører");
    secondFunction();
}

function secondFunction() {
    console.log("anden funktion");
    fourthFunction();
}

function fourthFunction() {
    console.log("fjerde funktion");
}