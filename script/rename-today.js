const path = require('path');
const fs = require('fs');

const getNameByReadingTitle = (pathToEntry) => {
  const entryString = fs.readFileSync(pathToEntry, 'utf8');
  const entryLines = entryString.split(/\n/);
  const firstEntryLine = entryLines[0];
  const dateMatch = firstEntryLine.match(/\d{4}-\d{2}-\d{2}/);

  if (!dateMatch) {
    return '';
  }

  const date = dateMatch[0].replace(/-/g, '');
  const name = `${date}.md`;

  return name;
};

const getNameByTodaysDate = () => {
  const zero = (num) => (num < 10 ? '0' + num : num);
  const date = new Date();
  const year = date.getFullYear();
  const month = zero(date.getMonth() + 1);
  const day = zero(date.getDate());

  const name = `${year}${month}${day}.md`;

  return name;
};

const getNameByInput = () => '';

const init = () => {
  const entryName = 'today.md';
  const pathToArchive = path.join(__dirname, '../archive');
  const pathToEntry = path.join(pathToArchive, entryName);

  if (!fs.existsSync(pathToEntry)) {
    return console.log('Could not find todays entry in the archive, failed to rename it!');
  }

  const name = getNameByReadingTitle(pathToEntry) || getNameByTodaysDate() || getNameByInput();
  fs.renameSync(pathToEntry, path.join(pathToArchive, name));
};

init();
