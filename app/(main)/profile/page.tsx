"use client";
import { useState, useEffect } from "react";
import { Edit2, Save, X, TrendingUp, Users, Heart, Calendar } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import GlassCard from "@/components/ui/GlassCard";
import { formatCurrency } from "@/lib/constants";

type UserProfile = {
  id: string; email: string; name: string | null; bio: string | null; createdAt: string;
  totalRaised: number; totalDonated: number;
  _count: { projects: number; donations: number };
  donations: { id: string; amount: number; createdAt: string; project: { id: string; title: string } }[];
};

export default function ProfilePage() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [editForm, setEditForm] = useState({ name: "", bio: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/user/profile")
      .then((r) => r.json())
      .then((d) => {
        setUser(d.user);
        setEditForm({ name: d.user?.name || "", bio: d.user?.bio || "" });
      })
      .finally(() => setLoading(false));
  }, []);

  async function handleSave() {
    setSaving(true);
    setError("");
    try {
      const res = await fetch("/api/user/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editForm),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error); return; }
      setUser((prev) => prev ? { ...prev, ...data.user } : prev);
      setEditing(false);
    } catch {
      setError("Something went wrong.");
    } finally {
      setSaving(false);
    }
  }

  function getInitials(name: string | null, email: string) {
    if (name) return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
    return email.slice(0, 2).toUpperCase();
  }

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-4">
        <GlassCard className="h-40 animate-pulse" />
        <GlassCard className="h-28 animate-pulse" />
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-5">
      {/* Profile card */}
      <GlassCard className="p-7">
        <div className="flex items-start gap-5">
          {/* Avatar */}
          <div className="shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-white text-xl font-bold shadow-xl shadow-violet-500/30">
            {getInitials(user.name, user.email)}
          </div>

          <div className="flex-1 min-w-0">
            {editing ? (
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Your name"
                  value={editForm.name}
                  onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                  className="w-full bg-white/[0.06] border border-white/[0.12] rounded-xl px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-violet-500/60 transition-all text-sm"
                />
                <textarea
                  rows={3}
                  placeholder="A short bio about yourself…"
                  value={editForm.bio}
                  onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                  className="w-full bg-white/[0.06] border border-white/[0.12] rounded-xl px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-violet-500/60 transition-all text-sm resize-none"
                />
                {error && <p className="text-red-400 text-sm">{error}</p>}
                <div className="flex gap-2">
                  <button
                    onClick={handleSave}
                    disabled={saving}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 disabled:opacity-50 transition-all"
                  >
                    <Save size={14} /> {saving ? "Saving…" : "Save changes"}
                  </button>
                  <button onClick={() => { setEditing(false); setError(""); }} className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm text-white/50 hover:text-white border border-white/[0.08] hover:bg-white/[0.06] transition-all">
                    <X size={14} /> Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h1 className="text-xl font-bold text-white">{user.name || "Unnamed user"}</h1>
                    <p className="text-white/40 text-sm">{user.email}</p>
                  </div>
                  <button
                    onClick={() => setEditing(true)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-white/50 hover:text-white border border-white/[0.08] hover:bg-white/[0.06] transition-all shrink-0"
                  >
                    <Edit2 size={13} /> Edit
                  </button>
                </div>
                <p className="text-white/55 text-sm mt-2 leading-relaxed">
                  {user.bio || <span className="text-white/25 italic">No bio yet — click Edit to add one.</span>}
                </p>
                <div className="flex items-center gap-1.5 mt-3 text-xs text-white/30">
                  <Calendar size={12} />
                  Member since {formatDistanceToNow(new Date(user.createdAt), { addSuffix: true })}
                </div>
              </div>
            )}
          </div>
        </div>
      </GlassCard>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: "Campaigns created", value: user._count.projects, icon: TrendingUp, color: "from-violet-500 to-blue-500" },
          { label: "Total raised", value: formatCurrency(user.totalRaised), icon: TrendingUp, color: "from-pink-500 to-rose-500" },
          { label: "Donations made", value: user._count.donations, icon: Heart, color: "from-orange-500 to-amber-500" },
          { label: "Total donated", value: formatCurrency(user.totalDonated), icon: Users, color: "from-teal-500 to-cyan-500" },
        ].map(({ label, value, icon: Icon, color }) => (
          <GlassCard key={label} className="p-4 text-center">
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-2`}>
              <Icon size={14} className="text-white" />
            </div>
            <p className="text-lg font-bold text-white">{value}</p>
            <p className="text-xs text-white/40 mt-0.5 leading-tight">{label}</p>
          </GlassCard>
        ))}
      </div>

      {/* Recent donations */}
      {user.donations.length > 0 && (
        <GlassCard className="p-6">
          <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
            <Heart size={16} className="text-pink-400" /> Recent donations
          </h2>
          <div className="space-y-3">
            {user.donations.map((d) => (
              <div key={d.id} className="flex items-center justify-between py-2.5 border-b border-white/[0.05] last:border-0">
                <div className="min-w-0">
                  <p className="text-white text-sm font-medium truncate">{d.project.title}</p>
                  <p className="text-white/35 text-xs mt-0.5">
                    {formatDistanceToNow(new Date(d.createdAt), { addSuffix: true })}
                  </p>
                </div>
                <span className="text-green-400 font-semibold text-sm shrink-0 ml-3">+{formatCurrency(d.amount)}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      )}
    </div>
  );
}
