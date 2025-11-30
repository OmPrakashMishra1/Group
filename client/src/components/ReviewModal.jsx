import React, { useEffect, useState } from "react";
import { X, Star } from "lucide-react";

export default function ReviewModal({
  isOpen,
  onClose,
  onSubmit,
  colleges,
  initialCollegeId,
  availableTags,
}) {
  const [collegeId, setCollegeId] = useState(initialCollegeId || colleges[0]?.id);
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");
  const [tags, setTags] = useState([]);
  const [hoverRating, setHoverRating] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setCollegeId(initialCollegeId || colleges[0]?.id);
      setRating(0);
      setText("");
      setTags([]);
      setHoverRating(0);
    }
  }, [isOpen, initialCollegeId, colleges]);

  if (!isOpen) return null;

  const toggleTag = (tag) => {
    if (tags.includes(tag)) {
      setTags(tags.filter((t) => t !== tag));
    } else if (tags.length < 3) {
      setTags([...tags, tag]);
    }
  };

  const handleSubmit = () => {
    if (!rating) {
      alert("Please leave a rating!");
      return;
    }
    onSubmit({ collegeId, rating, text, tags });
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Log a College Visit</h3>
          <button
            onClick={onClose}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <X />
          </button>
        </div>

        <div className="modal-body">
          <div className="form-group">
            <label className="form-label">Select College</label>
            <select
              className="form-select"
              value={collegeId}
              onChange={(e) => setCollegeId(Number(e.target.value))}
            >
              {colleges.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Rating</label>
            <div>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  className="star-rating-btn"
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={() => setRating(star)}
                >
                  <Star
                    size={28}
                    fill={
                      star <= (hoverRating || rating) ? "#00e054" : "transparent"
                    }
                    color={
                      star <= (hoverRating || rating) ? "#00e054" : "#2c3440"
                    }
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Review (Optional)</label>
            <textarea
              className="form-textarea"
              rows={3}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="How were the vibes? Be honest."
            />
          </div>

          <div className="form-group">
            <label className="form-label">Vibe Check (Max 3)</label>
            <div>
              {availableTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleTag(tag)}
                  className={`tag-btn ${tags.includes(tag) ? "selected" : ""}`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="modal-actions">
            <button className="btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button className="btn-primary" onClick={handleSubmit}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
