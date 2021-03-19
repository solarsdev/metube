"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.videoDelete = exports.videoDetail = exports.postVideoUpload = exports.getVideoUpload = exports.search = exports.home = void 0;

var _routes = _interopRequireDefault(require("../routes"));

var _Video = _interopRequireDefault(require("../models/Video"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var home = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var videos;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            videos = [];
            _context.prev = 1;
            _context.next = 4;
            return _Video["default"].find({});

          case 4:
            videos = _context.sent;
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](1);
            console.error(_context.t0);

          case 10:
            res.render('home', {
              pageTitle: 'Home',
              videos: videos
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 7]]);
  }));

  return function home(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.home = home;

var search = function search(req, res) {
  var searchingBy = req.query.search_query;
  res.render('search', {
    pageTitle: 'Seach',
    searchingBy: searchingBy
  });
};

exports.search = search;

var getVideoUpload = function getVideoUpload(req, res) {
  return res.render('videoUpload', {
    pageTitle: 'Video Upload'
  });
};

exports.getVideoUpload = getVideoUpload;

var postVideoUpload = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var fileUrl, _req$body, title, description, videoUploaded;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            fileUrl = req.file.path, _req$body = req.body, title = _req$body.title, description = _req$body.description;
            _context2.prev = 1;
            _context2.next = 4;
            return _Video["default"].create({
              fileUrl: fileUrl,
              title: title,
              description: description
            });

          case 4:
            videoUploaded = _context2.sent;
            res.redirect(_routes["default"].videoDetail(videoUploaded.id));
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            console.error(_context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));

  return function postVideoUpload(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.postVideoUpload = postVideoUpload;

var videoDetail = function videoDetail(req, res) {
  return res.render('videoDetail', {
    pageTitle: 'Video Detail'
  });
};

exports.videoDetail = videoDetail;

var videoDelete = function videoDelete(req, res) {
  return res.render('videoDelete', {
    pageTitle: 'Video Delete'
  });
};

exports.videoDelete = videoDelete;