const bookmarks = require("./read-bookmarks")();

console.log("\n\nBOOKMARKS AND NOTES:\n");

for (let index = 0; index < bookmarks.length; index++) {
  const bookmark = bookmarks[index];
  const number = index + 1;

  console.log(`${number}. ${bookmark}`);
}

console.log("\n");
