"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
http.createServer((inRequest, inResponse) => {
    inResponse.end("OwO :3");
}).listen(8080);
