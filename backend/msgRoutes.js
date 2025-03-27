const express = require("express");
const database = require("./connect");
const ObjectId = require("mongodb").ObjectId;

let msgRoutes = express.Router();

// #1 - Retrieve All
msgRoutes.route("/msgs").get(async (request, response) => {
	let db = database.getDb();
	let data = await db.collection("msgs").find({}).toArray();
	if (data.length > 0) {
		response.json(data);
	} else {
		response.status(404).json({ error: "Data not found" });
	}
});
// #2 - Retrieve One
msgRoutes.route("/msgs/:id").get(async (request, response) => {
	let db = database.getDb();
	let data = await db
		.collection("msgs")
		.findOne({ _id: new ObjectId(request.params.id) });
	if (Object.keys(data).length > 0) {
		response.json(data);
	} else {
		response.status(404).json({ error: "Data not found" });
	}
});
// #3 - Create One
msgRoutes.route("/msgs").post(async (request, response) => {
	let db = database.getDb();
	let mongoObject = {
		dates: request.body.dates,
		messages: request.body.messages,
		users: request.body.users,
	};
	let data = await db.collection("msgs").insertOne(mongoObject);
	response.json(data);
});
// #4 - Update One
msgRoutes.route("/msgs/:id").put(async (request, response) => {
	let db = database.getDb();
	let mongoObject = {
		$set: {
			dates: request.body.dates,
			messages: request.body.messages,
			users: request.body.users,
		},
	};
	let data = await db
		.collection("msgs")
		.updateOne({ _id: new ObjectId(request.params.id) }, mongoObject);
	response.json(data);
});
// #5 - Delete One
msgRoutes.route("/msgs/:id").delete(async (request, response) => {
	let db = database.getDb();
	let data = await db
		.collection("msgs")
		.deleteOne({ _id: new ObjectId(request.params.id) });
	response.json(data);
});

module.exports = msgRoutes;
