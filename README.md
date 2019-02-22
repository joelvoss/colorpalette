# Colorpalette

This repository contains a react app that renders a material design color-
palette to help pick colors easyly and quickly.

## Requirements

- [Node.js v8+](https://nodejs.org/en/)
- [npm v+](https://www.npmjs.com/get-npm) (typically packed with Node.js)

## Usage

To run the application, follow these steps. The associated commands can be found
in the "Commands" section of this readme.

1. Double-check, that the required software/tools are installed.
2. Install all node dependencies.\
   → `npm install`
3. Start the application either in _development_ or _production_. In both cases
   the application will start a webserver listening on
   [http://localhost:3000](http://localhost:3000).\
   → `npm run dev` (development) || `npm run build && npm start` (production)

### Commands

```bash
# Install dependencies
$ npm install

# Start application in development
$ npm run dev

# Build application for production
$ npm run build

# Start application in production
$ npm start
```

### Optional commands

```bash
# Lint source code
$ npm run lint

# Clean project folder
$ npm run clean

# Package application
$ npm run package
```

## Release to branch:master

To perform an internal release (e.g. merge into master and tagging the commit),
use the helper script located in `/scripts/release.sh`.
The script updates the current `package.json` version and commits the changes
to the develop branch. \
After that it switches to the master branch, merges the develop branch into it
and tags the current commit. On success it returns to the develop branch.

_Attention_: The script doesn't push any changes, so you need to revisit them
and push to remote/origin yourself.
