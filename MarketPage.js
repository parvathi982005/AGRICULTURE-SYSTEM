import React, { useEffect, useState } from "react";
import API from "../services/api";

function MarketPage() {
  const [market, setMarket] = useState([]);

  useEffect(() => {
    API.get("/market")
      .then((res) => setMarket(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Market Prices</h2>

      {market.map((item, index) => (
        <div key={index}>
          <h3>{item.crop}</h3>
          <p>Price: {item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default MarketPage;
