const express = require("express");
const database = require("./connect");
const ObjectId = require("mongodb").ObjectId;

let postRoutes = express.Router();

// #1 - Retrieve All
postRoutes.route("/posts").get(async (request, response) => {
	let db = database.getDb();
	let data = await db.collection("posts").find({}).toArray();
	if (data) {
		response.json(data);
	} else {
		response.status(404).json({ error: "Data not found" });
	}
});
// #2 - Retrieve One
postRoutes.route("/posts/:id").get(async (request, response) => {
	let db = database.getDb();
	let data = await db
		.collection("posts")
		.findOne({ _id: new ObjectId(request.params.id) });
	if (data) {
		response.json(data);
	} else {
		response.status(404).json({ error: "Data not found" });
	}
});
// #3 - Create One
postRoutes.route("/posts").post(async (request, response) => {
	let db = database.getDb();
	let mongoObject = {
		userID: request.body.userID,
		author: request.body.author,
		title: request.body.title,
		locations: request.body.locations,
		description: request.body.description,
		uploads: request.body.uploads,
		rated: request.body.rated,
		rating: request.body.rating,
		allRatings: request.body.allRatings,
		numRatings: request.body.numRatings,
		review: request.body.review,
		allReviews: request.body.allReviews,
		tags: request.body.tags,
		bestTime: request.body.bestTime,
		duration: request.body.duration,
		likes: request.body.likes,
		liked: request.body.liked,
		saved: request.body.saved,
		comments: request.body.comments,
		budget: request.body.budget,
		createdAt: new Date(),
		updatedAt: new Date(),
	};
	let data = await db.collection("posts").insertOne(mongoObject);
	response.json(data);
});
// #4 - Update One
postRoutes.route("/posts/:id").put(async (request, response) => {
	let db = database.getDb();
	let mongoObject = {
		$set: {
			title: request.body.title,
			locations: request.body.locations,
			description: request.body.description,
			uploads: request.body.uploads,
			rated: request.body.rated,
			rating: request.body.rating,
			allRatings: request.body.allRatings,
			numRatings: request.body.numRatings,
			review: request.body.review,
			allReviews: request.body.allReviews,
			tags: request.body.tags,
			bestTime: request.body.bestTime,
			duration: request.body.duration,
			likes: request.body.likes,
			liked: request.body.liked,
			saved: request.body.saved,
			comments: request.body.comments,
			budget: request.body.budget,
			updatedAt: new Date(),
		},
	};
	let data = await db
		.collection("posts")
		.updateOne({ _id: new ObjectId(request.params.id) }, mongoObject);
	response.json(data);
});
// #5 - Delete One
postRoutes.route("/posts/:id").delete(async (request, response) => {
	let db = database.getDb();
	let data = await db
		.collection("posts")
		.deleteOne({ _id: new ObjectId(request.params.id) });
	response.json(data);
});

// Need to figure out how to get the following from userRoutes api route
// #6 - Retrieve All (Initial Post View Home Page, retrieve all following posts)
postRoutes.route("/get/following/posts/:id").get(async (request, response) => {
	let db = database.getDb();
	let data = await db
		.collection("posts")
		.find(
			{ userID: { $in: user.following } },
			{
				projection: {
					title: 1,
					locations: 1,
					rating: 1,
					pictures: 1,
					saved: 1,
				},
			}
		)
		.toArray();
	if (data) {
		response.json(data);
	} else if (!data) {
		response.json([]);
	} else {
		response.status(404).json({ error: "Data not found" });
	}
});

// #7 - Retrieve One (Display Post Data after clicking on post)
postRoutes.route("/get/click/posts/:id").get(async (request, response) => {
	let db = database.getDb();
	let data = await db.collection("posts").findOne(
		{ _id: new ObjectId(request.params.id) },
		{
			projection: {
				author: 1,
				title: 1,
				locations: 1,
				rating: 1,
				uploads: 1,
				saved: 1,
				likes: 1,
				liked: 1,
				tags: 1, // activities?
				budget: 1,
				bestTime: 1,
				duration: 1,
				comments: 1,
			},
		}
	);
	if (data) {
		response.json(data);
	} else {
		response.status(404).json({ error: "Data not found" });
	}
});

// #8 - Post One (Adding comment to post)
postRoutes.route("/posts/add/comment/:id").post(async (request, response) => {
	let db = database.getDb();
	let postId = request.params.id;
	let newComment = request.body.comment;

	if (!newComment) {
		return response.status(400).json({ error: "Comment cannot be empty" });
	}

	let result = await db
		.collection("posts")
		.updateOne(
			{ _id: new ObjectId(postId) },
			{ $push: { comments: newComment } }
		);

	if (result.modifiedCount > 0) {
		response.json({ success: true, message: "Comment added!" });
	} else {
		response.status(404).json({ error: "Post not found or comment not added" });
	}
});

// #9 - Post One (Adding rating to post)
postRoutes.route("/posts/:id/rating").post(async (request, response) => {
	let db = database.getDb();
	let postId = request.params.id;
	let newRating = request.body.rating;

	if (!newRating || newRating < 1 || newRating > 5) {
		return response
			.status(400)
			.json({ error: "Rating must be between 1 and 5" });
	}

	let post = await db
		.collection("posts")
		.findOne({ _id: new ObjectId(postId) });

	if (!post) {
		return response.status(404).json({ error: "Post not found" });
	}

	let updatedAllRatings = [...post.allRatings, newRating]; // Append new rating
	let updatedNumRatings = post.numRatings + 1; // Increment count
	let updatedRating =
		updatedAllRatings.reduce((sum, r) => sum + r, 0) / updatedNumRatings; // Calculate new average

	let result = await db.collection("posts").updateOne(
		{ _id: new ObjectId(postId) },
		{
			$push: { allRatings: newRating }, // Append rating
			$inc: { numRatings: 1 }, // Increase rating count
			$set: { rating: updatedRating.toFixed(2) }, // Update average rating (rounded to 2 decimals)
		}
	);

	if (result.modifiedCount > 0) {
		response.json({
			success: true,
			message: "Rating added!",
			newAvgRating: updatedRating.toFixed(2),
			numRatings: updatedNumRatings,
		});
	} else {
		response.status(500).json({ error: "Failed to update rating" });
	}
});

module.exports = postRoutes;
