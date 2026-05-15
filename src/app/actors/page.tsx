import { Users, Target } from "lucide-react";
import { threatActors } from "@/lib/data";

export default function ActorsPage() {
  return (
    <section className="glass-card rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-[0_24px_80px_-50px_rgba(0,0,0,0.8)]">
      <div className="mb-6 flex items-center gap-3 text-cyan-300">
        <Users className="h-6 w-6" />
        <h1 className="text-3xl font-semibold text-white">Threat actor intelligence</h1>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {threatActors.map((actor) => (
          <article key={actor.name} className="rounded-3xl border border-slate-700/30 bg-slate-900/90 p-6 text-slate-200">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="text-2xl font-semibold text-white">{actor.name}</h2>
                <p className="mt-1 text-sm text-slate-400">Aliases: {actor.aliases.join(", ")}</p>
              </div>
              <Target className="h-6 w-6 text-cyan-300" />
            </div>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <p><span className="font-semibold text-slate-200">Region:</span> {actor.region}</p>
              <p><span className="font-semibold text-slate-200">TTPs:</span> {actor.tactics.join(", ")}</p>
              <p><span className="font-semibold text-slate-200">Targets:</span> {actor.sectors.join(", ")}</p>
              <p>{actor.recentCampaign}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
