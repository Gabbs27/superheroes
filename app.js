// //Express pkg
// const express = require("express");
// //Path module
// const path = require("path");
// //Using express
// const app = new express();

// //using HBS
// const hbs = require("hbs");

// app.use(express.static(path.join(__dirname, "./public")));
// app.listen(3000, () => {
//   console.log("Server running at 3000");
// });

// //Todo lo de arriba es para renderizar paginas estaticas.

// // app.get("/", (req, res) => {
// //   //app.get to handle GET requests.
// //   //req - http request, res - desire response
// //   res.send("Hello world"); //Send hello world to this route.
// // });

//Express pkg
const express = require("express");
//Path module
const path = require("path");
//Using express
const app = new express();
//using HBS
const hbs = require("hbs");

app.listen(3000, (req, res) => {
  console.log("ServerRunnin en el 3000");
});
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("index", {
    author: "Gabo",
  });
});
