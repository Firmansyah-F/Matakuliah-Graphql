const { gql } = require("apollo-server-express");
const { typeDefs: user } = require("./user");
const { typeDefs: jurusan } = require("./jurusan");

const root = gql`
  type Query {
    root: String
  }
  type Mutation {
    root: String
  }
`;

const typeDefs = [root, user, jurusan];

module.exports = {
  typeDefs,
};
