import React, { useState } from "react";
import { submitFeedback } from "../services/api";

export default function FeedbackForm({ userId }: { userId: number }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async () => {
    await submitFeedback({ text, category, userId });
    alert("Feedback submitted!");
  };

  return (
    <div>
      <h3>Submit Feedback</h3>
      <input placeholder="Category" onChange={e => setCategory(e.target.value)} />
      <textarea placeholder="Your feedback..." onChange={e => setText(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}