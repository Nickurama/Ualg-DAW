"use strict";
function asynchronousRequest(args, callback) {
    // Throw an error if no arguments are passed
    if (!args) {
        return callback(new Error('Something went wrong.'));
    }
    else {
        return setTimeout(
        // error parameter of callback is null
        // returned object with body property = args + random number
        // delay 500ms
        () => callback(null, { body: args + ' ' + Math.floor(Math.random() * 10) }), 500);
    }
}
// Nested asynchronous requests
function callbackHell() {
    asynchronousRequest('Step1', function first(error, response) {
        if (error) {
            console.log(error);
            return;
        }
        console.log(response.body);
        asynchronousRequest('Step2', function second(error, response) {
            if (error) {
                console.log(error);
                return;
            }
            console.log(response.body);
            asynchronousRequest(null, function third(error, response) {
                if (error) {
                    console.log(error);
                    return;
                }
                console.log(response.body);
            });
        });
    });
}
callbackHell();