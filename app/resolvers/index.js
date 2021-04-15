const lodash = require("lodash");
const { resolvers: user } = require("./user");
const { resolvers: jurusan } = require("./jurusan");

const resolvers = lodash.merge(user, jurusan);

module.exports = {
  resolvers,
};
