const path = require("path");
const fs = require("fs");
const fileName = "today.md";
const pathToFile = path.join(__dirname, `../${fileName}`);
const replaceString = "YYYY-MM-DD";
const date = new Date();
const zero = (num) => (num < 10 ? "0" + num : num);
const header = `${date.getFullYear()}-${zero(date.getMonth() + 1)}-${zero(
  date.getDate()
)}`;

if (fs.existsSync(pathToFile)) {
  fs.writeFileSync(
    pathToFile,
    fs.readFileSync(pathToFile, "utf8").replace(replaceString, header),
    "utf8"
  );
} else {
  console.log("Can't find todays entry");
}
