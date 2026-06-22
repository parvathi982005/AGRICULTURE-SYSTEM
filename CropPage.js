import React, { useEffect, useState } from "react";
import API from "../services/api";

function CropPage() {
  const [crops, setCrops] = useState([]);

  useEffect(() => {
    API.get("/crops")
      .then((res) => setCrops(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Crop Recommendations</h2>

      {crops.map((crop, index) => (
        <div key={index}>
          <h3>{crop.crop}</h3>
          <p>Season: {crop.season}</p>
          <p>Soil: {crop.soil}</p>
        </div>
      ))}
    </div>
  );
}

export default CropPage;
