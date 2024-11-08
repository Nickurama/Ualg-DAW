"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_cache_1 = __importDefault(require("node-cache"));
const cache = new node_cache_1.default();
// function returns a function!
exports.default = (duration) => (req, res, next) => {
    if (req.method != "GET") {
        console.log("Cannot cache non-Get methods!");
        return next();
    }
    const key = req.originalUrl;
    const cachedResponse = cache.get(key);
    if (cachedResponse) { // if is in cache
        console.error(`Cache hit for ${key}`);
        res.send(cachedResponse);
    }
    else { // if is not in cache
        res.originalSend = res.send; // gets the original send function
        res.send = body => {
            // this is the new send whenever it is ran
            res.originalSend(body); // executes the original send function
            cache.set(key, body, duration); // sets the cache when it called
            return res;
        };
        next(); // calls next middleware
    }
};
