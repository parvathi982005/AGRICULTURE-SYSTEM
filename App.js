import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CropPage from "./pages/CropPage";
import WeatherPage from "./pages/WeatherPage";
import MarketPage from "./pages/MarketPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CropPage />} />
        <Route path="/weather" element={<WeatherPage />} />
        <Route path="/market" element={<MarketPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
