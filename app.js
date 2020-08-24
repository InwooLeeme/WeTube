import "core-js";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
const app = express();
const PORT = 3000;

const handleListening = () => console.log(`Server is running: http://localhost:${PORT}`);


const handleHome = (req, res) => res.send(`Hi! From Home`);


function hadnleProfile(req, res){
    res.send('U are on my profile');
}
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended : true}));
app.use(morgan("dev"));

app.get('/',handleHome);

app.get('/profile',hadnleProfile);

app.listen(PORT,handleListening);