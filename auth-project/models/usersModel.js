// ==============================
//  Import Dependencies
// ==============================

const mongoose = require("mongoose");

// ==============================
//  User Schema Definition
// ==============================

const userSchema = mongoose.Schema(
  {
    // User's email address
    email: {
      type: String,
      required: [true, "Email is required"], // Must be provided
      trim: true, // Remove surrounding spaces
      unique: true, // No two users can have the same email
      minLength: [5, "Email must have 5 characters!"],
      lowercase: true, // Store as lowercase
    },

    // User's password (will not be returned in queries by default)
    password: {
      type: String,
      required: [true, "Password must be provided!"],
      trim: true,
      select: false, // Hide from query results
    },

    // Flag indicating if the user's email is verified
    verified: {
      type: Boolean,
      default: false,
    },

    // Code sent to the user for email verification
    verificationCode: {
      type: String,
      select: false, // Hide from query results
    },

    // Timestamp or identifier for verifying code validity
    verificationCodeValidation: {
      type: String,
      select: false,
    },

    // Code sent to the user for resetting the password
    forgotPasswordCode: {
      type: String,
      select: false,
    },

    // Timestamp or identifier for forgot password code validity
    forgotPasswordCodeValidation: {
      type: String,
      select: false,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// ==============================
//  Export User Model
// ==============================

module.exports = mongoose.model("User", userSchema);
