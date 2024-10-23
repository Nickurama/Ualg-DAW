"use strict";
// === MAIN v1 ===
// import {getSomeUsers} from "./externalAPI";
//
// async function doAll() {
// 	const data = await getSomeUsers("Roscoeview");
// 	console.log(data);
// }
//
// doAll();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// === MAIN v2 ===
// import express, { Express } from "express";
// import router from "./routes";
//
// const app: Express = express();
//
// // mount the router on the app
// app.use("/users", router);
// app.listen(8080);
//
// // http://127.0.0.1:8080/users/
// // or
// // http://127.0.0.1:8080/users/city/Roscoeview
// // should work!
// === MAIN v3 ===
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const compression_1 = __importDefault(require("compression"));
const app = (0, express_1.default)();
// mount the router on the app
app.use((0, compression_1.default)()); // returns a function - all middlewares are functions
app.use("/users", routes_1.default);
app.listen(8080);
