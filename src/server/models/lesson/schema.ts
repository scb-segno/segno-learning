import mongoose from 'mongoose';

const assessmentSchema = new mongoose.Schema(
  {
    assessmentSummary: {
      type: String,
      default: '' // Optional field
    }
  },
  {
    _id: false // Disable automatic _id creation for subdocument
  }
);

const lessonSchema = new mongoose.Schema(
  {
    lessonId: {
      type: String,
      required: true,
      unique: true // Ensure each lesson has a unique ID
    },
    studentId: {
      type: String,
      required: true
    },
    studentName: {
      type: String,
      required: true
    },
    instructorId: {
      type: mongoose.Schema.Types.ObjectId, // Reference to Instructor model
      ref: 'Instructor',
      required: true
    },
    instructorName: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    instrument: {
      type: String,
      required: true
    },
    location: {
      type: String,
      default: '' // Optional field
    },
    assessment: assessmentSchema // Embed the assessment schema
  },
  {
    timestamps: true // Automatically manage createdAt and updatedAt fields
  }
);

const Lesson = mongoose.model('Lesson', lessonSchema);
module.exports = Lesson;
