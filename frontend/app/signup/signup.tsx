"use client";
import React from "react";

export default function SignupPage() {
  return (
    <main className="h-[100vh] w-full bg-black bg-opacity-90 flex items-center justify-center">
      {/* Card structure */}
      <div className="bg-black bg-opacity-60 p-10 rounded-lg shadow-2xl border border-gray-700 backdrop-blur-md w-[90%] max-w-md">
        <h2 className="text-left text-3xl font-bold text-white mb-8">Sign Up</h2>
        <h2 className="text-left text-1xl font-bold text-white mb-4">Welcome to CrowdEther! Join the Future!</h2>
        <form className="space-y-6">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-200">Email</label>
            <input
              type="email"
              className="w-full mt-1 p-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-400"
              placeholder="example@example.com"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-200">Password</label>
            <input
              type="password"
              className="w-full mt-1 p-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-400"
              placeholder="••••••••"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-200">Confirm Password</label>
            <input
              type="password"
              className="w-full mt-1 p-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-400"
              placeholder="••••••••"
            />
          </div>

          {/* Submit Button */}
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
