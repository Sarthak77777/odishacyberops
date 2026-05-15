import { ClipboardList, Shield } from "lucide-react";
import { incidentPlaybooks } from "@/lib/data";

export default function PlaybooksPage() {
  return (
    <section className="glass-card rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-[0_24px_80px_-50px_rgba(0,0,0,0.8)]">
      <div className="mb-6 flex items-center gap-3 text-cyan-300">
        <ClipboardList className="h-6 w-6" />
        <h1 className="text-3xl font-semibold text-white">Incident response playbooks</h1>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {incidentPlaybooks.map((playbook) => (
          <article key={playbook.title} className="rounded-3xl border border-slate-700/30 bg-slate-900/90 p-6 text-slate-200">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-white">{playbook.title}</h2>
                <p className="mt-1 text-sm text-slate-400">Severity: {playbook.level}</p>
              </div>
              <Shield className="h-6 w-6 text-cyan-300" />
            </div>
            <p className="mt-4 text-sm text-slate-300">{playbook.summary}</p>
            <ol className="mt-5 list-decimal space-y-3 pl-5 text-sm text-slate-300">
              {playbook.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </article>
        ))}
      </div>
    </section>
  );
}
