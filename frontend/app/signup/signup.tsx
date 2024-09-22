"use client";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          confirmPassword, // Include confirmPassword in the request body
        }),
      });

      if (response.ok) {
        // Redirect to the login page after successful signup
        router.push('/login');
      } else {
        const errorData = await response.json();
        alert(errorData.error || "Signup failed, please try again.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="h-[100vh] w-full bg-black bg-opacity-90 flex items-center justify-center">
      <div className="bg-black bg-opacity-60 p-10 rounded-lg shadow-2xl border border-gray-700 backdrop-blur-md w-[90%] max-w-md">
        <h2 className="text-left text-3xl font-bold text-white mb-8">Sign Up</h2>
        <h2 className="text-left text-1xl font-bold text-white mb-4">Welcome to CrowdEther! Join the Future!</h2>
        <form className="space-y-6" onSubmit={handleSignup}>
          <div>
            <label className="block text-sm font-medium text-gray-200">Email</label>
            <input
              type="email"
              className="w-full mt-1 p-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-400"
              placeholder="example@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required // Make email required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200">Password</label>
            <input
              type="password"
              className="w-full mt-1 p-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-400"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required // Make password required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200">Confirm Password</label>
            <input
              type="password"
              className="w-full mt-1 p-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-400"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required // Make confirm password required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-black shadow-2xl border border-gray-700 hover:bg-gray-900 text-white rounded-lg transition duration-300 font-semibold"
          >
            Sign Up
          </button>
        </form>
      </div>
    </main>
  );
}
