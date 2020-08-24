import "core-js";
import express from "express";
const app = express();
const PORT = 3000;

const handleListening = () =>{
    console.log(`Server is running: http://localhost:${PORT}`);
}

const handleHome = (req, res) => {
    //console.log(req);
    res.send(`Hi! From Home`);
}

function hadnleProfile(req, res){
    res.send('U are on my profile');
}

app.get('/',handleHome);

app.get('/profile',hadnleProfile);

app.listen(PORT,handleListening);