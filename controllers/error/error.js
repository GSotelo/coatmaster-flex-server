const isProduction = require("../..//util/production/production");

const errorCtrl = (err, req, res, next) => {
  !isProduction && console.error(`[errorCtrl]:${err.message}`);
  res.status(500).send({ error: true });
}

module.exports = errorCtrl;