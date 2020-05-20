const path = require('path');
const fs = require('fs');

const generateTitle = () => {
  const date = new Date();
  const zero = (num) => (num < 10 ? '0' + num : num);
  const title = `${date.getFullYear()}-${zero(date.getMonth() + 1)}-${zero(date.getDate())}`;
  return title;
};

const render = (pathToFile) => {
  const replaceString = 'YYYY-MM-DD';

  try {
    const modifiedEntry = fs
      .readFileSync(pathToFile, 'utf8')
      .replace(replaceString, generateTitle());

    fs.writeFileSync(pathToFile, modifiedEntry, 'utf8');
  } catch (error) {
    console.log('Error', error);
  }
};

const init = () => {
  const fileName = 'today.md';
  const pathToFile = path.join(__dirname, `../${fileName}`);

  if (!fs.existsSync(pathToFile)) {
    return console.log("Can't find todays entry, failed to render date!");
  }

  render(pathToFile);
};

init();
