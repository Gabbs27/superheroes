// console.log("hello world");

const sh = require("superheroes");
const chalk = require("chalk");
const moment = require("moment");

const time = new Date();
const parsedTime = moment(time).format("h:mm:ss");
console.log(chalk.blue(sh.random()));
console.log(parsedTime);
// const fs = require(“fs”);
// fs.writeFileSync(“file.txt”, “Hi there..”);
