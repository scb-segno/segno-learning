// lessonQueries.ts
import { gql } from 'apollo-server-express';

export const LessonQueries = gql`
  extend type Query {
    lesson(lessonId: String!): Lesson
    previousLesson(lessonId: String!): Lesson!
    previousLessons: [Lesson]!
  }
`;
