const express = require("express");
const router = require("./router");
const app = express();

app.use("/api", router);

app.listen("3310", () => {
  console.log("serve listening on port 3310");
});
