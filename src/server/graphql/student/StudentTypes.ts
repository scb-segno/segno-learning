// studentTypes.ts
import { gql } from 'apollo-server-express';

export const StudentTypes = gql`
  type Student {
    studentId: String!
    name: String!
    instruments: [String!]!
    instructors: [String]!
  }
`;
