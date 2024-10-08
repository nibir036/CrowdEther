"use client";
import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center p-4 bg-transparent">
      <div className="text-white font-bold text-xl">CrowdEther</div>
      <div className="space-x-4">
        <Link href="/login" className="text-white hover:text-green-400">
          Logout
        </Link>
        <Link href="/project" className="text-white hover:text-green-400">
          Create
        </Link>
      </div>
    </nav>
  );
}
