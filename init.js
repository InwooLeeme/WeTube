import "./db";
import app from "./app";
import dotenv from "dotenv";
import "./models/Video";
import "./models/Comment";
import "./models/User";

dotenv.config();

const PORT = process.env.PORT || 3000;

const handleListening = () => console.log(`Listening on: https://localhost:${PORT}`);

app.listen(PORT,handleListening);