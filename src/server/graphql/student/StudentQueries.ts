// studentQueries.ts
import { gql } from 'apollo-server-express';

export const StudentQueries = gql`
  extend type Query {
    student(studentId: String!): Student
    students: [Student]!
  }
`;
