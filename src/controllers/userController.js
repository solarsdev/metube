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
      let user = await User.findOne({ email });

      if (user && !user.localId) {
        // is registered with social login
        res.status(400).render('join', { pageTitle: '新規登録' });
        return;
      }

      user = User({
        email,
        password,
        lastName,
        firstName,
        localId: email,
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

export const socialLoginGoogle = passport.authenticate('google', {
  scope: ['email', 'profile'],
});

export const postSocialLoginGoogle = async (_, __, ___, profile, done) => {
  const {
    _json: {
      sub: googleId,
      family_name: lastName,
      given_name: firstName,
      picture: avatarUrl,
      email,
    },
  } = profile;

  const user = await User.findOne({ email });
  if (user) {
    user.googleId = googleId;
    user.avatarUrl = avatarUrl;
    user.save();
    return done(null, user);
  }
  const newUser = await User.create({
    email,
    lastName,
    firstName,
    avatarUrl,
    googleId,
  });
  return done(null, newUser);
};

export const socialLoginGoogleCallback = passport.authenticate('google', {
  successRedirect: routes.home,
  failureRedirect: routes.home,
});

export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};

export const userDetail = (req, res) => res.render('userDetail', { pageTitle: 'User Detail' });
export const userEditProfile = (req, res) =>
  res.render('userEditProfile', { pageTitle: 'User Edit Profile' });
export const userChangePassword = (req, res) =>
  res.render('userChangePassword', { pageTitle: 'User Change Password' });
