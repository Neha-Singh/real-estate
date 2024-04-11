import { Mongoose } from "mongoose";

const userSchema = new Mongoose.schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

const user = mongoose.model("User", userSchema);

export default user;
