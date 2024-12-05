// lessonMutations.ts
import { gql } from 'apollo-server-express';

export const LessonMutations = gql`
  extend type Mutation {
    lessonCreate(data: LessonCreate!): Lesson
    lessonUpdate(data: LessonUpdate!, where: LessonUpdateWhereInput): Lesson
  }
`;
