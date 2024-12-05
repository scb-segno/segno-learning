import { gql } from 'apollo-server-express';

export const StudentMutations = gql`
  extend type Mutation {
    studentCreate(data: StudentCreate!): Student
    studentUpdate(data: StudentUpdate!, where: StudentUpdateWhereInput): Student
  }
`;
