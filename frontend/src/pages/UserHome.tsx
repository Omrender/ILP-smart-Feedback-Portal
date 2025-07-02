import React from "react";
import FeedbackForm from "../components/FeedbackForm";
import FeedbackList from "../components/FeedbackList";

export default function UserHome({ userId }: { userId: number }) {
  return (
    <div>
      <h2>Welcome User</h2>
      <FeedbackForm userId={userId} />
      <FeedbackList userId={userId} />
    </div>
  );
}
export {};