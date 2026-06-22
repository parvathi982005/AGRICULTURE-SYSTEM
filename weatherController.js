exports.getWeather = (req, res) => {
  res.json({
    temperature: "32°C",
    humidity: "75%",
    condition: "Cloudy"
  });
};
const express = require("express");
const router = express.Router();
const weatherController = require("../controllers/weatherController");

router.get("/", weatherController.getWeather);

module.exports = router;
