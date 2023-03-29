require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

MongoClient.connect(process.env.DATABASE_CONNECTION_STRING)
  .then((client) => {
    const db = client.db(process.env.MONGO_DB_NAME);
  
    require("./routes/glossaryRoutes")(app, db);

    app.listen(process.env.PORT, () => {
      console.log(`API running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error: ", err);
  });