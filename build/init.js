"use strict";

var _app = _interopRequireDefault(require("./app"));

require("./db");

var _dotenv = _interopRequireDefault(require("dotenv"));

require("./models/Comment");

require("./models/Video");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var port = process.env.WEB_PORT;

var handleListening = function handleListening() {
  return console.log("\u2705 App listening at http://localhost:".concat(port));
};

_app["default"].listen(port, handleListening);