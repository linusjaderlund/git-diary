const path = require("path");
const fs = require("fs");
const currentFileName = "today.md";
const pathToArchive = path.join(__dirname, "../archive");
const pathToCurrentFile = path.join(pathToArchive, currentFileName);
const date = new Date();
const zero = (num) => (num < 10 ? "0" + num : num);

let newFileName;

try {
  newFileName =
    fs
      .readFileSync(pathToCurrentFile, "utf8")
      .split("\n")[0]
      .split("# ")[1]
      .replace(/-/g, "") + ".md";

  if (!newFileName.match(/\d{8}/)) {
    throw new Error("Date string mismatch!");
  }
} catch (error) {
  newFileName = `${date.getFullYear()}${zero(date.getMonth() + 1)}${zero(
    date.getDate()
  )}.md`;
}

fs.renameSync(pathToCurrentFile, path.join(pathToArchive, newFileName));
