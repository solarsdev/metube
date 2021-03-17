import express from 'express';
import routes from '../routes';

const userRouter = express.Router();

userRouter.get(routes.home, (req, res) => res.send('Hi! im user root!'));
userRouter.get(routes.userDetail, (req, res) => res.send('Hi! im user detail'));
userRouter.get(routes.userEditProfile, (req, res) =>
  res.send('Hi! im user edit profile'),
);
userRouter.get(routes.userChangePassword, (req, res) =>
  res.send('Hi! im user change password'),
);

export default userRouter;
