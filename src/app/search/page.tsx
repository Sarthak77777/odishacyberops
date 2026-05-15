import { FileSearch } from "lucide-react";

export default function SearchPage() {
  return (
    <section className="glass-card rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-[0_24px_80px_-50px_rgba(0,0,0,0.8)]">
      <div className="mb-6 flex items-center gap-3 text-cyan-300">
        <FileSearch className="h-6 w-6" />
        <h1 className="text-3xl font-semibold text-white">IOC search engine</h1>
      </div>
      <form className="grid gap-4 sm:grid-cols-[1fr_auto]">
        <input
          type="search"
          placeholder="Search IP, domain, hash, CVE, ATT&CK ID, malware family"
          className="rounded-3xl border border-slate-700/30 bg-slate-900/90 px-5 py-4 text-slate-100 outline-none transition focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-300/10"
        />
        <button
          type="submit"
          className="rounded-3xl bg-cyan-500 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          Search
        </button>
      </form>
      <div className="mt-8 rounded-3xl border border-slate-700/30 bg-slate-900/90 p-6 text-slate-200">
        <div className="flex items-center justify-between gap-4 text-slate-300">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Search preview</p>
          <FileSearch className="h-5 w-5 text-cyan-300" />
        </div>
        <div className="mt-6 space-y-4 text-sm leading-7">
          <p>Search results populate IOC reputation, related malware families, campaign associations, and vendor references.</p>
          <p>Sample queries: <span className="text-cyan-300">203.0.113.45</span>, <span className="text-cyan-300">malicious-domain.in</span>, <span className="text-cyan-300">CVE-2025-4501</span>.</p>
        </div>
      </div>
    </section>
  );
}
