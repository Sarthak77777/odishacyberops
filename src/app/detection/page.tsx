import { Code2, Search } from "lucide-react";
import { detectionRules } from "@/lib/data";

export default function DetectionPage() {
  return (
    <section className="glass-card rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-[0_24px_80px_-50px_rgba(0,0,0,0.8)]">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Detection engineering</p>
          <h1 className="mt-2 text-3xl font-semibold text-white">Rule archive and query library</h1>
        </div>
        <Search className="h-6 w-6 text-cyan-300" />
      </div>
      <div className="mt-8 space-y-5">
        {detectionRules.map((item) => (
          <article key={item.name} className="rounded-3xl border border-slate-700/30 bg-slate-900/90 p-6 text-slate-200">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{item.type}</p>
                <h2 className="mt-2 text-xl font-semibold text-white">{item.name}</h2>
              </div>
              <Code2 className="h-6 w-6 text-cyan-300" />
            </div>
            <p className="mt-4 text-sm text-slate-400">{item.description}</p>
            <pre className="mt-5 overflow-x-auto rounded-3xl bg-slate-950/90 p-4 text-xs text-slate-200">
              <code>{item.query}</code>
            </pre>
          </article>
        ))}
      </div>
    </section>
  );
}
