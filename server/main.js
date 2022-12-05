const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  // FIXME replaceはクソコード説
  res.sendFile(__dirname.replace("/server", "/client") + "/index.html");
});

// NOTE サーバー ON!
app.listen(port, () => {
  console.log("Server listening on port 3000!");
});
