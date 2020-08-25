import express from "express";
import routes from "../routes";
import { users, editProfile, changePassword, userDetail } from "../controller/userController";

const userRouter = express.Router();

userRouter.get(routes.users, users);        // /users/users
userRouter.get(routes.editProfile, editProfile);        //  /users/editProfile
userRouter.get(routes.changePassword, changePassword);  // /users/change-password
userRouter.get(routes.userDetail, userDetail);      // /users/userDetail

export default userRouter;