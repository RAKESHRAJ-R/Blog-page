import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Welcome to BikeWlog 🏍️</h1>
        <p>
          Dive into the world of motorcycles – reviews, trips, and lifestyle stories.
          Whether you love superbikes, cruisers, or adventure rides, we’ve got content 
          that fuels your passion.
        </p>
        <a href="/blog" className="explore-btn">Explore Blogs</a>
      </div>
    </div>
  );
};

export default Home;
