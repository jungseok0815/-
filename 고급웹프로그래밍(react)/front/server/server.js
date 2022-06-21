const express = require("express");
const app = express();
const api = require("./routes/index");

app.use("/appi", api);

app.listen(3001, () => console.log("node.js server is running"));
