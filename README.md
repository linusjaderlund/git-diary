# git-diary

A git based diary with node powers

## Setup

Clone this repository and create a **.key** file within the repository directory. Open the **.key** file and write any key/password you would like to use when encrypting your diary entries.

## Commands

### Create todays entry

`npm run create-today` will create an new **today.md** file with pre-generated date.

### Archive todays entry

`npm run archive-today` will move **today.md** to **archive/**, encrypt it and rename it after the date set inte the title of the entry. If title is missing then the default name will to _todays_ date.

### List bookmarks/notes

`npm run list-bookmarks` list all stored bookmarks/notes

### Add bookmark/note

`npm run add-bookmark "a string"` adds bookmark/note to \_bookmark.json

### List bookmarks/notes

`npm run remove-bookmark <bookmark number>` removes bookmark/note at given list number

### More to come...
