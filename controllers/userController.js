export const join = (req, res) => res.render('join', { pageTitle: 'Join' });
export const login = (req, res) => res.render('login', { pageTitle: 'Login' });
export const logout = (req, res) =>
  res.render('logout', { pageTitle: 'Logout' });
export const userDetail = (req, res) =>
  res.render('userDetail', { pageTitle: 'User Detail' });
export const userEditProfile = (req, res) =>
  res.render('userEditProfile', { pageTitle: 'User Edit Profile' });
export const userChangePassword = (req, res) =>
  res.render('userChangePassword', { pageTitle: 'User Change Password' });
