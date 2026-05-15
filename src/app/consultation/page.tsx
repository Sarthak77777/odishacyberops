import { Mail, Lock } from "lucide-react";

export default function ConsultationPage() {
  return (
    <section className="glass-card rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-[0_24px_80px_-50px_rgba(0,0,0,0.8)]">
      <div className="flex items-center gap-3 text-cyan-300">
        <Mail className="h-6 w-6" />
        <div>
          <h1 className="text-3xl font-semibold text-white">Secure consultation portal</h1>
          <p className="text-sm text-slate-400">Request malware analysis, phishing support, or incident escalation from our analysts.</p>
        </div>
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-700/30 bg-slate-900/90 p-6 text-slate-200">
          <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Encrypted contact</p>
          <p className="mt-4 text-slate-300">Use secure email or PGP for sensitive incident details.</p>
          <p className="mt-4 text-sm text-slate-400">PGP Key: <span className="text-cyan-300">available upon request</span></p>
        </div>
        <div className="rounded-3xl border border-slate-700/30 bg-slate-900/90 p-6 text-slate-200">
          <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Protected intake</p>
          <div className="mt-4 space-y-3 text-sm leading-7">
            <p>1. Describe incident severity and affected systems.</p>
            <p>2. Attach IOC samples, logs, and evidence summaries.</p>
            <p>3. Select consultation type: Phishing, Malware, IR, or Forensics.</p>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-4 rounded-3xl border border-slate-700/30 bg-slate-900/90 p-6 text-slate-200">
        <div className="flex items-center gap-3">
          <Lock className="h-5 w-5 text-cyan-300" />
          <span className="text-sm uppercase tracking-[0.24em] text-slate-400">Privacy first</span>
        </div>
        <p className="text-sm text-slate-300">All requests are routed through the secure Odisha Cyber Operations platform and filtered for sensitive data before analyst review.</p>
      </div>
    </section>
  );
}
