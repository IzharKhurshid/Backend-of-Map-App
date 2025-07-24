const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const conectDB = require("./configs/database");
const favoritePlacesRoutes = require("./routes/favoritePlacesRoutes");

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());


app.use('/api/favoriteplaces',favoritePlacesRoutes)


app.listen(PORT, () => {
  console.log(`Server is running on Port : ${PORT}`);
  conectDB();
});
