exports.getCrops = (req, res) => {
  res.json([
    {
      crop: "Rice",
      season: "Kharif",
      soil: "Clay Soil"
    },
    {
      crop: "Wheat",
      season: "Rabi",
      soil: "Loamy Soil"
    }
  ]);
};
const express = require("express");
const router = express.Router();
const cropController = require("../controllers/cropController");

router.get("/", cropController.getCrops);

module.exports = router;
