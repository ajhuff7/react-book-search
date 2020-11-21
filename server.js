const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
<<<<<<< HEAD
<<<<<<< HEAD:Reactbooks/create-react-express/server.js
const apiroutes = require("./routes/api-routes")
=======
const apiRoutes = require("routes/api-routes.js");
>>>>>>> 66504503aea44fd3f68bbf7aca0a7e8b24ff909f:server.js
=======
const apiRoutes = require("./routes/api-routes.js");
>>>>>>> 91f0046a5e33003cd1a970db3ac4aa48b46a1eff

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

<<<<<<< HEAD:Reactbooks/create-react-express/server.js
app.use("/api", apiroutes);

=======
app.use("/api", apiRoutes);
>>>>>>> 66504503aea44fd3f68bbf7aca0a7e8b24ff909f:server.js

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true })



app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
