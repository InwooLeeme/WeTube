import "core-js";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
const app = express();

app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended : true}));
app.use(morgan("dev"));

app.use(routes.home,globalRouter);      // "/"
app.use(routes.users, userRouter);      // "/users"
app.use(routes.videos, videoRouter);    // "/videos"

export default app;
