"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userChangePassword = exports.userEditProfile = exports.userDetail = exports.logout = exports.postLogin = exports.getLogin = exports.postJoin = exports.getJoin = void 0;

var _routes = _interopRequireDefault(require("../routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getJoin = function getJoin(req, res) {
  return res.render('join', {
    pageTitle: 'Join'
  });
};

exports.getJoin = getJoin;

var postJoin = function postJoin(req, res) {
  var _req$body = req.body,
      lastName = _req$body.lastName,
      firstName = _req$body.firstName,
      email = _req$body.email,
      password = _req$body.password,
      passwordConfirm = _req$body.passwordConfirm;

  if (password !== passwordConfirm) {
    res.status(400).render('join', {
      pageTitle: 'Join'
    });
  } else {
    // ToDo: Register User
    // ToDo: Login User
    res.redirect(_routes["default"].home);
  }
};

exports.postJoin = postJoin;

var getLogin = function getLogin(req, res) {
  return res.render('login', {
    pageTitle: 'Login'
  });
};

exports.getLogin = getLogin;

var postLogin = function postLogin(req, res) {
  var _req$body2 = req.body,
      email = _req$body2.email,
      password = _req$body2.password,
      loggedOn = _req$body2.loggedOn; // ToDo: Login check on database
  // loggedOn is on or undefined
  // ToDo: if logged on is on, use cookie save login info on local computer

  res.redirect(_routes["default"].home);
};

exports.postLogin = postLogin;

var logout = function logout(req, res) {
  // ToDo: Logout user
  res.redirect(_routes["default"].home);
};

exports.logout = logout;

var userDetail = function userDetail(req, res) {
  return res.render('userDetail', {
    pageTitle: 'User Detail'
  });
};

exports.userDetail = userDetail;

var userEditProfile = function userEditProfile(req, res) {
  return res.render('userEditProfile', {
    pageTitle: 'User Edit Profile'
  });
};

exports.userEditProfile = userEditProfile;

var userChangePassword = function userChangePassword(req, res) {
  return res.render('userChangePassword', {
    pageTitle: 'User Change Password'
  });
};

exports.userChangePassword = userChangePassword;