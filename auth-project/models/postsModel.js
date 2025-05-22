// ==============================
//  Import Dependencies
// ==============================

const mongoose = require("mongoose");

// ==============================
//  Post Schema Definition
// ==============================

const postSchema = mongoose.Schema(
  {
    // Title of the post
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true
    },

    // Description/content of the post
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true
    },

    // Reference to the user who created the post
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",              // Reference to User model
      required: true
    }
  },
  {
    timestamps: true // Automatically adds createdAt and updatedAt fields
  }
);

// ==============================
//  Export Post Model
// ==============================

module.exports = mongoose.model("Post", postSchema);
