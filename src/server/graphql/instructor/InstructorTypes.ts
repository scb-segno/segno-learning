// instructorTypes.ts
import { gql } from 'apollo-server-express';

export const InstructorTypes = gql`
  type Instructor {
    instructorId: String!
    name: String!
    instruments: [String!]!
    locationsAvailable: [String]
  }
`;
