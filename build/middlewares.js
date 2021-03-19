"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.localsMiddleware = exports.uploadVideo = void 0;

var _multer = _interopRequireDefault(require("multer"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var multerVideo = (0, _multer["default"])({
  dest: 'uploads/videos/'
});
var uploadVideo = multerVideo.single('videoFile');
exports.uploadVideo = uploadVideo;

var localsMiddleware = function localsMiddleware(req, res, next) {
  res.locals.siteName = 'MeTube';
  res.locals.routes = _routes["default"];
  res.locals.user = {
    id: 1,
    isAuthenticated: true
  };
  next();
};

exports.localsMiddleware = localsMiddleware;