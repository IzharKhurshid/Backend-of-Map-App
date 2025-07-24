const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const connectDB = require("./configs/database");
const favoritePlacesRoutes = require("./routes/favoritePlacesRoutes");

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use('/api/favoriteplaces',favoritePlacesRoutes)

connectDB();


app.listen(PORT, () => {
  console.log(`Server is running on Port : ${PORT}`);
});
