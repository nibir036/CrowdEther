import Link from "next/link";
import { ArrowRight, Zap, Shield, Globe, Flame } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-5 border-b border-white/[0.05]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
            <Flame size={16} className="text-white" />
          </div>
          <span className="font-bold text-white text-lg tracking-tight">
            Crowd<span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Ether</span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/login" className="text-white/60 hover:text-white text-sm font-medium transition-colors px-4 py-2">
            Sign in
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 transition-all shadow-lg shadow-violet-500/25"
          >
            Get started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
          Where bold ideas find their funding
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
          <span className="text-white">Fund the</span>
          <br />
          <span className="gradient-text">Future Together</span>
        </h1>

        <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Back the projects you believe in. Launch campaigns that matter.
          CrowdEther connects visionaries with the people who want to see their ideas live.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/signup"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white text-base bg-gradient-to-r from-violet-600 via-pink-600 to-orange-500 hover:opacity-90 transition-all shadow-2xl shadow-violet-500/30"
          >
            Start a campaign <ArrowRight size={18} />
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white/80 text-base border border-white/[0.12] hover:bg-white/[0.06] hover:text-white transition-all"
          >
            Browse projects
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mt-16">
          {[
            { label: "Projects funded", value: "2,400+" },
            { label: "Raised total", value: "$4.8M+" },
            { label: "Active backers", value: "18K+" },
          ].map((s) => (
            <GlassCard key={s.label} className="p-4 text-center">
              <p className="text-2xl font-bold gradient-text">{s.value}</p>
              <p className="text-xs text-white/40 mt-1">{s.label}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Everything you need to <span className="gradient-text">succeed</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Zap, title: "Launch in minutes", desc: "Set up your campaign with a title, story, and goal. Go live instantly — no approval delays.", color: "from-violet-500 to-blue-500" },
            { icon: Shield, title: "Secure & transparent", desc: "Every donation is tracked. Backers can see exactly where funds go, building real trust.", color: "from-pink-500 to-rose-500" },
            { icon: Globe, title: "Reach backers worldwide", desc: "Your project is visible to thousands of people looking for the next great thing to support.", color: "from-orange-500 to-amber-500" },
          ].map(({ icon: Icon, title, desc, color }) => (
            <GlassCard key={title} hover glow className="p-6">
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-lg`}>
                <Icon size={20} className="text-white" />
              </div>
              <h3 className="text-white font-semibold text-base mb-2">{title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">How it works</h2>
        <div className="flex flex-col md:flex-row items-start justify-between gap-4">

          {/* Step 1 */}
          <div className="text-center flex-1 px-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-pink-500/20 border border-white/[0.08] flex items-center justify-center mx-auto mb-4">
              <span className="gradient-text text-xl font-bold">01</span>
            </div>
            <h3 className="text-white font-semibold mb-2">Create your campaign</h3>
            <p className="text-white/50 text-sm leading-relaxed">Write your story, set a funding goal, and pick a deadline. Add a cover image to stand out.</p>
          </div>

          {/* Connector 1→2 */}
          <div className="hidden md:flex items-center mt-8 shrink-0">
            <div className="w-16 h-px bg-gradient-to-r from-violet-500/50 to-pink-500/50" />
          </div>

          {/* Step 2 */}
          <div className="text-center flex-1 px-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-pink-500/20 border border-white/[0.08] flex items-center justify-center mx-auto mb-4">
              <span className="gradient-text text-xl font-bold">02</span>
            </div>
            <h3 className="text-white font-semibold mb-2">Share & spread the word</h3>
            <p className="text-white/50 text-sm leading-relaxed">Share your campaign link with your network. Every backer brings momentum.</p>
          </div>

          {/* Connector 2→3 */}
          <div className="hidden md:flex items-center mt-8 shrink-0">
            <div className="w-16 h-px bg-gradient-to-r from-pink-500/50 to-orange-500/50" />
          </div>

          {/* Step 3 */}
          <div className="text-center flex-1 px-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-pink-500/20 border border-white/[0.08] flex items-center justify-center mx-auto mb-4">
              <span className="gradient-text text-xl font-bold">03</span>
            </div>
            <h3 className="text-white font-semibold mb-2">Watch funding grow</h3>
            <p className="text-white/50 text-sm leading-relaxed">Track donations in real time. Hit your goal and bring your project to life.</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <GlassCard className="p-12 gradient-border">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to make it happen?</h2>
          <p className="text-white/50 mb-8 text-lg">Join thousands of creators and backers building the future.</p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 transition-all shadow-2xl shadow-violet-500/30"
          >
            Create your free account <ArrowRight size={18} />
          </Link>
        </GlassCard>
      </section>

      <footer className="border-t border-white/[0.05] text-center py-8 text-white/30 text-sm">
        © 2025 CrowdEther. Built with 🔥 by Nibir.
      </footer>
    </main>
  );
}
