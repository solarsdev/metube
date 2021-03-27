import dotenv from 'dotenv';
import passport from 'passport';
import passportGoogleOauth from 'passport-google-oauth';
import { postSocialLoginGoogle } from './controllers/userController';
import User from './models/User';

dotenv.config();

passport.use(User.createStrategy());

passport.use(
  new passportGoogleOauth.OAuth2Strategy(
    {
      clientID: process.env.LOGIN_GOOGLE_ID,
      clientSecret: process.env.LOGIN_GOOGLE_SECRET,
      callbackURL: `http://localhost:${process.env.PORT}/auth/google/callback`,
      passReqToCallback: true,
    },
    postSocialLoginGoogle,
  ),
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
