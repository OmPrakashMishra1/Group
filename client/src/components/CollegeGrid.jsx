import React from "react";
import CollegeCard from "./CollegeCard";

export default function CollegeGrid({ colleges, searchQuery, onReview }) {
  return (
    <section id="reviews">
      <div className="section-header">
        <h2>Popular This Week</h2>
        <div className="more">
          MORE <span>›</span>
        </div>
      </div>

      <div className="grid-layout">
        {colleges.length > 0 ? (
          colleges.map((college) => (
            <CollegeCard
              key={college.id}
              college={college}
              onReview={onReview}
            />
          ))
        ) : (
          <p style={{ textAlign: "center", color: "var(--text-muted)" }}>
            No colleges found matching "{searchQuery}"
          </p>
        )}
      </div>
    </section>
  );
}

