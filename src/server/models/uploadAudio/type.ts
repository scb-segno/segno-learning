import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for the audio model
export interface IAudio extends Document {
  id: string;
  filename: string;
  userId: string;
}

// Create the audio schema
const AudioSchema: Schema = new Schema({
  filename: { type: String, required: true },
  userId: { type: String, required: false }
});

// Export the Audio model
const Audio = mongoose.model<IAudio>('Audio', AudioSchema);
export default Audio;
