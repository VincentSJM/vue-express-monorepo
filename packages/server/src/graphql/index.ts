import { gql } from "apollo-server-express";

// The GraphQL schema
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => "world"
  }
};

export {
  typeDefs,
  resolvers
};