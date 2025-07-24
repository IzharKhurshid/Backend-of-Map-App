const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const conectDB = require("./configs/database");
const favoritePlacesRoutes = require("./routes/favoritePlacesRoutes");

dotenv.config();
const app = express();

const Port = process.env.port;

app.use(express.json());
app.use(cors());


app.use('/api/favoriteplaces',favoritePlacesRoutes)


app.listen(Port, () => {
  console.log(`Server is running on Port : ${Port}`);
  conectDB();
});
