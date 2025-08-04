import React from "react";
import "./BlogPage.css";

// Import your images
import bike1 from "../assets/images/bike1.jpeg";
import bike2 from "../assets/images/bike2.jpeg";
import bike3 from "../assets/images/bike3.jpg";


const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "Top 10 Superbikes of 2025",
      desc: "Explore the latest superbikes that redefine speed and technology.",
      link: "/superbikes",
      
      img: bike1,
    },
    {
      id: 2,
      title: "Why Biking is a Lifestyle",
      desc: "Discover how biking connects you with freedom, passion, and adventure.",
      link: "/blog/lifestyle",
      img: bike2,
    },
    {
      id: 3,
      title: "Best Bike Trips in India",
      desc: "From Leh Ladakh to Goa – check out the dream rides every biker must try.",
      link: "/blog/trips",
      img: bike3,
    },
  ];

  return (
    <div className="blog-container">
      <h2 className="blog-title">🏍️ Ride Into the World of Bikes</h2>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.img} alt={blog.title} />
            <h3>{blog.title}</h3>
            <p>{blog.desc}</p>
            <a href={blog.link} className="read-more">
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
