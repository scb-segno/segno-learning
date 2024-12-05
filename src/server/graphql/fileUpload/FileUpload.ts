import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Audio {
    filename: String!
    userId: String!
  }

  type Mutation {
    uploadAudio(userId: String!, file: Upload!): Audio
  }
`;

export default typeDefs;
