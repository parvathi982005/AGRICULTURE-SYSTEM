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
