import mongoose from 'mongoose';

const instructorSchema = new mongoose.Schema(
  {
    instructorId: {
      type: String,
      required: true,
      unique: true // Ensure each instructor has a unique ID
    },
    name: {
      type: String,
      required: true
    },
    instruments: {
      type: [String],
      required: true
    },
    locationsAvailable: {
      type: [String],
      default: [] // Optional field
    }
  },
  {
    timestamps: true // Automatically manage createdAt and updatedAt fields
  }
);

const Instructor = mongoose.model('Instructor', instructorSchema);
module.exports = Instructor;
