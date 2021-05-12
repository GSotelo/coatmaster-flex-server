// Native modules
const path = require("path");

// 3rd party modules
const main = require("require-main-filename")();

// Root folder
const root = path.dirname(main);

// Exports
module.exports = root;

