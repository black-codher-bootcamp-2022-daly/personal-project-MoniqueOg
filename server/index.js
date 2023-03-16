require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to the database
MongoClient.connect(process.env.DATABASE_CONNECTION_STRING)
  .then((client) => {
    const db = client.db(process.env.MONGO_DB_NAME);
    // IMPORT YOUR API ROUTES HERE
    // Below is just an example. Don't forget to delete it.
    // It's importing and using everything from the profilesRoutes.js file and also passing app as a parameter for profileRoutes to use
    require("./routes/glossaryRoutes")(app, db);

    app.listen(process.env.PORT, () => {
      console.log(`API running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error: ", err);
  });