exports.getMarketData = (req, res) => {
  res.json([
    {
      crop: "Rice",
      price: "₹2500"
    },
    {
      crop: "Wheat",
      price: "₹2200"
    }
  ]);
};
const express = require("express");
const router = express.Router();
const marketController = require("../controllers/marketController");

router.get("/", marketController.getMarketData);

module.exports = router;
