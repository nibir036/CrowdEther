"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateProjectPage() {
  const [title, setTitle] = useState("");
  const [brief, setBrief] = useState("");
  const [detail, setDetail] = useState("");
  const [goal, setGoal] = useState<number | string>("");
  const [raised, setRaised] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Validate input
    if (!title || !brief || !detail || !goal || isNaN(Number(goal))) {
      setError("Please fill in all fields with valid data.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`, // Include the JWT token
        },
        body: JSON.stringify({
          title,
          brief,
          detail,
          goal: Number(goal),
          raised,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create project");
      }

      await response.json(); // Optional: handle the response
      router.push("/home"); // Redirect to homepage after successful project creation
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <main className="pt-16 h-[100vh] w-full bg-black bg-opacity-90 flex flex-col items-center">
        <div className="bg-gray-800 p-6 rounded-lg max-w-lg w-full">
          <h2 className="text-xl font-bold mb-4 text-white">Create a New Project</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Project Title"
              className="w-full bg-gray-700 text-white p-2 rounded"
              required
            />
            <input
              type="text"
              value={brief}
              onChange={(e) => setBrief(e.target.value)}
              placeholder="Brief Description"
              className="w-full bg-gray-700 text-white p-2 rounded"
              required
            />
            <textarea
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
              placeholder="Detailed Description"
              className="w-full bg-gray-700 text-white p-2 rounded h-32"
              required
            />
            <input
              type="number"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="Goal Amount"
              className="w-full bg-gray-700 text-white p-2 rounded"
              required
            />
            <button
              type="submit"
              className={`w-full bg-green-600 hover:bg-green-700 text-white rounded-lg py-2 ${loading ? "opacity-50" : ""}`}
              disabled={loading}
            >
              {loading ? "Creating..." : "Create Project"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
