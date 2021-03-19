"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// Global Router
var HOME = '/';
var JOIN = '/join';
var LOGIN = '/login';
var LOGOUT = '/logout';
var SEARCH = '/search'; // User Router

var USERS = '/users';
var USER_DETAIL = '/:id';
var USER_EDIT_PROFILE = '/edit-profile';
var USER_CHANGE_PASSWORD = '/change-password'; // Video Router

var VIDEOS = '/videos';
var VIDEO_UPLOAD = '/upload';
var VIDEO_DETAIL = '/:id';
var VIDEO_DELETE = '/:id/delete';
var routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: function userDetail(id) {
    if (id) {
      return "".concat(USERS, "/").concat(id);
    } else {
      return USER_DETAIL;
    }
  },
  userEditProfile: USER_EDIT_PROFILE,
  userChangePassword: USER_CHANGE_PASSWORD,
  videos: VIDEOS,
  videoUpload: VIDEO_UPLOAD,
  videoDetail: function videoDetail(id) {
    if (id) {
      return "".concat(VIDEOS, "/").concat(id);
    } else {
      return VIDEO_DETAIL;
    }
  },
  videoDelete: VIDEO_DELETE
};
var _default = routes;
exports["default"] = _default;