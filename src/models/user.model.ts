import { Document, Schema, model } from "mongoose";

interface UserDocument {
  name: String;
  email: String;
  password: String;
  comparePasword(preHashPassword: String): Promise<boolean>;
}

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
},
  {
    timestamps: true
  });

const User = model<UserDocument>("User", UserSchema);
