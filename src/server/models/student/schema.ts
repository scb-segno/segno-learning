import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema(
  {
    studentId: {
      type: String,
      required: true,
      unique: true // Ensure each student has a unique ID
    },
    name: {
      type: String,
      required: true
    },
    instruments: {
      type: [String],
      required: true
    },
    instructors: {
      type: [mongoose.Schema.Types.ObjectId], // Reference to Instructor model
      ref: 'Instructor',
      required: true
    }
  },
  {
    timestamps: true // Automatically manage createdAt and updatedAt fields
  }
);

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
