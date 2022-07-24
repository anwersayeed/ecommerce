const express = require("express");
const app = express();

app.use(express.json())

// Route Imports
const product = require("./routes/productRoute");

// Remember, here route is not base_url/api/v1/product, because product is here a variable, go and see, that, you created products, and this work not product
app.use("/api/v1", product);

module.exports = app