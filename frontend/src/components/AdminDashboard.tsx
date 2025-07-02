import React, { useEffect, useState } from "react";
import { getAllFeedbacks } from "../services/api";

export default function AdminDashboard() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    getAllFeedbacks().then(setData);
  }, []);

  return (
    <div>
      <h3>All Feedbacks</h3>
      {data.map(fb => (
        <div key={fb.id}>
          <b>{fb.category}</b>: {fb.text} | Sentiment: {fb.sentiment} | By: {fb.user?.username}
        </div>
      ))}
    </div>
  );
}