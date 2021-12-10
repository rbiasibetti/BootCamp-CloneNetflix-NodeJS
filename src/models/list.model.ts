import { Document, Schema, model } from "mongoose";

interface ListDocument {
  user_id: String;
  movie_id: String;
}

const ListSchema = new Schema({
  user_id: {
    type: String,
    required: true
  },
  movie_id: {
    type: String,
    required: true
  }
},
  {
    timestamps: true
  });

  const List = model<ListDocument>("List",ListSchema);
  export { List };