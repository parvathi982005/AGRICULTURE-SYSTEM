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
