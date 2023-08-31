const { MongoClient } = require("mongodb");
// how we establish and manage connections to the mongodb server
const dotenv = require("dotenv");
// saved connecton string to the .env file

dotenv.config();

let dbConnection;
// below created two exported functions - connectToDb makes the initial connection to server
// getDb stores that connection to make it reusable so we don't waste resources creating const new connections
module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(process.env.MONGODB_URI)
      .then((client) => {
        dbConnection = client.db();
        return cb();
      })
      .catch((err) => {
        console.log(err, "there has been an error");
        return cb(err);
      });
  },
  getDb: () => dbConnection,
};
