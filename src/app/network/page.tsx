import { Network } from "lucide-react";
import { attackTrend, threatMapPoints } from "@/lib/data";

export default function NetworkPage() {
  return (
    <section className="glass-card rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-[0_24px_80px_-50px_rgba(0,0,0,0.8)]">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Network background</p>
          <h1 className="mt-2 text-3xl font-semibold text-white">Threat feed geography and trend pulse</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
            A summary of regional telemetry points and weekly incident trend signals used by the dashboard.
          </p>
        </div>
        <Network className="h-7 w-7 text-cyan-300" />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-700/30 bg-slate-900/90 p-6">
          <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Telemetry points</p>
          <div className="mt-5 space-y-3">
            {threatMapPoints.map((point) => (
              <div key={point.name} className="flex items-center justify-between rounded-2xl bg-slate-950/80 p-4 text-sm text-slate-200">
                <span>{point.name}</span>
                <span className="text-cyan-300">{point.count} events</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-700/30 bg-slate-900/90 p-6">
          <p className="text-sm uppercase tracking-[0.24em] text-fuchsia-300">Weekly trend</p>
          <div className="mt-5 space-y-3">
            {attackTrend.map((item) => (
              <div key={item.day} className="flex items-center justify-between rounded-2xl bg-slate-950/80 p-4 text-sm text-slate-200">
                <span>{item.day}</span>
                <span className="text-fuchsia-300">{item.incidents} incidents</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
