const bookmarks = require('./bookmarks');

const init = () => {
  console.log('\n\nBOOKMARKS AND NOTES:\n');

  if (!bookmarks.length) {
    console.log('- No bookmarks or notes stored yet -');
  }

  for (let index = 0; index < bookmarks.length; index++) {
    const bookmark = bookmarks[index];
    const number = index + 1;

    console.log(`${number}. ${bookmark}`);
  }

  console.log('\n');
};

init();
