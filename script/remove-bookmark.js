const bookmarks = require('./bookmarks');
const writeBookmarks = require('./write-bookmarks');

const remove = (index) => {
  bookmarks.splice(index, 1);
  writeBookmarks(bookmarks);
};

const getIndex = (number) => {
  if (!number) {
    return console.log('No bookmark/note number passed to function');
  }

  const index = parseInt(number, 10) - 1;

  if (isNaN(index)) {
    return console.log('Passed bookmark/note number must be a number');
  }

  if (!bookmarks[index]) {
    return console.log('Passed bookmark/note number must be one that exist');
  }

  return index;
};

const init = () => {
  const index = getIndex(process.argv[2]);

  if (index > -1) {
    remove(bookmarkIndex);
  }
};

init();
