import { mergeTypeDefs } from '@graphql-tools/merge';
import { Instructor } from './instructor/';
import { Lesson } from './lesson';
import { Student } from './student';

export const typeDefs = mergeTypeDefs([
  Instructor.InstructorMutations,
  Instructor.InstructorQueries,
  Instructor.InstructorTypes,
  Lesson.LessonMutations,
  Lesson.LessonQueries,
  Lesson.LessonTypes,
  Student.StudentMutations,
  Student.StudentQueries,
  Student.StudentTypes
]);

export const resolvers = {
  ...Instructor.InstructorResolvers,
  ...Lesson.LessonResolvers,
  ...Student.StudentResolvers
};
