const express = require("express");
const database = require("./connect");

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
// #3 - Create One
// #4 - Update One
// #5 - Delete One
