"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("@babel/polyfill");

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

var _helmet = _interopRequireDefault(require("helmet"));

var _momentTimezone = _interopRequireDefault(require("moment-timezone"));

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _middlewares = require("./middlewares");

var _routes = _interopRequireDefault(require("./routes"));

var _globalRouter = _interopRequireDefault(require("./routers/globalRouter"));

var _userRouter = _interopRequireDefault(require("./routers/userRouter"));

var _videoRouter = _interopRequireDefault(require("./routers/videoRouter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_morgan["default"].token('date', function (req, res, tz) {
  return (0, _momentTimezone["default"])().tz(tz).format();
});

_morgan["default"].format('logFormat', ':remote-addr [:date[Asia/Tokyo]] ":method :url" :status :res[content-length] - :response-time ms');

var app = (0, _express["default"])();

var logDir = _path["default"].join(__dirname, 'logs');

if (!_fs["default"].existsSync(logDir)) {
  _fs["default"].mkdirSync(logDir);
}

var accessLogStream = _fs["default"].createWriteStream(_path["default"].join(__dirname, 'logs', 'access.log'), {
  flags: 'a'
});

app.use((0, _helmet["default"])({
  contentSecurityPolicy: false
})); // for security (such as xss sql injection etc)

app.use((0, _morgan["default"])('logFormat', {
  stream: accessLogStream
})); // for logging express connection

app.use((0, _morgan["default"])('dev'));
app.use(_bodyParser["default"].urlencoded({
  extended: true
})); // parse application/x-www-form-urlencoded

app.use(_bodyParser["default"].json()); // parse application/json

app.use((0, _cookieParser["default"])()); // get cookie info

app.use(_middlewares.localsMiddleware);
app.set('view engine', 'pug');
app.set('views', _path["default"].join(__dirname, 'views'));
app.use('/uploads', _express["default"]["static"](_path["default"].join(__dirname, 'uploads'))); //app.use('./uploads', express.static('uploads'));

app.use(_routes["default"].home, _globalRouter["default"]);
app.use(_routes["default"].users, _userRouter["default"]);
app.use(_routes["default"].videos, _videoRouter["default"]);
var _default = app;
exports["default"] = _default;