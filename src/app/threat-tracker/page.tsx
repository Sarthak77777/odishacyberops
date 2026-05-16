import Link from "next/link";
import { Activity } from "lucide-react";
import { advisoryBanners, recentCves, threatActors } from "@/lib/data";

export default function ThreatTrackerPage() {
  return (
    <div className="space-y-6">
      <section className="glass-card rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-[0_24px_80px_-50px_rgba(0,0,0,0.8)]">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Threat tracker</p>
            <h1 className="mt-2 text-3xl font-semibold text-white">Regional exploit notification stream</h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
              A focused stream for advisories, exploited vulnerabilities, and actor activity relevant to Odisha and India.
            </p>
          </div>
          <Activity className="h-7 w-7 text-cyan-300" />
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {advisoryBanners.map((item) => (
            <Link
              href={item.href}
              key={item.message}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-slate-700/30 bg-slate-900/90 p-5 text-slate-200 transition hover:border-cyan-300/30 hover:bg-slate-900"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">{item.category}</p>
              <p className="mt-3 text-sm leading-7 text-slate-200">{item.message}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="glass-card rounded-[32px] border border-white/10 bg-slate-950/80 p-6">
          <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Tracked CVEs</p>
          <div className="mt-5 space-y-4">
            {recentCves.map((cve) => (
              <Link href={`/cves#${cve.id.toLowerCase()}`} key={cve.id} target="_blank" rel="noopener noreferrer" className="block rounded-3xl border border-slate-700/30 bg-slate-900/90 p-4 transition hover:border-cyan-300/30">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{cve.id}</p>
                <p className="mt-2 font-semibold text-white">{cve.title}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-[32px] border border-white/10 bg-slate-950/80 p-6">
          <p className="text-sm uppercase tracking-[0.24em] text-fuchsia-300">Actor watch</p>
          <div className="mt-5 space-y-4">
            {threatActors.map((actor) => (
              <Link href="/actors" key={actor.name} target="_blank" rel="noopener noreferrer" className="block rounded-3xl border border-slate-700/30 bg-slate-900/90 p-4 transition hover:border-fuchsia-300/30">
                <p className="font-semibold text-white">{actor.name}</p>
                <p className="mt-2 text-sm text-slate-400">{actor.recentCampaign}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
