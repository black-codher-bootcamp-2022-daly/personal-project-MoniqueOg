const mongoose = require("mongoose");
const { Schema } = mongoose;

const TermsSchema = new Schema({
  term: {
    type: String,
    required: true,
  },
  definition: {
    type: String,
    required: true,
  },
});

mongoose.model("terms", TermsSchema);


// module.exports = TermsModel;