import React from "react";
import { Link } from "react-router-dom";
import "./Indiatrips.css";

const Indiatrips = () => {
  const trips = [
    { place: "Leh Ladakh", desc: "The dream ride through the Himalayas with snow-capped mountains and scenic passes." },
    { place: "Manali to Spiti Valley", desc: "Thrilling roads, high-altitude lakes, and raw natural beauty." },
    { place: "Goa Coastal Ride", desc: "Beach vibes, sea breeze, and the ultimate relaxed biking experience." },
    { place: "Rann of Kutch", desc: "Ride through the mesmerizing salt desert under the moonlight." },
    { place: "Jaipur to Jaisalmer", desc: "Golden sands, forts, and desert adventures in Rajasthan." },
    { place: "Shillong to Cherrapunji", desc: "Lush greenery, waterfalls, and the cleanest village in Asia." },
    { place: "Mumbai to Lonavala", desc: "A short yet scenic Western Ghats ride." },
    { place: "Chennai to Pondicherry", desc: "A smooth coastal highway with French colonial vibes at the destination." },
    { place: "Bangalore to Ooty", desc: "Winding roads through the Nilgiris and tea plantations." },
    { place: "Hyderabad to Araku Valley", desc: "Curvy ghat roads, coffee plantations, and tribal culture." }
  ];

  return (
    <div className="indiatrips-container">
      <h2 className="indiatrips-title">🏍️ Best Bike Trips in India</h2>
      <div className="trip-list">
        {trips.map((trip, index) => (
          <div key={index} className="trip-card">
            <h3>{index + 1}. {trip.place}</h3>
            <p>{trip.desc}</p>
          </div>
        ))}
      </div>
      <Link to="/blog" className="back-btn">← Back to Blog</Link>
    </div>
  );
};

export default Indiatrips;
