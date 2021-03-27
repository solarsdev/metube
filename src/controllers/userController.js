import passport from 'passport';
import routes from '../routes';
import User from '../models/User';

export const getJoin = (req, res) => res.render('join', { pageTitle: '新規登録' });
export const postJoin = async (req, res, next) => {
  const {
    body: { lastName, firstName, email, password, passwordConfirm },
  } = req;

  if (password !== passwordConfirm) {
    res.status(400).render('join', { pageTitle: '新規登録' });
  } else {
    try {
      const user = User({
        email,
        password,
        lastName,
        firstName,
      });
      await User.register(user, password);
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);
    }
  }
};

export const getLogin = (req, res) => res.render('login', { pageTitle: 'ログイン' });

export const postLogin = passport.authenticate('local', {
  successRedirect: routes.home,
  failureRedirect: routes.login,
});

export const logout = (req, res) => {
  // ToDo: Logout user
  res.redirect(routes.home);
};

export const userDetail = (req, res) => res.render('userDetail', { pageTitle: 'User Detail' });
export const userEditProfile = (req, res) =>
  res.render('userEditProfile', { pageTitle: 'User Edit Profile' });
export const userChangePassword = (req, res) =>
  res.render('userChangePassword', { pageTitle: 'User Change Password' });
