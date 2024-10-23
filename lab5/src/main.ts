// === MAIN v1 ===
// import {getSomeUsers} from "./externalAPI";
//
// async function doAll() {
// 	const data = await getSomeUsers("Roscoeview");
// 	console.log(data);
// }
//
// doAll();

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
import express, { Express } from "express";
import router from "./routes";
import compression from "compression";

const app: Express = express();

// mount the router on the app
app.use(compression()); // returns a function - all middlewares are functions
app.use("/users", router);
app.listen(8080);
