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

//--------------------------------------- //Using HBS
// //Express pkg
// const express = require("express");
// //Path module
// const path = require("path");
// //Using express
// const app = new express();
// //using HBS
// const hbs = require("hbs");

// app.listen(3000, (req, res) => {
//   console.log("ServerRunnin en el 3000");
// });
// app.set("view engine", "hbs");
// app.set("views", path.join(__dirname, "/views"));

// app.get("/", (req, res) => {
//   res.render("index", {
//     author: "Gabo",
//   });
// });

const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/templates/views"));
//RegisterPartials
hbs.registerPartials(path.join(__dirname, "/templates/partials"));
app.get("/", (req, res) => {
  res.render("index", {
    title: "Home",
    name: "Arash Arora",
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Arash Arora",
  });
});
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
