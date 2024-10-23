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
    if (cachedResponse) {
        console.error(`Cache hit for ${key}`);
        res.send(cachedResponse);
    }
    else {
        res.originalSend = res.send;
        res.send = body => {
            res.originalSend(body);
            cache.set(key, body, duration);
            return res;
        };
        next();
    }
};
