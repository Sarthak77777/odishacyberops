import { AlertTriangle, ShieldCheck } from "lucide-react";

const contacts = [
  {
    label: "CERT-In Reporting",
    details: "cert-in@nic.in | +91 11 2437 5636",
    action: "Report national cyber incidents and request assistance.",
  },
  {
    label: "National Cyber Crime Portal",
    details: "https://cybercrime.gov.in",
    action: "File fraud, phishing, or ransomware complaints.",
  },
  {
    label: "State Cyber Cell Odisha",
    details: "+91 674 239 7823",
    action: "Notify regional incident response teams.",
  },
];

export default function ContactsPage() {
  return (
    <div className="grid gap-6 xl:grid-cols-[0.7fr_0.3fr]">
      <section className="glass-card rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-[0_24px_80px_-50px_rgba(0,0,0,0.8)]">
        <div className="mb-6 flex items-center gap-3 text-cyan-300">
          <AlertTriangle className="h-6 w-6" />
          <h1 className="text-3xl font-semibold text-white">Cyber emergency contact hub</h1>
        </div>
        <p className="max-w-2xl text-slate-300">
          A secure contact portal for consultation requests, phishing investigations, malware analysis, and incident response workflows.
        </p>
        <div className="mt-8 space-y-5">
          {contacts.map((item) => (
            <div key={item.label} className="rounded-3xl border border-slate-700/30 bg-slate-900/90 p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-lg font-semibold text-white">{item.label}</p>
                  <p className="mt-2 text-sm text-slate-400">{item.action}</p>
                </div>
                <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-cyan-300">Contact</span>
              </div>
              <p className="mt-4 text-sm text-slate-300">{item.details}</p>
            </div>
          ))}
        </div>
      </section>
      <aside className="glass-card rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-[0_24px_80px_-50px_rgba(0,0,0,0.8)]">
        <div className="flex items-center gap-3 text-cyan-300">
          <ShieldCheck className="h-6 w-6" />
          <h2 className="text-2xl font-semibold text-white">Secure reporting workflow</h2>
        </div>
        <div className="mt-6 space-y-4 text-slate-300">
          <p>1. Preserve evidence and isolate affected systems.</p>
          <p>2. Document phishing or fraud details with screenshots.</p>
          <p>3. Share indicators and timeline with the incident response team.</p>
          <p>4. Use encrypted email or secure portals for sensitive information.</p>
        </div>
      </aside>
    </div>
  );
}
