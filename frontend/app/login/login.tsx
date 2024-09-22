"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation for redirection in app folder

export default function LoginPage() {
  const router = useRouter(); // Initialize the router for redirection
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/login", { // Updated API endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        // Check if the token exists in the response
        if (data.token) {
          localStorage.setItem("token", data.token); // Store the token
          router.push("/home"); // Redirect to home page
        } else {
          setError("Login failed. No token received.");
        }
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="h-[100vh] w-full bg-black bg-opacity-90 flex items-center justify-center">
      <div className="bg-black bg-opacity-60 p-10 rounded-lg shadow-2xl border border-gray-700 backdrop-blur-md w-[90%] max-w-md">
        <h2 className="text-left text-3xl font-bold text-white mb-8">Log In</h2>
        <h2 className="text-left text-1xl font-bold text-white mb-4">Welcome Back!</h2>
        <form className="space-y-6" onSubmit={handleLogin}>
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-200">Email</label>
            <input
              type="email"
              className="w-full mt-1 p-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-400"
              placeholder="example@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-200">Password</label>
            <input
              type="password"
              className="w-full mt-1 p-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-400"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500">{error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-black shadow-2xl border border-gray-700 hover:bg-gray-900 text-white rounded-lg transition duration-300 font-semibold"
          >
            Log In
          </button>
        </form>
      </div>
    </main>
  );
}
