import { ExternalLink, ShieldAlert } from "lucide-react";
import { recentCves } from "@/lib/data";

export default function CvesPage() {
  return (
    <section className="glass-card rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-[0_24px_80px_-50px_rgba(0,0,0,0.8)]">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Live CVE counter</p>
          <h1 className="mt-2 text-3xl font-semibold text-white">Critical vulnerability watch</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
            Prioritized vulnerabilities for patching, exposure review, and detection engineering.
          </p>
        </div>
        <ShieldAlert className="h-7 w-7 text-cyan-300" />
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {recentCves.map((cve) => (
          <article
            id={cve.id.toLowerCase()}
            key={cve.id}
            className="rounded-3xl border border-slate-700/30 bg-slate-900/90 p-6 text-slate-200"
          >
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{cve.id}</p>
            <h2 className="mt-3 text-xl font-semibold text-white">{cve.title}</h2>
            <p className="mt-4 text-sm text-slate-400">Affected products: {cve.products.join(", ")}</p>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
              <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-cyan-300">{cve.score} CVSS</span>
              <span className="rounded-full bg-red-500/10 px-3 py-1 text-red-300">{cve.status}</span>
              {"kev" in cve && cve.kev ? (
                <span className="rounded-full bg-fuchsia-500/10 px-3 py-1 text-fuchsia-300">KEV tracked</span>
              ) : null}
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              Recommended action: validate exposure, apply vendor patches, and add detection coverage for exploitation attempts.
            </p>
            {"vendor" in cve ? (
              <p className="mt-3 text-sm text-slate-500">Vendor: {cve.vendor}</p>
            ) : null}
            {"link" in cve && cve.link ? (
              <a
                href={cve.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/50 hover:bg-cyan-300/15"
              >
                Reference documentation
                <ExternalLink className="h-4 w-4" />
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
