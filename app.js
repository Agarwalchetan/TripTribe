const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");

const MONGO_URL = "mongodb://127.0.0.1:27017/TripTribe";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
  res.send("hi, i am root");
});

app.listen(port, () => {
  console.log(`server is listening to ${port}`);
});
