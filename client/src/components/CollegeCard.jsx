import React, { useState } from "react";

export default function CollegeCard({ college, onReview }) {
  const [imgSrc, setImgSrc] = useState(college.image);

  return (
    <div className="college-card" onClick={() => onReview(college.id)}>
      <div className="poster-wrapper">
        <img
          src={imgSrc}
          alt={college.name}
          onError={() =>
            setImgSrc(
              "https://via.placeholder.com/400x600/1f252b/00e054?text=Campus+Log"
            )
          }
        />
        <div className="rating-badge">{college.rating}</div>
        <div className="overlay">
          <button className="btn-primary" style={{ width: "100%" }}>
            Review
          </button>
        </div>
      </div>

      <div className="college-info">
        <h3>{college.name}</h3>
        <p>{college.location}</p>
      </div>
    </div>
  );
}

