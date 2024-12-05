import { gql } from 'apollo-server-express';

export const InstructorMutations = gql`
  extend type Mutation {
    instructorCreate(data: InstructorCreate!): Instructor
    instructorUpdate(
      data: InstructorUpdate!
      where: InstructorUpdateWhereInput
    ): Instructor
  }
`;
