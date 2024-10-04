"use strict";
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Job well done!");
    }, 1000); // resolves after 1000ms; simulates some call
    //reject("Job not done!") // should reject
});
const myPaymentPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(200);
    }, 1000); // 200 euro payment
    //reject(0) // 0 euro payment
});
myPromise
    .then(() => myPaymentPromise.then(res => console.log('OK! ' + res + " Euros")))
    .catch(error => console.log('NOT OK!' + error));
