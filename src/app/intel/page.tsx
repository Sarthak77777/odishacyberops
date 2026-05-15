import { ArrowRight, Search } from "lucide-react";
import { advisories } from "@/lib/data";

export default function IntelPage() {
  return (
    <div className="space-y-6">
      <section className="glass-card rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-[0_24px_80px_-50px_rgba(0,0,0,0.8)]">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Threat intelligence dashboard</p>
            <h1 className="mt-2 text-3xl font-semibold text-white">Active advisory aggregator</h1>
          </div>
          <Search className="h-6 w-6 text-cyan-300" />
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {advisories.map((item) => (
            <article key={item.title} className="rounded-3xl border border-slate-700/30 bg-slate-900/90 p-6 text-slate-200">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{item.category}</p>
                  <h2 className="mt-2 text-xl font-semibold text-white">{item.title}</h2>
                </div>
                <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-red-300">{item.severity}</span>
              </div>
              <p className="mt-4 text-sm text-slate-400">{item.status}</p>
              <div className="mt-4 space-y-2 text-sm text-slate-300">
                <p>{item.mitigation}</p>
                <p className="text-slate-500">Vendors: {item.vendors.join(", ")}</p>
                <p className="text-slate-500">ATT&CK: {item.attackChain.join(" • ")}</p>
              </div>
              <div className="mt-5 flex items-center justify-between text-sm text-cyan-300">
                <span>References</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
