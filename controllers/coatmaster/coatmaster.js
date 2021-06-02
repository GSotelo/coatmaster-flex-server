// Native modules


// Own modules
const connectLocalServer = require("../../util/axios/axios");
const isProduction = require("../../util/production/production");
const validateSchema = require("../../util/json/validateSchema");
const wrap = require("../../util/wrap/wrap");
const { queryReportSchema } = require("../../util/json/schemas");

// Controllers
exports.getServerStatus = wrap(
  async (req, res, next) => {
    !isProduction && console.log("[getServerStatus]: Get status of local server");
    const response = await connectLocalServer.get(req.url);
    res.send(response.data);
  }
)

exports.getApplications = wrap(
  async (req, res, next) => {
    !isProduction && console.log("[getApplications]: Get all applications stored in local server");
    const response = await connectLocalServer.get(req.url);
    res.send(response.data);
  }
)

exports.getApplication = wrap(
  async (req, res, next) => {
    !isProduction && console.log("[getApplication]: Get single application stored in local server");
    const response = await connectLocalServer.get(req.url);
    res.send(response.data);
  }
)

exports.getSamples = wrap(
  async (req, res, next) => {
    !isProduction && console.log("[getSamples]: Get samples based on application id");
    const response = await connectLocalServer.get(req.url);
    res.send(response.data);
  }
)

exports.getMeasurements = wrap(
  async (req, res, next) => {
    !isProduction && console.log("[getMeasurements]: Generate measurement report based on the application and block ids");

    const { body, url } = req;
    const isValid = validateSchema(queryReportSchema, body);

    if (!isValid) {
      throw new Error("[getMeasurements]: It's not possible to POST data to local server. Wrong options (request body has an incorrect format)");
    }

    const response = await connectLocalServer.post(url, body);
    res.send(response.data);
  }
)