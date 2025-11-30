import React from "react";
import ActivityItem from "./ActivityItem";

export default function SidebarActivity({ reviews, colleges }) {
  return (
    <aside>
      <h2 className="sidebar-title">Recent Activity</h2>
      {reviews.map((review) => (
        <ActivityItem
          key={review.id}
          review={review}
          college={colleges.find((c) => c.id === Number(review.collegeId))}
        />
      ))}

      <div className="pro-card">
        <h3>Campus Log Pro</h3>
        <p>
          Support us and get stats, customized posters, and ad-free browsing.
        </p>
        <button className="btn-primary" style={{ width: "100%" }}>
          Learn More
        </button>
      </div>
    </aside>
  );
}
