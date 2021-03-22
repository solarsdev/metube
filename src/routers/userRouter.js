import express from 'express';
import { userChangePassword, userDetail, userEditProfile } from '../controllers/userController';
import routes from '../routes';

const userRouter = express.Router();

userRouter.get(routes.userEditProfile, userEditProfile);
userRouter.get(routes.userChangePassword, userChangePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
