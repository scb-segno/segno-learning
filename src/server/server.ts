import express, { Request, Response } from 'express';
const { graphqlHTTP } = require('express-graphql');
const graphql = require('graphql');
const { ApolloServer, gql } = require('apollo-server-express');
import { typeDefs, resolvers } from './graphql';
import { connectDatabase } from './config/db';

// const typeDefs = gql`
//   type Query {
//     hello: String
//   }
// `;

// const resolvers = {
//   Query: {
//     hello: () => "Hello. This GraphQL query resolves.",
//   },
// };

const port = process.env.port || 4000;

const server = new ApolloServer({ typeDefs, resolvers });

const main = async () => {
  const app = express();
  await server.start();
  server.applyMiddleware({ app });
  connectDatabase();

  app.listen(port, () => {
    console.log(
      `Server is running on http://localhost:${port}${server.graphqlPath}`
    );
  });
};

main();
