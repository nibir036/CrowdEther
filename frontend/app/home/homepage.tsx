"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

// Define the type of a project
type Project = {
  id: string;
  title: string;
  brief: string;
  detail: string;
  goal: number;
  raised: number;
};

const calculateProgress = (goal: number, raised: number) => {
  return Math.min(Math.round((raised / goal) * 100), 100);
};

export default function HomePage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [donationAmount, setDonationAmount] = useState<number | string>("");
  const router = useRouter(); // Initialize the router

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/projects");
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const { projects: data } = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => {
      setSelectedProject(null);
      setDonationAmount(""); // Reset donation amount
    }, 300);
  };

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleDonate = async () => {
    if (!selectedProject || !donationAmount || isNaN(Number(donationAmount))) {
      alert("Please enter a valid donation amount");
      return;
    }

    try {
      const response = await fetch(`http://localhost:4000/api/projects/${selectedProject.id}/donate`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // Include the JWT token
        },
        body: JSON.stringify({ amount: Number(donationAmount) }),
      });

      if (!response.ok) {
        throw new Error("Failed to donate");
      }

      const updatedProject = await response.json();
      setProjects((prevProjects) =>
        prevProjects.map((project) =>
          project.id === updatedProject.id ? updatedProject : project
        )
      );
      closeModal();
    } catch (err) {
      alert(err instanceof Error ? err.message : "An unknown error occurred");
    }
  };

  // Function to handle navigation
  const handleCreateProject = () => {
    router.push("/projects"); // Change to your create project route
  };

  const handleMyProjects = () => {
    router.push("/myprojects"); // Change to your my projects route
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token
    router.push("/login"); // Redirect to the login page
  };

  if (loading) {
    return <div className="text-white text-center pt-16"><p>Loading projects...</p></div>;
  }

  if (error) {
    return <div className="text-red-500 text-center pt-16"><p>{error}</p></div>;
  }

  return (
    <div className="relative">
      <main className="pt-16 h-[100vh] w-full bg-black bg-opacity-90 flex flex-col items-center">
        <div className="flex space-x-4 mb-4">
          <button
            onClick={handleCreateProject}
            className="bg-transparent border border-green-500 text-white rounded-lg py-2 px-4 hover:bg-green-500 transition duration-300"
          >
            Create Project
          </button>
          <button
            onClick={handleMyProjects}
            className="bg-transparent border border-green-500 text-white rounded-lg py-2 px-4 hover:bg-green-500 transition duration-300"
          >
            My Projects
          </button>
          <button
            onClick={handleLogout}
            className="bg-transparent border border-red-500 text-white rounded-lg py-2 px-4 hover:bg-red-500 transition duration-300"
          >
            Logout
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
          {projects.map((project) => {
            const progress = calculateProgress(project.goal, project.raised);
            return (
              <div key={project.id} className="relative min-h-[200px] bg-gray-800 p-4 rounded-lg hover:shadow-xl overflow-hidden group">
                <h3 className="text-white text-lg font-semibold">{project.title}</h3>
                <p className="text-gray-400">{project.brief}</p>

                <div className="absolute inset-0 bg-gray-900 bg-opacity-80 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-green-500 h-2.5 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>

                  <p className="text-sm text-gray-300 mt-2">{progress}% of target met</p>

                  <div className="flex space-x-4 mb-4">
                    <button
                      className="w-full bg-black hover:bg-green-900 text-1xl rounded-lg"
                      onClick={() => openModal(project)}
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300" style={{ opacity: showModal ? 1 : 0 }}>
          <div className={`bg-black p-6 rounded-lg shadow-lg max-w-lg w-full border-2 border-gray-800 transform transition-transform duration-300 ${showModal ? "scale-100" : "scale-90"}`}>
            <h2 className="text-xl font-bold mb-4 border-b border-gray-300 pb-2">{selectedProject.title}</h2>
            <p className="mb-4">{selectedProject.detail}</p>

            <div className="w-full bg-gray-300 rounded-full h-2.5 mb-4">
              <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${calculateProgress(selectedProject.goal, selectedProject.raised)}%` }}></div>
            </div>
            <p className="mb-4">{calculateProgress(selectedProject.goal, selectedProject.raised)}% of the target met</p>

            <input
              type="number"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              className="w-full bg-gray-700 text-white p-2 rounded mb-4"
              placeholder="Enter donation amount"
            />

            <button
              className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg py-2 mb-4"
              onClick={handleDonate}
            >
              Donate
            </button>

            <button className="w-full bg-gray-400 hover:bg-gray-500 text-white rounded-lg py-2" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
