import express from 'express';
import {
  getJoin,
  getLogin,
  logout,
  postJoin,
  postLogin,
  socialLoginGoogle,
  socialLoginGoogleCallback,
} from '../controllers/userController';
import { home, search } from '../controllers/videoController';
import routes from '../routes';

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin, postLogin);
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);
globalRouter.get(routes.googleLogin, socialLoginGoogle);
globalRouter.get(routes.googleLoginCallback, socialLoginGoogleCallback);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);

export default globalRouter;
