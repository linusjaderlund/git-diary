const path = require('path');
const fs = require('fs');
const pathToBookmarks = path.join(__dirname, '../_bookmarks.json');

module.exports = () => JSON.parse(fs.readFileSync(pathToBookmarks));
