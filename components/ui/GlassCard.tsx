import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glow?: boolean;
}

export default function GlassCard({ className, hover, glow, children, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/[0.08] backdrop-blur-xl",
        "bg-white/[0.04]",
        hover && "transition-all duration-300 hover:bg-white/[0.07] hover:border-white/[0.14] hover:-translate-y-1 hover:shadow-2xl",
        glow && "hover:shadow-violet-500/10",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
