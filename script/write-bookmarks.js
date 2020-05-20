const path = require('path');
const fs = require('fs');

const writeBookmarks = (bookmarks) => {
  const pathToBookmarks = path.join(__dirname, '../_bookmarks.json');

  if (!fs.existsSync(pathToBookmarks)) {
    return console.log('Did not find file _bookmarks.json, failed to write!');
  }

  try {
    fs.writeFileSync(pathToBookmarks, JSON.stringify(bookmarks), 'utf8');
  } catch (error) {
    console.log('Error', error);
  }
};

module.exports = writeBookmarks;
