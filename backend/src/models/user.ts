import mongoose, { Document, Schema } from "mongoose";

interface User extends Document {
  email: string;
  password: string;
}

const userSchema = new Schema<User>({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export default mongoose.model<User>("User", userSchema);
