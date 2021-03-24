const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json("welcome");
});

app.listen(4000, () => console.log("app is ruuning"));
