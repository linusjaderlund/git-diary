const bookmarks = require('./read-bookmarks')();
const writeBookmarks = require('./write-bookmarks');
const bookmark = process.argv[2];

if (bookmark) {
  bookmarks.push(bookmark);
  writeBookmarks(bookmarks);
}
