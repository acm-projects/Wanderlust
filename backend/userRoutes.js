const express = require("express");
const database = require("./connect");
const ObjectId = require("mongodb").ObjectId;

let userRoutes = express.Router();

// #1 - Retrieve All
userRoutes.route("/users").get(async (request, response) => {
	let db = database.getDb();
	let data = await db.collection("users").find({}).toArray();
	if (data.length > 0) {
		response.json(data);
	} else {
		response.status(404).json({ error: "Data not found" });
	}
});

// #2 - Retrieve One
userRoutes.route("/users/:id").get(async (request, response) => {
	let db = database.getDb();
	let data = await db
		.collection("users")
		.findOne({ _id: new ObjectId(request.params.id) });
	if (Object.keys(data).length > 0) {
		response.json(data);
	} else {
		response.status(404).json({ error: "Data not found" });
	}
});

// #3 - Create One
userRoutes.route("/users").post(async (request, response) => {
	let db = database.getDb();
	let mongoObject = {
		email: request.body.email,
		password: request.body.password,
		username: request.body.username,
		bio: request.body.bio,
		age: request.body.age,
		ratings: request.body.ratings,
		friends: request.body.friends,
		following: request.body.following,
		createdPosts: request.body.createdPosts,
		savedPosts: request.body.savedPosts,
		notifications: request.body.notifications,
		interests: request.body.interests,
	};
	let data = await db.collection("users").insertOne(mongoObject);
	response.json(data);
});

// #4 - Update One
userRoutes.route("/users/:id").put(async (request, response) => {
	let db = database.getDb();
	let mongoObject = {
		$set: {
			email: request.body.email,
			password: request.body.password,
			username: request.body.username,
			bio: request.body.bio,
			age: request.body.age,
			ratings: request.body.ratings,
			friends: request.body.friends,
			following: request.body.following,
			createdPosts: request.body.createdPosts,
			savedPosts: request.body.savedPosts,
			notifications: request.body.notifications,
			interests: request.body.interests,
		},
	};
	let data = await db
		.collection("users")
		.updateOne({ _id: new ObjectId(request.params.id) }, mongoObject);
	response.json(data);
});

// #5 - Delete One
userRoutes.route("/users/:id").delete(async (request, response) => {
	let db = database.getDb();
	let data = await db
		.collection("users")
		.deleteOne({ _id: new ObjectId(request.params.id) });
	response.json(data);
});

// #6 - Retrieve One (Get all user's following ids)
userRoutes.route("/get/following/:id").get(async (request, response) => {
	let db = database.getDb();
	let data = await db
		.collection("users")
		.findOne(
			{ _id: new ObjectId(request.params.id) },
			{
				projection: {
					following: 1,
				},
			}
		)
		.toArray();
	if (data) {
		response.json(data.following);
	} else {
		response.status(404).json({ error: "User not found" });
	}
});

module.exports = userRoutes;
