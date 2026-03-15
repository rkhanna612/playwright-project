
const dotenv = require("dotenv");
dotenv.config();

const ENV = {
  baseUrl: "https://power-connect-3925-dev-ed.scratch.my.salesforce.com",
  username: process.env.SF_USERNAME,
  password: process.env.SF_PASSWORD
};

module.exports = { ENV };