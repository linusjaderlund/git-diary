const bookmarks = require('./bookmarks');
const writeBookmarks = require('./write-bookmarks');

const init = () => {
  const bookmark = process.argv[2];
  const secondParameter = process.argv[3];

  if (!bookmark) {
    return console.log('No bookmark/note passed to function');
  }

  if (secondParameter) {
    return console.log(
      'It seems you are trying to add a bookmark/note' +
        ' with spaces without wrapping the string with "<string>"'
    );
  }

  bookmarks.push(bookmark);
  writeBookmarks(bookmarks);
};

init();
