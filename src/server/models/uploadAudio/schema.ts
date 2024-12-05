import mongoose, { Document, Schema } from 'mongoose';

export interface IAudio extends Document {
  filename: string;
  userId: string;
}

const AudioSchema: Schema = new Schema({
  filename: { type: String, required: true },
  userId: { type: String, required: true }
});

const Audio = mongoose.model<IAudio>('Audio', AudioSchema);
export default Audio;
