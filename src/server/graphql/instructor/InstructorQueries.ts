// instructorQueries.ts
import { gql } from 'apollo-server-express';

export const InstructorQueries = gql`
  extend type Query {
    instructor(instructorId: String!): Instructor
    instructors: [Instructor]!
  }
`;
