import mongoose, { Document } from 'mongoose';

export interface IMetadata extends Document {
  filename: string;
  uploadDate: Date;
  userId?: string; // Optional user ID reference
}

const metadataSchema = new mongoose.Schema<IMetadata>({
  filename: { type: String, required: true },
  uploadDate: { type: Date, default: Date.now },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Metadata = mongoose.model<IMetadata>('Metadata', metadataSchema);
export default Metadata;
