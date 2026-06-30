"use client";
import { useState, useEffect, useCallback } from "react";
import { Search, SlidersHorizontal, TrendingUp, Clock, Users, Sparkles } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import GlassCard from "@/components/ui/GlassCard";
import { CATEGORIES } from "@/lib/constants";

type Project = {
  id: string; title: string; brief: string; detail: string;
  goal: number; raised: number; category: string; tags: string[];
  deadline: string; imageUrl?: string | null; backerCount: number; createdAt: string;
  user?: { name: string | null; email: string };
};

const SORT_OPTIONS = [
  { value: "newest", label: "Newest", icon: Sparkles },
  { value: "most-funded", label: "Most funded", icon: TrendingUp },
  { value: "ending-soon", label: "Ending soon", icon: Clock },
  { value: "most-backers", label: "Most backers", icon: Users },
];

export default function HomePage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("newest");
  const [loading, setLoading] = useState(true);
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce search
  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(search), 400);
    return () => clearTimeout(t);
  }, [search]);

  const fetchProjects = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams({ sort, category });
    if (debouncedSearch) params.set("search", debouncedSearch);
    try {
      const res = await fetch(`/api/projects?${params}`);
      const data = await res.json();
      setProjects(data.projects || []);
    } finally {
      setLoading(false);
    }
  }, [debouncedSearch, category, sort]);

  useEffect(() => { fetchProjects(); }, [fetchProjects]);

  function handleDonate(id: string, amount: number) {
    setProjects((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, raised: p.raised + amount, backerCount: p.backerCount + 1 } : p
      )
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-1">
          Explore <span className="gradient-text">campaigns</span>
        </h1>
        <p className="text-white/50">Back the ideas that matter to you</p>
      </div>

      {/* Search + Sort */}
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
          <input
            type="text"
            placeholder="Search projects, tags…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white/[0.05] border border-white/[0.10] rounded-xl px-4 pl-10 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-violet-500/50 transition-all text-sm"
          />
        </div>
        <div className="flex items-center gap-2">
          <SlidersHorizontal size={15} className="text-white/40" />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="bg-white/[0.05] border border-white/[0.10] rounded-xl px-3 py-2.5 text-white/80 focus:outline-none focus:border-violet-500/50 transition-all text-sm cursor-pointer"
          >
            {SORT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value} className="bg-[#07070f]">{o.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Category chips */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-7 scrollbar-hide">
        {["All", ...CATEGORIES].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
              category === cat
                ? "bg-gradient-to-r from-violet-600 to-pink-600 border-transparent text-white shadow-lg shadow-violet-500/20"
                : "bg-white/[0.04] border-white/[0.08] text-white/60 hover:text-white hover:bg-white/[0.08]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {Array.from({ length: 8 }).map((_, i) => (
            <GlassCard key={i} className="h-72 animate-pulse" />
          ))}
        </div>
      ) : projects.length === 0 ? (
        <div className="text-center py-24">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="text-white font-semibold text-lg mb-2">No projects found</h3>
          <p className="text-white/40 text-sm">
            {debouncedSearch ? `No results for "${debouncedSearch}"` : "Be the first to create a campaign!"}
          </p>
        </div>
      ) : (
        <>
          <p className="text-white/40 text-sm mb-4">{projects.length} campaign{projects.length !== 1 ? "s" : ""}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} onDonate={handleDonate} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
