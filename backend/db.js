"use strict";
/** Database setup for jobly. */
const { Client } = require("pg");
const { getDatabaseUri } = require("./config");

let database;
// if (process.env.NODE_ENV === "test") {
//   database = "jobly_test";
// } else {
//   database = "jobly";
// }

let db = new Client({
  connectionString: getDatabaseUri(),
  ssl: { rejectUnauthorized: false }
});

db.connect();

module.exports = db;