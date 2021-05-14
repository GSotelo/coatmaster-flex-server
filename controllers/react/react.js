const path = require("path");

const root = require("../../util/root/root");

const serveReactBundle = (req, res, next) => {
  res.sendFile(path.join(root, "public", "build", "index.html"), err => { if (err) next(err) });
}

module.exports = serveReactBundle;