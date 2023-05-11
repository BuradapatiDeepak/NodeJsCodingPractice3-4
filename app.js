let express = require("express");
let app = express();

app.get("/", (request, response) => {
  let date = new Date();
  //   console.log(date);
  //   console.log(date.getDate());
  //   console.log(date.getMonth());
  //   console.log(date.getFullYear());
  response.send(
    `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
  );
});

module.exports = app;
