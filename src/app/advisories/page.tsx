import { Megaphone } from "lucide-react";
import { advisoryBanners, advisories } from "@/lib/data";

export default function AdvisoriesPage() {
  return (
    <div className="space-y-6">
      <section className="glass-card rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-[0_24px_80px_-50px_rgba(0,0,0,0.8)]">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Advisory banner</p>
            <h1 className="mt-2 text-3xl font-semibold text-white">Rotating cyber advisory alerts</h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
              Short operational notices for security teams, leadership briefings, and public awareness updates.
            </p>
          </div>
          <Megaphone className="h-7 w-7 text-cyan-300" />
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {advisoryBanners.map((item) => (
            <article key={item.message} className="rounded-3xl border border-slate-700/30 bg-slate-900/90 p-5 text-slate-200">
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">{item.category}</p>
              <p className="mt-3 text-sm leading-7 text-slate-200">{item.message}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        {advisories.map((item) => (
          <article key={item.title} className="glass-card rounded-[32px] border border-white/10 bg-slate-950/80 p-6 text-slate-200">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{item.category}</p>
            <h2 className="mt-2 text-xl font-semibold text-white">{item.title}</h2>
            <p className="mt-4 text-sm text-slate-400">{item.mitigation}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
