import path from "path";
import express, { Express, NextFunction, Request, Response } from "express";

import { serverInfo } from "./serverInfo";
import * as SMTP from "./SMTP";
import * as Contacts from "./contacts";
import { IContact } from "./contacts";

const app: Express = express();
app.use(express.json());

// RESTful endpoint that the client can call
app.use("/",
	express.static(path.join(__dirname, "../../client/dist"))
);

// CORS security mechanism
app.use(function(inRequest: Request, inResponse: Response, inNext: NextFunction) {
	inResponse.header("Access-Control-Allow-Origin", "*");
	inResponse.header("Access-Control-Allow-Methods", "GET,POST,DELETE,OPTIONS");
	inResponse.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
	inNext();
})

// endpoint used to send messages
app.post("/messages",
	async (inRequest: Request, inResponse: Response) => {
		try {
			const smtpWorker: SMTP.Worker = new SMTP.Worker(serverInfo);
			await smtpWorker.sendMessage(inRequest.body); // object created by express.json middleware
			inResponse.send("ok");
		} catch (inError) {
			inResponse.send("error");
		}
	}
);

// endpoind used to get list of contacts
app.get("/contacts",
	async (inRequest: Request, inResponse: Response) => {
		try {
			const contactsWorker: Contacts.Worker = new Contacts.Worker();
			const contacts: IContact[] = await contactsWorker.listContacts();
			inResponse.json(contacts); // serialize object into JSON
		} catch (inError) {
			inResponse.send("error");
		}
	}
);

// endpoint used to add a contact to contacts list
app.post("/contacts",
	async (inRequest: Request, inResponse: Response) => {
		try {
			const contactsWorker: Contacts.Worker = new Contacts.Worker();
			const contact: IContact = await contactsWorker.addContact(inRequest.body);
			inResponse.json(contact); // for client acknowledgement and future use (includes ID)
		} catch (inError) {
			inResponse.send("error");
		}
	}
);

// endpoint used to delete a specific contact
app.delete("/contacts/:id",
	async (inRequest: Request, inResponse: Response) => {
		try {
			const contactsWorker: Contacts.Worker = new Contacts.Worker();
			await contactsWorker.deleteContact(inRequest.params.id);
			inResponse.send("ok");
		} catch (inError) {
			inResponse.send("error");
		}
	}
);

app.listen(8080);
