"use client";
export default function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" style={{ background: "#07070f" }}>
      {/* Purple orb — top left */}
      <div
        className="absolute rounded-full animate-pulse-slow"
        style={{
          width: 700, height: 700,
          background: "radial-gradient(circle, rgba(124,58,237,0.35) 0%, transparent 70%)",
          top: -250, left: -200,
          filter: "blur(60px)",
        }}
      />
      {/* Pink orb — center right */}
      <div
        className="absolute rounded-full"
        style={{
          width: 550, height: 550,
          background: "radial-gradient(circle, rgba(219,39,119,0.28) 0%, transparent 70%)",
          top: "35%", right: -150,
          filter: "blur(70px)",
        }}
      />
      {/* Orange orb — bottom center */}
      <div
        className="absolute rounded-full animate-pulse-slow"
        style={{
          width: 450, height: 450,
          background: "radial-gradient(circle, rgba(234,88,12,0.2) 0%, transparent 70%)",
          bottom: -100, left: "35%",
          filter: "blur(80px)",
        }}
      />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
