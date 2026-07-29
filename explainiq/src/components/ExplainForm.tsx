"use client";

import { useState } from "react";

export default function ExplainForm() {
  const [text, setText] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!text.trim()) return;

    setLoading(true);
    setFeedback("");

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ explanation: text }),
      });

      const data = await response.json();
      setFeedback(data.feedback);
    } catch (error) {
      setFeedback("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl flex flex-col gap-4">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Explain the concept in your own words..."
        className="w-full min-h-[150px] p-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
      />

      <button
        onClick={handleSubmit}
        disabled={loading || !text.trim()}
        className="bg-blue-600 text-white rounded-xl py-3 font-medium disabled:opacity-50 hover:bg-blue-700 transition"
      >
        {loading ? "Analyzing" : "Get AI Feedback"}
      </button>

      {feedback && (
        <div className="mt-4 p-4 rounded-2xl bg-blue-50 border border-blue-100 whitespace-pre-line text-gray-800">
          {feedback}
        </div>
      )}
    </div>
  );
}