import Link from "next/link";
import { Globe, Radar, ShieldCheck } from "lucide-react";

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
    <nav className="glass-card sticky top-3 z-40 mx-auto flex w-full max-w-[1440px] flex-wrap items-center justify-between gap-4 rounded-[24px] px-4 py-3">
      <Link href="/" className="group flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-cyan-200">
        <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10">
          <ShieldCheck className="h-5 w-5 text-cyan-200" />
          <span className="absolute inset-0 rounded-2xl shadow-[0_0_28px_rgba(38,247,255,0.22)] transition group-hover:shadow-[0_0_42px_rgba(38,247,255,0.34)]" />
        </span>
        <span className="font-semibold text-white">ODISACYBEROPS.IN</span>
      </Link>

      <div className="order-3 flex w-full items-center gap-2 overflow-x-auto md:order-none md:w-auto md:overflow-visible">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="whitespace-nowrap rounded-full border border-transparent px-3 py-2 text-sm font-medium text-slate-300 transition hover:border-cyan-300/20 hover:bg-cyan-300/10 hover:text-cyan-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-3 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-emerald-200">
        <Radar className="h-4 w-4" />
        <span className="live-dot h-2 w-2 rounded-full bg-emerald-300" />
        <Globe className="h-4 w-4" />
        <span>Odisha SOC</span>
      </div>
    </nav>
  );
}
