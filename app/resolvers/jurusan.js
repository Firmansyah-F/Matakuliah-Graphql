const connect = require("../../config/connection");

const resolvers = {
  Query: {
    async findAllJurusan(parent, args, { payload }) {
      try {
        // if (payload.auth.role === "worker") {
        let findJurusan = await connect.query(`SELECT * FROM jurusan`);
        return findJurusan.rows;
        // } else {
        //   throw new Error("Access Denied");
        // }
      } catch (error) {
        throw new Error(error);
      }
    },
  },

  Mutation: {
    async createJurusan(parent, args, { payload }) {
      try {
        // if (payload.auth.role === "worker") {
        let createJurusan = await connect.query(
          "INSERT INTO jurusan (nama_jurusan) VALUES ($1) RETURNING *",
          [args.nama_jurusan]
        );
        return createJurusan.rows[0];
        // } else {
        //   throw new Error("Access Denied");
        // }
      } catch (error) {
        throw new Error(error);
      }
    },
//     // async updateNoteWorker(parent, args, { payload }) {
//     //   try {
//     //     if (payload.auth.role === "worker") {
//     //       let updateNote = await connect.query(
//     //         "UPDATE notes SET project_id=$1,note=$2 RETURNING *",
//     //         [args.project_id, args.note]
//     //       );
//     //       return updateNote.rows[0];
//     //     } else {
//     //       throw new Error("Access Denied");
//     //     }
//     //   } catch (error) {
//     //     throw new Error(error);
//     //   }
//     // },
//     // async deleteNoteWorker(parent, args, { payload }) {
//     //   try {
//     //     if (payload.auth.role === "worker") {
//     //       const deleteNote = await connect.query(
//     //         "DELETE FROM notes where id=$1 RETURNING *",
//     //         [args.id]
//     //       );
//     //       return deleteNote.rows[0];
//     //     } else {
//     //       throw new Error("Access Denied");
//     //     }
//     //   } catch (error) {
//     //     throw new Error(error);
//     //   }
//     // },
  },
};
module.exports = {
  resolvers,
};
