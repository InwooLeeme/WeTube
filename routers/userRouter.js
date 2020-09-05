import express from "express";
import routes from "../routes";
import {
  editProfile,
  changePassword,
  userDetail,
} from "../controller/userController";
import { onlyPrivate } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate, editProfile); //  /users/editProfile
userRouter.get(routes.changePassword, onlyPrivate, changePassword); // /users/change-password
userRouter.get(routes.userDetail(), userDetail); // /users/userDetail

export default userRouter;
