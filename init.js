import app from "./app";

const PORT = 3000;

const handleListening = () => console.log(`Listening on: https://localhost:${PORT}`);

app.listen(PORT,handleListening);