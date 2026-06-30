"use client";
import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { Users, Clock, Target, TrendingUp, X } from "lucide-react";
import GlassCard from "./ui/GlassCard";
import { CATEGORY_BG, CATEGORY_COLORS, formatCurrency, getDaysLeft, getProgress, getProjectStatus } from "@/lib/constants";

type Project = {
  id: string;
  title: string;
  brief: string;
  detail: string;
  goal: number;
  raised: number;
  category: string;
  tags: string[];
  deadline: string;
  imageUrl?: string | null;
  backerCount: number;
  createdAt: string;
  user?: { name: string | null; email: string };
};

export default function ProjectCard({ project, onDonate }: { project: Project; onDonate?: (id: string, amount: number) => void }) {
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState("");
  const [donating, setDonating] = useState(false);

  const progress = getProgress(project.raised, project.goal);
  const daysLeft = getDaysLeft(project.deadline);
  const status = getProjectStatus(project.raised, project.goal, project.deadline);
  const gradientClass = CATEGORY_COLORS[project.category] || CATEGORY_COLORS["Other"];
  const badgeClass = CATEGORY_BG[project.category] || CATEGORY_BG["Other"];

  async function handleDonate() {
    if (!amount || Number(amount) <= 0) return;
    setDonating(true);
    try {
      const res = await fetch(`/api/projects/${project.id}/donate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: Number(amount) }),
      });
      if (res.ok) {
        onDonate?.(project.id, Number(amount));
        setShowModal(false);
        setAmount("");
      }
    } finally {
      setDonating(false);
    }
  }

  return (
    <>
      <GlassCard hover glow className="flex flex-col overflow-hidden cursor-pointer" onClick={() => setShowModal(true)}>
        {/* Cover gradient / image */}
        {project.imageUrl ? (
          <div className="h-36 w-full overflow-hidden bg-white/[0.03]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className={`h-2 w-full bg-gradient-to-r ${gradientClass}`} />
        )}
        <div className="p-5 flex flex-col gap-3 flex-1">
          {/* Category + status */}
          <div className="flex items-center justify-between gap-2">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${badgeClass}`}>
              {project.category}
            </span>
            {status === "funded" && (
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-500/20 text-green-300 border border-green-500/30">✓ Funded</span>
            )}
            {status === "expired" && (
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-red-500/20 text-red-300 border border-red-500/30">Ended</span>
            )}
          </div>

          <div>
            <h3 className="text-white font-semibold text-base leading-snug line-clamp-2">{project.title}</h3>
            <p className="text-white/50 text-sm mt-1 line-clamp-2 leading-relaxed">{project.brief}</p>
          </div>

          {/* Tags */}
          {project.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {project.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="text-xs text-white/40 bg-white/[0.05] px-2 py-0.5 rounded-full border border-white/[0.06]">
                  #{tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-auto space-y-3">
            {/* Progress bar */}
            <div>
              <div className="flex justify-between text-xs text-white/50 mb-1.5">
                <span className="text-white font-medium">{formatCurrency(project.raised)}</span>
                <span>{progress}%</span>
              </div>
              <div className="h-1.5 bg-white/[0.08] rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${gradientClass} transition-all duration-500`}
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-xs text-white/40 mt-1">of {formatCurrency(project.goal)} goal</p>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-between text-xs text-white/50">
              <span className="flex items-center gap-1"><Users size={12} /> {project.backerCount} backers</span>
              <span className="flex items-center gap-1"><Clock size={12} /> {daysLeft > 0 ? `${daysLeft}d left` : "Ended"}</span>
              <span className="flex items-center gap-1"><TrendingUp size={12} /> {formatCurrency(project.goal)}</span>
            </div>
          </div>
        </div>
      </GlassCard>

      {/* Donate Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setShowModal(false)}>
          <GlassCard
            className="w-full max-w-lg max-h-[85vh] overflow-y-auto p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4 sticky -top-6 pt-6 -mt-6 bg-[#0b0b16]/95 backdrop-blur-xl z-10 pb-3 -mx-6 px-6 border-b border-white/[0.06]">
              <div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${badgeClass}`}>{project.category}</span>
                <h2 className="text-white font-bold text-xl mt-2 pr-6">{project.title}</h2>
              </div>
              <button onClick={() => setShowModal(false)} className="text-white/40 hover:text-white p-1 shrink-0"><X size={18} /></button>
            </div>

            {project.imageUrl && (
              <div className="w-full h-48 rounded-xl overflow-hidden mt-4 mb-4 bg-white/[0.03]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
              </div>
            )}

            <p className="text-white/60 text-sm mb-4 leading-relaxed">{project.detail}</p>

            {/* Progress */}
            <div className="mb-5">
              <div className="h-2 bg-white/[0.08] rounded-full overflow-hidden">
                <div className={`h-full rounded-full bg-gradient-to-r ${gradientClass}`} style={{ width: `${progress}%` }} />
              </div>
              <div className="flex justify-between mt-2 text-sm">
                <span className="text-white font-semibold">{formatCurrency(project.raised)} raised</span>
                <span className="text-white/50">{progress}% of {formatCurrency(project.goal)}</span>
              </div>
              <div className="flex gap-4 mt-2 text-sm text-white/50">
                <span className="flex items-center gap-1"><Users size={13} /> {project.backerCount} backers</span>
                <span className="flex items-center gap-1"><Clock size={13} /> {daysLeft > 0 ? `${daysLeft} days left` : "Campaign ended"}</span>
              </div>
            </div>

            {/* Creator */}
            {project.user && (
              <p className="text-xs text-white/40 mb-4">By {project.user.name || project.user.email}</p>
            )}

            {status === "active" && (
              <>
                <div className="relative mb-3">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 font-medium">$</span>
                  <input
                    type="number"
                    min="1"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full bg-white/[0.06] border border-white/[0.10] rounded-xl px-4 pl-7 py-3 text-white placeholder-white/30 focus:outline-none focus:border-violet-500/50 transition-colors"
                  />
                </div>
                {/* Quick amounts */}
                <div className="flex gap-2 mb-4">
                  {[10, 25, 50, 100].map((v) => (
                    <button key={v} onClick={() => setAmount(String(v))}
                      className="flex-1 py-1.5 text-sm rounded-lg border border-white/[0.08] text-white/60 hover:bg-white/[0.07] hover:text-white transition-all">
                      ${v}
                    </button>
                  ))}
                </div>
                <button
                  onClick={handleDonate}
                  disabled={donating || !amount}
                  className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-lg shadow-violet-500/25"
                >
                  {donating ? "Processing..." : `Donate ${amount ? `$${amount}` : ""}`}
                </button>
              </>
            )}
            {status === "funded" && <p className="text-center text-green-400 font-semibold py-3">🎉 This project is fully funded!</p>}
            {status === "expired" && <p className="text-center text-white/40 py-3">This campaign has ended.</p>}
          </GlassCard>
        </div>
      )}
    </>
  );
}