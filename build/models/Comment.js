"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// text
// createAt
var CommentSchema = new _mongoose["default"].Schema({
  text: {
    type: String,
    required: true
  },
  createAt: {
    type: Date,
    "default": Date.now
  }
});

var model = _mongoose["default"].model('Comment', CommentSchema);

var _default = model;
exports["default"] = _default;