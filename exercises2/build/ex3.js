"use strict";
function first() {
    console.log(1);
}
function second() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(2);
            resolve();
        }, 1000);
    });
}
function third() {
    console.log(3);
}
first();
second().then(third);
