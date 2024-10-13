"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_events_1 = require("node:events");
const myEmitter = new node_events_1.EventEmitter();
// First listener
myEmitter.on('event', function firstListener() {
    console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
    console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
    const parameters = args.join(', ');
    console.log(`event with parameters ${parameters} in third listener`);
});
console.log(myEmitter.listeners('event'));
myEmitter.emit('event', 1, 2, 3, 4, 5);
