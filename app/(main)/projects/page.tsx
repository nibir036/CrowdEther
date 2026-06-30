"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PlusCircle, Tag, X, ArrowRight } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import ImageUpload from "@/components/ImageUpload";
import { CATEGORIES, CATEGORY_COLORS } from "@/lib/constants";

export default function CreateProjectPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [form, setForm] = useState({
    title: "", brief: "", detail: "", goal: "", category: CATEGORIES[0] as string,
    tags: [] as string[], deadline: "", imageUrl: "",
  });

  function addTag(e: React.KeyboardEvent) {
    if ((e.key === "Enter" || e.key === ",") && tagInput.trim()) {
      e.preventDefault();
      const t = tagInput.trim().toLowerCase().replace(/[^a-z0-9-]/g, "");
      if (t && !form.tags.includes(t) && form.tags.length < 5) {
        setForm({ ...form, tags: [...form.tags, t] });
      }
      setTagInput("");
    }
  }

  function removeTag(tag: string) {
    setForm({ ...form, tags: form.tags.filter((t) => t !== tag) });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!form.title || !form.brief || !form.detail || !form.goal || !form.deadline) {
      setError("Please fill in all required fields.");
      return;
    }
    if (Number(form.goal) <= 0) { setError("Goal must be greater than $0."); return; }
    if (new Date(form.deadline) <= new Date()) { setError("Deadline must be in the future."); return; }

    setLoading(true);
    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, goal: Number(form.goal) }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error); return; }
      router.push("/myprojects");
    } catch {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  const gradientClass = CATEGORY_COLORS[form.category] || "from-violet-500 to-pink-500";
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  const minDateStr = minDate.toISOString().split("T")[0];

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-1">
          Launch a <span className="gradient-text">campaign</span>
        </h1>
        <p className="text-white/50 text-sm">Share your idea and start raising funds</p>
      </div>

      <GlassCard className="p-7">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-white/70 mb-1.5">Campaign title <span className="text-pink-400">*</span></label>
            <input
              type="text"
              required
              maxLength={80}
              placeholder="A clear, compelling title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full bg-white/[0.05] border border-white/[0.10] rounded-xl px-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-violet-500/60 transition-all text-sm"
            />
            <p className="text-xs text-white/30 mt-1 text-right">{form.title.length}/80</p>
          </div>

          {/* Brief */}
          <div>
            <label className="block text-sm font-medium text-white/70 mb-1.5">Short description <span className="text-pink-400">*</span></label>
            <input
              type="text"
              required
              maxLength={160}
              placeholder="One sentence that sells your idea"
              value={form.brief}
              onChange={(e) => setForm({ ...form, brief: e.target.value })}
              className="w-full bg-white/[0.05] border border-white/[0.10] rounded-xl px-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-violet-500/60 transition-all text-sm"
            />
            <p className="text-xs text-white/30 mt-1 text-right">{form.brief.length}/160</p>
          </div>

          {/* Detail */}
          <div>
            <label className="block text-sm font-medium text-white/70 mb-1.5">Full story <span className="text-pink-400">*</span></label>
            <textarea
              required
              rows={5}
              placeholder="Tell backers the full story — what you're building, why it matters, and how funds will be used."
              value={form.detail}
              onChange={(e) => setForm({ ...form, detail: e.target.value })}
              className="w-full bg-white/[0.05] border border-white/[0.10] rounded-xl px-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-violet-500/60 transition-all text-sm resize-none"
            />
          </div>

          {/* Goal + Deadline */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white/70 mb-1.5">Funding goal (USD) <span className="text-pink-400">*</span></label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40 font-medium text-sm">$</span>
                <input
                  type="number"
                  required
                  min="1"
                  placeholder="5000"
                  value={form.goal}
                  onChange={(e) => setForm({ ...form, goal: e.target.value })}
                  className="w-full bg-white/[0.05] border border-white/[0.10] rounded-xl px-4 pl-7 py-3 text-white placeholder-white/25 focus:outline-none focus:border-violet-500/60 transition-all text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-white/70 mb-1.5">Campaign deadline <span className="text-pink-400">*</span></label>
              <input
                type="date"
                required
                min={minDateStr}
                value={form.deadline}
                onChange={(e) => setForm({ ...form, deadline: e.target.value })}
                className="w-full bg-white/[0.05] border border-white/[0.10] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500/60 transition-all text-sm [color-scheme:dark]"
              />
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">Category <span className="text-pink-400">*</span></label>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setForm({ ...form, category: cat as string })}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                    form.category === cat
                      ? `bg-gradient-to-r ${CATEGORY_COLORS[cat]} border-transparent text-white shadow-md`
                      : "bg-white/[0.04] border-white/[0.08] text-white/50 hover:text-white hover:bg-white/[0.08]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-white/70 mb-1.5">
              <Tag size={13} className="inline mr-1" />Tags (up to 5)
            </label>
            <div className="flex flex-wrap gap-2 mb-2">
              {form.tags.map((tag) => (
                <span key={tag} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-violet-500/15 border border-violet-500/25 text-violet-300 text-xs">
                  #{tag}
                  <button type="button" onClick={() => removeTag(tag)} className="hover:text-white"><X size={11} /></button>
                </span>
              ))}
            </div>
            <input
              type="text"
              placeholder="Type a tag and press Enter"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={addTag}
              disabled={form.tags.length >= 5}
              className="w-full bg-white/[0.05] border border-white/[0.10] rounded-xl px-4 py-2.5 text-white placeholder-white/25 focus:outline-none focus:border-violet-500/60 transition-all text-sm disabled:opacity-40"
            />
          </div>

          {/* Cover image */}
          <div>
            <label className="block text-sm font-medium text-white/70 mb-1.5">
              Cover image <span className="text-white/30">(optional)</span>
            </label>
            <ImageUpload
              value={form.imageUrl}
              onChange={(dataUri) => setForm({ ...form, imageUrl: dataUri })}
            />
          </div>

          {/* Preview bar */}
          {(form.title || form.category) && (
            <GlassCard className={`h-1.5 bg-gradient-to-r ${gradientClass} rounded-full`} />
          )}

          {error && (
            <div className="px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">{error}</div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-violet-500/25 flex items-center justify-center gap-2"
          >
            {loading ? (
              <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Launching…</span>
            ) : (
              <span className="flex items-center gap-2"><PlusCircle size={16} /> Launch campaign <ArrowRight size={16} /></span>
            )}
          </button>
        </form>
      </GlassCard>
    </div>
  );
}