const mongoose = require("mongoose");

module.exports = mongoose.model("dati", {
  nTentativi: { type: Number },
  access: { type: Boolean },
  success: { type: Boolean },
  risposta: { type: String },
});
