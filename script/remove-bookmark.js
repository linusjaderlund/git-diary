const bookmarks = require('./read-bookmarks')();
const writeBookmarks = require('./write-bookmarks');
const bookmarkIndex = parseInt(process.argv[2], 10) - 1;

if (!isNaN(bookmarkIndex) && bookmarks[bookmarkIndex] !== undefined) {
  bookmarks.splice(bookmarkIndex, 1);
  writeBookmarks(bookmarks);
}
