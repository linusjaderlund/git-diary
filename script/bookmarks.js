const path = require('path');
const fs = require('fs');

const readBookmarks = () => {
  const pathToBookmarks = path.join(__dirname, '../_bookmarks.json');

  try {
    const bookmarksJSON = fs.readFileSync(pathToBookmarks);
    const bookmarks = JSON.parse(bookmarksJSON);
    return bookmarks;
  } catch (error) {
    console.log('Error', error);
    return [];
  }
};

module.exports = readBookmarks();
