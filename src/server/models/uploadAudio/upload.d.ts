import mongoose from 'mongoose';

export interface IAudio extends mongoose.Document {
  filename: string;
  userId?: string;
}
