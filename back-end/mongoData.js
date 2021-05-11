import mongoose from "mongoose";

// creating Imessage schema

const imessageSchema = mongoose.Schema({
  chatName: String,
  conversation: [
    {
      message: String,
      timestamp: String,
      user: {
        displayName: String,
        email: String,
        photo: String,
        uid: String,
      },
    },
  ],
});

export default mongoose.model("conversations", imessageSchema);
