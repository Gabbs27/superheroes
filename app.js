//Express pkg
const express = require("express");
//Using express
const app = express();

//path module
const path = requiere("path");

app.use(express.static(path.join(__dirname, "/public")));
app.listen(3000, () => {
  console.log("Server running at 3000");
});

app.get("/", (req, res) => {
  //app.get to handle GET requests.
  //req - http request, res - desire response
  res.send("Hello world"); //Send hello world to this route.
});
