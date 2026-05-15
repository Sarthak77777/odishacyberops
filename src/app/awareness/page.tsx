import { Shield } from "lucide-react";
import { awarenessCards } from "@/lib/data";

export default function AwarenessPage() {
  return (
    <section className="glass-card rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-[0_24px_80px_-50px_rgba(0,0,0,0.8)]">
      <div className="mb-6 flex items-center gap-3 text-cyan-300">
        <Shield className="h-6 w-6" />
        <div>
          <h1 className="text-3xl font-semibold text-white">Odisha cyber awareness</h1>
          <p className="text-sm text-slate-400">Public-facing education on scams, UPI fraud, phishing, and digital arrest threats.</p>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {awarenessCards.map((card) => (
          <article key={card.title} className="group rounded-3xl border border-slate-700/30 bg-slate-900/90 p-6 text-slate-200 transition hover:border-cyan-400/30 hover:bg-slate-900/95">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">{card.language.toUpperCase()}</span>
              <h2 className="text-xl font-semibold text-white">{card.title}</h2>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-300">{card.description}</p>
            <p className="mt-4 text-sm uppercase tracking-[0.24em] text-cyan-300">{card.action}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
