// console.log("hello world");

//Lista de superheroes pkg
const sh = require("superheroes");
//Cambio de color de texto pkg
const chalk = require("chalk");
//Formateo de texto
const moment = require("moment");


const time = new Date();
const parsedTime = moment(time).format("h:mm:ss");
console.log(chalk.blue(sh.random()));
console.log(parsedTime);

// const fs = require(“fs”);
// fs.writeFileSync(“file.txt”, “Hi there..”);
