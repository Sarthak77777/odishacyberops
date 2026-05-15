import Link from "next/link";
import { ShieldCheck, Globe } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Intelligence", href: "/intel" },
  { label: "Detection", href: "/detection" },
  { label: "Playbooks", href: "/playbooks" },
  { label: "Actors", href: "/actors" },
  { label: "Blog", href: "/blog" },
];

export default function GlobalNav() {
  return (
    <nav className="glass-card sticky top-0 z-40 mx-auto flex w-full max-w-[1440px] flex-wrap items-center justify-between gap-4 border border-white/10 bg-slate-950/80 px-5 py-3 shadow-[0_40px_120px_-60px_rgba(0,0,0,0.8)] backdrop-blur-xl">
      <div className="flex items-center gap-3 text-sm uppercase tracking-[0.24em] text-cyan-300">
        <ShieldCheck className="h-5 w-5 text-cyan-300" />
        <span>ODISACYBEROPS.IN</span>
      </div>
      <div className="hidden items-center gap-4 md:flex">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-sm font-medium text-slate-200 transition hover:text-cyan-300"
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-2 text-cyan-200">
        <Globe className="h-4 w-4" />
        <span>Odisha · India SOC</span>
      </div>
    </nav>
  );
}
