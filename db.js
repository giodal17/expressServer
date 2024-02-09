const mongoose = require("mongoose");
const ServerApiVersion  = require('mongodb');

const dbUrl =
  "mongodb+srv://giodal17:PvfKKVcGqNBBdlJn@cluster0.mqki3cf.mongodb.net/?retryWrites=true&w=majority";

module.exports = () => {
  return mongoose.connect(dbUrl);
};
