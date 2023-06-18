const express = require("express")
const app = express();

require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true}));

const AllMyJokeRoutes = require("./routes/joke.routes");
AllMyJokeRoutes(app);

app.listen(5000, () => console.log("this server is listening on port 5000"))