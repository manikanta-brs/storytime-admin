import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  languages: [
    {
      name: { type: String },
      code: { type: String },
      status: { type: Boolean, default: true },
    },
  ],
  categories: { type: Array },
  saved_stories: { type: Array },
  token: { type: String },
  verified: { type: Boolean, default: false },
  verify_token: { type: String },
  verify_token_expires: Date,
  verifyCode: { type: String }, //verifyCode from Mobile
  verifyCodeExpires: Date,
  resetPasswordToken: { type: String }, //resetPasswordToken with link from webiste
  resetPasswordExpires: Date,
  resetPasswordCode: { type: String }, //resetPasswordCode from Mobile
  resetPasswordCodeExpires: Date,
  isAdmin: { type: Boolean, default: false },
});

const User = mongoose.model("User", userSchema);

export default User;
