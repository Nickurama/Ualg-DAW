import { getSomeUsers, getAllUsers, transformationOne } from "./externalAPI"
import express, { Router, Request, Response, NextFunction } from "express";
const router: Router = express.Router();

import cache from "./cachingRoutes";

declare const fetch: any;

// router.get("/", (req: Request, res: Response) => {
// router.get("/", async (req: Request, res: Response, next: NextFunction) => {
// the cache(10) will return a function
router.get("/", cache(10), async (req: Request, res: Response, next: NextFunction) => {
	// res.send("all users!");
	try {
		const data = await getAllUsers();

		// TRANSFORM
		const arr = Object.entries(data).map(transformationOne);

		// we cannot use send because we want to execute the next
		// middleware and if you used send, other middlewares
		// wouldn't be used
		console.log(arr);
		res.json(arr);
	} catch (err) {
		next(err);
	}
});

// router.get("/city/:nameCity", (req: Request, res: Response) => {
router.get("/city/:nameCity", async (req: Request, res: Response, next: NextFunction) => {
	// res.send(`users from city ${req.params.nameCity}`);
	try {
		const data = await getSomeUsers(req.params.nameCity);

		// TRANSFORM
		const arr = Object.entries(data).map(transformationOne);

		res.json(arr);
	} catch (err) {
		next(err);
	}
});

export default router;
