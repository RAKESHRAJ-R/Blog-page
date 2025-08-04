import React from "react";
import "./Superbikes.css";

const Superbikes = () => {
  const superbikes = [
    "Kawasaki Ninja H2R",
    "Ducati Panigale V4 R",
    "BMW S1000RR",
    "Suzuki Hayabusa",
    "Yamaha YZF-R1M",
    "Honda CBR1000RR-R Fireblade",
    "KTM RC 8C",
    "Aprilia RSV4 Factory",
    "MV Agusta F4 RC",
    "Triumph Daytona Moto2 765"
  ];

  return (
    <div className="superbike-container">
      <h2 className="superbike-title">🏍️ Top 10 Superbikes of 2025</h2>
      <ul className="superbike-list">
        {superbikes.map((bike, index) => (
          <li key={index}>{index + 1}. {bike}</li>
        ))}
      </ul>
    </div>
  );
};

export default Superbikes;
