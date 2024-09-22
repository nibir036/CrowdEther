"use client";
import React from "react";
import {Light} from "./contents/light";
import {Writer } from "./contents/writing";
import Link from "next/link";





export default function LandingPage() {
    const words = [
        {
            text:"Generate"
        },
        {
            text:"Funds"
        },
        {
            text:"for"
        },
        {
            text:"Your"
        },
        {
            text:"Needs"
        },
        {
            text:"with"
        },
        {
            text:"CrowdEther",
            className: "text-blue-500"
        }
    ]

    return (
        <main className=" h-[100vh] w-full bg-black bg-grid-small-white/[0.2] relative flex items-center justify-center">
        
        <div className="flex flex-col items-center justify-center h-[40rem]  ">
        <Light
            className="-top-40 -left-10 md:left-32 md:-top-20 h-screen" 
            fill="white"
        />

        <   Light
            className="top-10 left-full "
            fill="purple"
        />
        
        <Light
            className="top-28 left-80 h-[80vh] w-[50vw]"
            fill="cyan"
        />
        
        
        <p className="text-neutral-200 text-xs lg:text:2xl xl:text-3xl  sm:text-base md:text-1xl font-bold ">
          Welcome To CrowdEther!  

        </p>
        <Writer words={words} />
        
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Link href = "/signup">
        <button className="w-40 h-10 rounded-xl bg-black border border-white border-transparent text-white text-sm">
          Join now
        </button>
        </Link>
        <Link href = "/login">
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Donate
        </button>
        </Link>
        </div>
        </div>
        
        </main>
        
    );
}
