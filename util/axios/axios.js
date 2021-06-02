// 3rd party modules
const axios = require("axios");

// Axios instance configuration
const axiosCoatmaster = axios.create({
  baseURL: "http://10.10.0.1:9081/flex-api/api/v1/",
  headers: { "Authorization": "Bearer hkeqex" }
});

// Exports
module.exports = axiosCoatmaster;