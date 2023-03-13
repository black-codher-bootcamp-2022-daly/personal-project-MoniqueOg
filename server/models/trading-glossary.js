const mongoose = require("mongoose");
const { Schema } = mongoose;

const TradingGlossarySchema = new Schema({
  term: {
    type: String,
    required: true,
  },
  definition: {
    type: String,
    required: true,
  },
});

const TradingGlossaryModel = mongoose.model("glossary", TradingGlossarySchema);

mongoose.connect('mongodb://localhost/trading-glossary', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = TradingGlossaryModel;