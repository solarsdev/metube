// Global Router
const HOME = '/';
const JOIN = '/join';
const LOGIN = '/login';
const LOGOUT = '/logout';
const SEARCH = '/search';

// User Router
const USERS = '/users';
const USER_DETAIL = '/:id';
const USER_EDIT_PROFILE = '/edit-profile';
const USER_CHANGE_PASSWORD = '/change-password';
const GOOGLE_LOGIN = '/auth/google';
const GOOGLE_LOGIN_CALLBACK = '/auth/google/callback';

// Video Router
const VIDEOS = '/videos';
const VIDEO_UPLOAD = '/upload';
const VIDEO_DETAIL = '/:id';
const VIDEO_EDIT = '/:id/edit';
const VIDEO_DELETE = '/:id/delete';

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,

  users: USERS,
  userDetail: (id) => {
    if (id) {
      return `${USERS}/${id}`;
    }

    return USER_DETAIL;
  },
  userEditProfile: USER_EDIT_PROFILE,
  userChangePassword: USER_CHANGE_PASSWORD,

  googleLogin: GOOGLE_LOGIN,
  googleLoginCallback: GOOGLE_LOGIN_CALLBACK,

  videos: VIDEOS,
  videoUpload: VIDEO_UPLOAD,
  videoDetail: (id) => {
    if (id) {
      return `${VIDEOS}/${id}`;
    }
    return VIDEO_DETAIL;
  },
  videoEdit: (id) => {
    if (id) {
      return `${VIDEOS}/${id}/edit`;
    }
    return VIDEO_EDIT;
  },
  videoDelete: (id) => {
    if (id) {
      return `${VIDEOS}/${id}/delete`;
    }
    return VIDEO_DELETE;
  },
};

export default routes;
