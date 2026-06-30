export const CATEGORIES = [
  "Technology",
  "Art & Creative",
  "Community",
  "Education",
  "Environment",
  "Health",
  "Social Impact",
  "Other",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const CATEGORY_COLORS: Record<string, string> = {
  Technology: "from-violet-500 to-blue-500",
  "Art & Creative": "from-pink-500 to-rose-500",
  Community: "from-orange-500 to-amber-500",
  Education: "from-teal-500 to-cyan-500",
  Environment: "from-green-500 to-emerald-500",
  Health: "from-red-500 to-pink-500",
  "Social Impact": "from-purple-500 to-violet-500",
  Other: "from-slate-500 to-gray-500",
};

export const CATEGORY_BG: Record<string, string> = {
  Technology: "bg-violet-500/20 text-violet-300 border-violet-500/30",
  "Art & Creative": "bg-pink-500/20 text-pink-300 border-pink-500/30",
  Community: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  Education: "bg-teal-500/20 text-teal-300 border-teal-500/30",
  Environment: "bg-green-500/20 text-green-300 border-green-500/30",
  Health: "bg-red-500/20 text-red-300 border-red-500/30",
  "Social Impact": "bg-purple-500/20 text-purple-300 border-purple-500/30",
  Other: "bg-slate-500/20 text-slate-300 border-slate-500/30",
};

export function getProjectStatus(raised: number, goal: number, deadline: Date | string) {
  if (raised >= goal) return "funded";
  if (new Date(deadline) < new Date()) return "expired";
  return "active";
}

export function getDaysLeft(deadline: Date | string): number {
  const diff = new Date(deadline).getTime() - Date.now();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getProgress(raised: number, goal: number): number {
  return Math.min(Math.round((raised / goal) * 100), 100);
}
