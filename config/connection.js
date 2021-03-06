const { Pool, Client } = require("pg");
require("dotenv").config();

const {
  DATABASE,
  DATABASE_USER,
  DATABASE_PASSWORD = null,
  DATABASE_HOST,
  DATABASE_PORT,
} = process.env;

const connect = new Pool({
  user: DATABASE_USER,
  host: DATABASE_HOST,
  database: DATABASE,
  password: DATABASE_PASSWORD,
  port: DATABASE_PORT,
});

connect.connect((err) => {
  if (err) {
    console.log("connection error");
    throw new Error(err);
  }
  // connect.end();
});

module.exports = connect;