const express = require("express");
const port = process.env.PORT || 3000;
const { ApolloServer, AuthenticationError } = require("apollo-server-express");

const { typeDefs } = require("./schema");
const { resolvers } = require("./resolvers");
// const { router: routerIndex } = require("./routes/index");
// const {
//   verifyJwt,
//   verifyJwtRest,
//   permit,
// // } = require("./common/middleware/auth");

const connect = require("../config/connection");
const app = express();
const router = express.Router();

app.use(express.json());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // context: ({ req }) => {
  //   const auth = req.headers.authorization;
  //   if (!auth) throw new AuthenticationError("you must be logged in");
  //   const result = verifyJwt(auth);
  //   payload = {
  //     auth: result,
  //   };
  //   return {
  //     payload,
  //   };
  // },
  playground: {
    settings: {
      "editor.theme": "light",
    },
  },
  introspection: true,
});
server.applyMiddleware({ app });

app.get("/", async (req, res) => {
  return res.json({
    message: "welcome graphql query",
  });
});

// app.use("/api", routerIndex);
app.use(router);

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
