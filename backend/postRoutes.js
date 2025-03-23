const express = require("express");
const database = require("./connect");
const ObjectId = require("mongodb").ObjectId;

let postRoutes = express.Router();

// #1 - Retrieve All
postRoutes.route("/posts").get(async (request, response) => {
  let db = database.getDb();
  let data = await db.collection("posts").find({}).toArray();
  if (data.length > 0) {
    response.json(data);
  } else {
    throw new Error("Data was not found :(");
  }
});
// #2 - Retrieve One
postRoutes.route("/posts/:id").get(async (request, response) => {
  let db = database.getDb();
  let data = await db
    .collection("posts")
    .findOne({ _id: new ObjectId(request.params.id) });
  if (Object.keys(data).length > 0) {
    response.json(data);
  } else {
    throw new Error("Data was not found :(");
  }
});
// #3 - Create One
postRoutes.route("/posts").post(async (request, response) => {
  let db = database.getDb();
  let mongoObject = {
    locations: request.body.locations,
    description: request.body.description,
    uploads: request.body.uploads,
    rating: request.body.rating,
    allRatings: request.body.allRatings,
    numRatings: request.body.numRatings,
    review: request.body.review,
    allReviews: request.body.allReviews,
    tags: request.body.tags,
    dates: request.body.dates,
    upvotes: request.body.upvotes,
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
      locations: request.body.locations,
      description: request.body.description,
      uploads: request.body.uploads,
      rating: request.body.rating,
      allRatings: request.body.allRatings,
      numRatings: request.body.numRatings,
      review: request.body.review,
      allReviews: request.body.allReviews,
      tags: request.body.tags,
      dates: request.body.dates,
      upvotes: request.body.upvotes,
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

module.exports = postRoutes;
