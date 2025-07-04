const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");
const { ref } = require("joi");

const defaultImage =
  "https://images.unsplash.com/photo-1735585142563-1fea15aba663?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    filename: String,
    url: {
      type: String,
      default: defaultImage,
      set: (v) => (v === "" ? defaultImage : v),
    },
  },
  price: {
    type: Number,
  },
  location: {
    type: String,
  },
  country: {
    type: String,
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

//--------------------------------------------------------------------------------------------------------

//Handling _Delete listing
// it cause when any listing is deleted its review will also be deleted by this middleware
listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

//--------------------------------------------------------------------------------------------------------

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
