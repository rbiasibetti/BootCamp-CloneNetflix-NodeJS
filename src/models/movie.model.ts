import { Document, Schema, model } from "mongoose";

interface MovieDocument {
  name: String;
  category: String;
  description: String;
  poster: String;
  backdrop?: String
}

const MovieSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  poster: {
    type: String,
    required: true
  },
  backdrop: {
    type: String
  }
},
  {
    timestamps: true
  }
);

const Movie = model<MovieDocument>("Movie", MovieSchema);
export { Movie };
