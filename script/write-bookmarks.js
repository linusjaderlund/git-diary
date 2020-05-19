const path = require("path");
const fs = require("fs");
const pathToBookmarks = path.join(__dirname, "../_bookmarks.json");

module.exports = (bookmarks) =>
  fs.writeFileSync(pathToBookmarks, JSON.stringify(bookmarks), "utf8");
