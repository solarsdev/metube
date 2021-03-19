"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _videoController = require("../controllers/videoController");

var _middlewares = require("../middlewares");

var _routes = _interopRequireDefault(require("../routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var videoRouter = _express["default"].Router();

videoRouter.get(_routes["default"].videoUpload, _videoController.getVideoUpload);
videoRouter.post(_routes["default"].videoUpload, _middlewares.uploadVideo, _videoController.postVideoUpload);
videoRouter.get(_routes["default"].videoDelete, _videoController.videoDelete);
videoRouter.get(_routes["default"].videoDetail(), _videoController.videoDetail);
var _default = videoRouter;
exports["default"] = _default;