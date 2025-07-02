// File: frontend/src/components/FeedbackList.tsx
import React, { useEffect, useState } from "react";
import { getFeedbacks } from "../services/api";

interface Feedback {
  id: number;
  category: string;
  text: string;
  sentiment: string;
  submittedAt: string;
}

interface Props {
  userId: number;
}

const FeedbackList: React.FC<Props> = ({ userId }) => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    async function fetchFeedbacks() {
      try {
        const data = await getFeedbacks(userId);
        setFeedbacks(data);
      } catch (error) {
        console.error("Failed to load feedbacks", error);
      }
    }

    fetchFeedbacks();
  }, [userId]);

  return (
    <div>
      <h3>Your Feedback History</h3>
      {feedbacks.length === 0 ? (
        <p>No feedback submitted yet.</p>
      ) : (
        <ul>
          {feedbacks.map((fb) => (
            <li key={fb.id} style={{ marginBottom: "10px" }}>
              <strong>Category:</strong> {fb.category} <br />
              <strong>Text:</strong> {fb.text} <br />
              <strong>Sentiment:</strong> {fb.sentiment} <br />
              <strong>Date:</strong> {new Date(fb.submittedAt).toLocaleString()}
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FeedbackList;
