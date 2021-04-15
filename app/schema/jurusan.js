const { gql } = require("apollo-server-express");

const typeDefs = gql`
  extend type Query {
    findAllJurusan: [Jurusan]
  }

  type Jurusan {
    id: Int
    nama_jurusan : String
  }

  extend type Mutation {
    createJurusan(
        nama_jurusan : String
    ): Jurusan

    updateJurusan(
      id: Int
      nama_jurusan : String
    ): Jurusan

    deleteJurusan(id: Int): Jurusan
  }
`;

module.exports = {
  typeDefs,
};