const { gql } = require("apollo-server-express");

const typeDefs = gql`
  extend type Query {
    findAllUser: [User]
  }

  type User {
    id: Int
    nama: String
    password : String
    jenis_kelamin: String
    id_jurusan: Int
    no_telp : Int
    alamat : String
    role: String
  }

  extend type Mutation {
    createUser(
        nama: String
        password : String
        jenis_kelamin: String
        id_jurusan: Int
        no_telp : Int
        alamat : String
        role: String
    ): User

    updateUser(
      id: Int
      nama: String
      password : String
      jenis_kelamin: String
      id_jurusan: Int
      no_telp : Int
      alamat : String
      role: String
    ): User

    deleteUser(id: Int): User
  }
`;

module.exports = {
  typeDefs,
};