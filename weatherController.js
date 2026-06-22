exports.getWeather = (req, res) => {
  res.json({
    temperature: "32°C",
    humidity: "75%",
    condition: "Cloudy"
  });
};
