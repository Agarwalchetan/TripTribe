const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const User = require("../models/user.js");
require("dotenv").config({ path: "../.env" });

const dbUrl = process.env.ATLASDB_URL;

async function main() {
  await mongoose.connect(dbUrl);
  console.log("Connected to DB");
}

main().catch((err) => console.error("DB connection error:", err));

const initDB = async () => {
  await Listing.deleteMany({});
  await User.deleteMany({});

  const user = new User({ email: "admin@example.com", username: "admin" });
  const registeredUser = await User.register(user, "admin"); // passport-local-mongoose will hash password

  const listingsWithOwner = initData.data.map((obj) => ({
    ...obj,
    owner: registeredUser._id,
  }));

  await Listing.insertMany(listingsWithOwner);
  console.log("Database seeded successfully");
  mongoose.connection.close();
};

initDB();
