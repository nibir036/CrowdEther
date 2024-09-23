"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Project = {
  id: string;
  title: string;
  brief: string;
  detail: string;
  goal: number;
  raised: number;
};

export default function MyProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/user-projects", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Include the JWT token
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch your projects");
        }

        const { projects: data } = await response.json();
        setProjects(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleDelete = async (projectId: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this project?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:4000/api/projects/${projectId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete project");
      }

      // Update the projects state by filtering out the deleted project
      setProjects((prevProjects) => prevProjects.filter((project) => project.id !== projectId));
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred");
    }
  };

  const handleBack = async () => {
    router.push("/home")
  }

  if (loading) {
    return (
      <div className="text-white text-center pt-16">
        <p>Loading your projects...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center pt-16">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="relative">
      <main className="pt-16 h-[100vh] w-full bg-black bg-opacity-90 flex flex-col items-center">
        <h2 className="text-xl font-bold text-white mb-4">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative h-64 min-h-[250px] min-w-[350px] bg-gray-800 p-4 rounded-lg hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <h3 className="text-white text-lg font-semibold">{project.title}</h3>
                <p className="text-gray-400">{project.brief}</p>
              </div>
              <div>
                <p className="text-gray-300">Goal: {project.goal}</p>
                <p className="text-gray-300">Raised: {project.raised}</p>
              </div>
              <button
                onClick={() => handleDelete(project.id)}
                className="mt-2 w-full bg-red-600 hover:bg-red-700 text-white rounded-lg py-1"
              >
                Delete Project
              </button>
            </div>
          ))}
        </div>
        <button
                onClick={() => handleBack()}
                className="mt-2 w-[250px] bg-red-600 hover:bg-green-700 text-white rounded-lg py-1"
              >
                Go Back
              </button>
      </main>
    </div>
  );
}
