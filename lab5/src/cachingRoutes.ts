import NodeCache from "node-cache";
import { Request, Response, NextFunction } from "express";

const cache = new NodeCache();

interface CustomResponse extends Response { // a new option property is added to the Response
	originalSend?: any;
}

// function returns a function!
export default (duration: number) => (req: Request, res: CustomResponse, next: NextFunction) => {
	if (req.method != "GET") {
		console.log("Cannot cache non-Get methods!");
		return next();
	}
	const key = req.originalUrl;
	const cachedResponse = cache.get(key);

	if (cachedResponse) { // if is in cache
		console.error(`Cache hit for ${key}`);
		res.send(cachedResponse);
	} else { // if is not in cache
		res.originalSend = res.send; // gets the original send function
		res.send = body => { // makes a function to "extend" send
			// this is the new send whenever it is ran
			res.originalSend(body); // executes the original send function
			cache.set(key, body, duration); // sets the cache when it called
			return res;
		};
		next(); // calls next middleware
	}
}
