import React from "react";
import { Star, Heart, MessageCircle } from "lucide-react";

export default function ActivityItem({ review, college }) {
  return (
    <div className="feed-item">
      <img src={review.avatar} alt={review.user} className="avatar" />
      <div className="feed-content">
        <div className="feed-header">
          <div>
            <span className="username">{review.user}</span>
            <span className="action-text"> visited </span>
            <span className="college-link">{college?.name || "Unknown"}</span>
          </div>
          <div className="stars">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} size={12} fill="#00e054" color="#00e054" />
            ))}
          </div>
        </div>

        <div className="tags">
          {review.tags.map((tag, i) => (
            <span key={i} className="tag">
              {tag}
            </span>
          ))}
        </div>

        {review.text && (
          <p className="review-text">"{review.text}"</p>
        )}

        <div
          style={{
            display: "flex",
            gap: "1rem",
            fontSize: "0.75rem",
            marginTop: "0.5rem",
            color: "var(--text-muted)",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Heart size={12} /> Like
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <MessageCircle size={12} /> Comment
          </span>
          <span style={{ marginLeft: "auto" }}>{review.time}</span>
        </div>
      </div>
    </div>
  );
}
