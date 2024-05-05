const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const routes = require("./Routes/routes");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000; // Corrected the logical OR operator

app.use(express.json());
app.use(cors());

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.error(err));

app.use("/api", routes);

app.listen(PORT, () => console.log(`Listening at ${PORT}`));
