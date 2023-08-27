import mongoose, { Document, Schema } from 'mongoose';

interface Mail extends Document {
    email: string;
    message: string;
}

const userSchema = new Schema<Mail>({
    email: { type: String, required: true },
    message: { type: String, required: true },
});

export default mongoose.model<Mail>('Mail', userSchema);

