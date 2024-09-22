"use client"; // Add this line

import React, { useState } from "react";
import Navbar from "@/components/navBar";

// Define the type of a project
type Project = {
  id: number;
  title: string;
  brief: string;
  detail: string;
  progress: number;
};

// Example data with progress
// Will br replaced with database data
const projects: Project[] = [
  {
    id: 1,
    title: "Project A",
    brief: "Brief description of Project A.",
    detail: "Detailed explanation of Project A including goals, progress, and impact.",
    progress: 60, // Progress in percentage
  },
  {
    id: 2,
    title: "Project B",
    brief: "Brief description of Project B.",
    detail: "Detailed explanation of Project B including goals, progress, and impact.",
    progress: 80, // Progress in percentage
  },
  {
    id: 3,
    title: "Project C",
    brief: "Brief description of Project C.",
    detail: "Detailed explanation of Project C including goals, progress, and impact.",
    progress: 45, // Progress in percentage
  },
  {
    id: 4,
    title: "Project D",
    brief: "Brief description of Project D.",
    detail: "Detailed explanation of Project D including goals, progress, and impact.",
    progress: 70, // Progress in percentage
  },
];

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => setSelectedProject(null), 300); // Delay to allow transition
  };

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setTimeout(() => setShowModal(true), 100); // Delay to start transition
  };

  return (
    <div className="relative">
      <Navbar />
      <main className="pt-16 h-[100vh] w-full bg-black bg-opacity-90 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative min-h-[200px] bg-gray-800 p-4 rounded-lg hover:shadow-xl overflow-hidden group"
            >
              <img className="min-h-[150px]" alt="project" />
              <h3 className="text-white text-lg font-semibold">{project.title}</h3>
              <p className="text-gray-400">{project.brief}</p>

              <div className="absolute inset-0 bg-gray-900 bg-opacity-80 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex space-x-4 mb-4">
                  <button className="w-full bg-black hover:bg-green-900 text-1xl rounded-lg">
                    Donate
                  </button>
                  <button
                    className="w-full bg-black hover:bg-green-900 text-1xl rounded-lg"
                    onClick={() => openModal(project)}
                  >
                    View
                  </button>
                </div>

                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-green-500 h-2.5 rounded-full transition-all duration-300"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>

                <p className="text-sm text-gray-300 mt-2">{project.progress}% of target met</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300"
             style={{ opacity: showModal ? 1 : 0 }}>
          <div className={`bg-black p-6 rounded-lg shadow-lg max-w-lg w-full border-2 border-gray-800 transform transition-transform duration-300 ${showModal ? "scale-100" : "scale-90"}`}>
            <h2 className="text-xl font-bold mb-4 border-b border-gray-300 pb-2">{selectedProject?.title}</h2>
            <p className="mb-4">{selectedProject?.detail}</p>

            <div className="w-full bg-gray-300 rounded-full h-2.5 mb-4">
              <div
                className="bg-green-500 h-2.5 rounded-full"
                style={{ width: `${selectedProject?.progress}%` }}
              ></div>
            </div>
            <p className="mb-4">{selectedProject?.progress}% of the target met</p>

            <button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg py-2 mb-4">
              Donate
            </button>

            <button
              className="w-full bg-gray-400 hover:bg-gray-500 text-white rounded-lg py-2"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
