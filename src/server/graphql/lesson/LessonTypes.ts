// lessonTypes.ts
import { gql } from 'apollo-server-express';

export const LessonTypes = gql`
  scalar Date

  type Lesson {
    lessonId: String!
    studentId: String!
    studentName: String!
    instructorId: String!
    instructorName: String!
    date: Date!
    instrument: String!
    location: String
    assessment: Assessment
  }

  type FutureLesson {
    lessonInfo: Lesson!
    objectives: Objective!
  }

  type Objective {
    objective: String!
    priority: Int
    goalMet: Boolean
  }

  type Assessment {
    assessmentSummary: String
  }
`;
