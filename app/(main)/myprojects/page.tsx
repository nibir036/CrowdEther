"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Trash2, PlusCircle, TrendingUp, Users, Clock, AlertTriangle } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import { CATEGORY_BG, CATEGORY_COLORS, formatCurrency, getDaysLeft, getProgress, getProjectStatus } from "@/lib/constants";

type Project = {
  id: string; title: string; brief: string; goal: number; raised: number;
  category: string; tags: string[]; deadline: string; backerCount: number; createdAt: string;
};

export default function MyProjectsPage() {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [confirmId, setConfirmId] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/user/projects")
      .then((r) => r.json())
      .then((d) => setProjects(d.projects || []))
      .finally(() => setLoading(false));
  }, []);

  async function handleDelete(id: string) {
    setDeletingId(id);
    try {
      const res = await fetch(`/api/projects/${id}`, { method: "DELETE" });
      if (res.ok) setProjects((prev) => prev.filter((p) => p.id !== id));
    } finally {
      setDeletingId(null);
      setConfirmId(null);
    }
  }

  const totalRaised = projects.reduce((s, p) => s + p.raised, 0);
  const totalBackers = projects.reduce((s, p) => s + p.backerCount, 0);
  const activeCount = projects.filter((p) => getProjectStatus(p.raised, p.goal, p.deadline) === "active").length;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">My <span className="gradient-text">campaigns</span></h1>
          <p className="text-white/50 text-sm">Manage and track your projects</p>
        </div>
        <button
          onClick={() => router.push("/projects")}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 transition-all shadow-lg shadow-violet-500/20"
        >
          <PlusCircle size={16} /> New campaign
        </button>
      </div>

      {/* Stats */}
      {projects.length > 0 && (
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: "Total raised", value: formatCurrency(totalRaised), icon: TrendingUp, color: "text-violet-400" },
            { label: "Total backers", value: totalBackers, icon: Users, color: "text-pink-400" },
            { label: "Active campaigns", value: activeCount, icon: Clock, color: "text-orange-400" },
          ].map(({ label, value, icon: Icon, color }) => (
            <GlassCard key={label} className="p-4 text-center">
              <Icon size={18} className={`${color} mx-auto mb-2`} />
              <p className="text-xl font-bold text-white">{value}</p>
              <p className="text-xs text-white/40 mt-0.5">{label}</p>
            </GlassCard>
          ))}
        </div>
      )}

      {/* Projects list */}
      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => <GlassCard key={i} className="h-28 animate-pulse" />)}
        </div>
      ) : projects.length === 0 ? (
        <GlassCard className="p-16 text-center">
          <div className="text-5xl mb-4">🚀</div>
          <h3 className="text-white font-semibold text-lg mb-2">No campaigns yet</h3>
          <p className="text-white/40 text-sm mb-6">Start your first campaign and bring your idea to life.</p>
          <button
            onClick={() => router.push("/projects")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 transition-all"
          >
            <PlusCircle size={16} /> Create a campaign
          </button>
        </GlassCard>
      ) : (
        <div className="space-y-4">
          {projects.map((project) => {
            const progress = getProgress(project.raised, project.goal);
            const daysLeft = getDaysLeft(project.deadline);
            const status = getProjectStatus(project.raised, project.goal, project.deadline);
            const gradientClass = CATEGORY_COLORS[project.category] || "from-violet-500 to-pink-500";
            const badgeClass = CATEGORY_BG[project.category] || CATEGORY_BG["Other"];

            return (
              <GlassCard key={project.id} className="p-5 transition-all hover:bg-white/[0.06]">
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Color accent */}
                  <div className={`hidden sm:block w-1.5 rounded-full bg-gradient-to-b ${gradientClass} shrink-0`} />

                  <div className="flex-1 min-w-0">
                    {/* Top row */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${badgeClass}`}>
                            {project.category}
                          </span>
                          {status === "funded" && <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-green-500/20 text-green-300 border border-green-500/30">✓ Funded</span>}
                          {status === "expired" && <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/30">Ended</span>}
                          {status === "active" && <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">Active</span>}
                        </div>
                        <h3 className="text-white font-semibold text-base truncate">{project.title}</h3>
                        <p className="text-white/45 text-sm mt-0.5 line-clamp-2">{project.brief}</p>
                      </div>

                      {/* Delete */}
                      {confirmId === project.id ? (
                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            onClick={() => handleDelete(project.id)}
                            disabled={!!deletingId}
                            className="px-3 py-1.5 rounded-lg text-xs font-medium bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30 transition-all flex items-center gap-1"
                          >
                            <AlertTriangle size={12} />
                            {deletingId === project.id ? "Deleting…" : "Confirm"}
                          </button>
                          <button onClick={() => setConfirmId(null)} className="px-3 py-1.5 rounded-lg text-xs text-white/50 hover:text-white border border-white/[0.08] hover:bg-white/[0.06] transition-all">
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setConfirmId(project.id)}
                          className="p-2 rounded-lg text-white/30 hover:text-red-400 hover:bg-red-500/10 border border-transparent hover:border-red-500/20 transition-all shrink-0"
                        >
                          <Trash2 size={16} />
                        </button>
                      )}
                    </div>

                    {/* Progress bar */}
                    <div className="mt-3">
                      <div className="h-1.5 bg-white/[0.07] rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${gradientClass} transition-all duration-700`}
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>

                    {/* Stats row */}
                    <div className="flex flex-wrap gap-x-5 gap-y-1 mt-2.5 text-xs text-white/50">
                      <span className="flex items-center gap-1">
                        <TrendingUp size={11} />
                        <span className="text-white font-medium">{formatCurrency(project.raised)}</span> of {formatCurrency(project.goal)} ({progress}%)
                      </span>
                      <span className="flex items-center gap-1"><Users size={11} /> {project.backerCount} backers</span>
                      <span className="flex items-center gap-1">
                        <Clock size={11} />
                        {daysLeft > 0 ? `${daysLeft} days left` : "Campaign ended"}
                      </span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      )}
    </div>
  );
}
