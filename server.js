const express = require("express");
const cors = require("cors");

const cropRoutes = require("./routes/cropRoutes");
const weatherRoutes = require("./routes/weatherRoutes");
const marketRoutes = require("./routes/marketRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/crops", cropRoutes);
app.use("/api/weather", weatherRoutes);
app.use("/api/market", marketRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
