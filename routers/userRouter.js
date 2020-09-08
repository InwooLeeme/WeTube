import express from "express";
import routes from "../routes";
import {
  changePassword,
  userDetail,
  getEditProfile,
  postEditProfile,
} from "../controller/userController";
import { onlyPrivate, uploadAvatar } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.post(routes.editProfile, onlyPrivate, uploadAvatar, postEditProfile);

userRouter.get(routes.changePassword, onlyPrivate, changePassword); // /users/change-password
userRouter.get(routes.userDetail(), userDetail); // /users/userDetail

export default userRouter;
