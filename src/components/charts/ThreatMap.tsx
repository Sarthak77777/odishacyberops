"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Activity, Crosshair, ExternalLink, RadioTower } from "lucide-react";
import { globalCyberSignals } from "@/lib/data";

type KevCatalog = {
  title?: string;
  dateReleased?: string;
  count?: number;
  vulnerabilities?: Array<{
    cveID: string;
    vendorProject: string;
    product: string;
    vulnerabilityName: string;
    dateAdded: string;
  }>;
};

const CISA_KEV_FEED = "https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json";

function curvedPath(from: { x: number; y: number }, to: { x: number; y: number }) {
  const controlX = (from.x + to.x) / 2;
  const controlY = Math.min(from.y, to.y) - 18;
  return `M ${from.x} ${from.y} Q ${controlX} ${controlY} ${to.x} ${to.y}`;
}

export default function ThreatMap() {
  const [kev, setKev] = useState<KevCatalog | null>(null);
  const [feedState, setFeedState] = useState<"loading" | "live" | "fallback">("loading");

  useEffect(() => {
    const controller = new AbortController();

    fetch(CISA_KEV_FEED, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("CISA KEV feed unavailable");
        return response.json() as Promise<KevCatalog>;
      })
      .then((data) => {
        setKev(data);
        setFeedState("live");
      })
      .catch(() => {
        setFeedState("fallback");
      });

    return () => controller.abort();
  }, []);

  const latestKev = useMemo(() => {
    return kev?.vulnerabilities
      ?.slice()
      .sort((a, b) => b.dateAdded.localeCompare(a.dateAdded))
      .slice(0, 3);
  }, [kev]);

  const liveCount = kev?.count ?? kev?.vulnerabilities?.length;

  return (
    <div className="glass-card premium-card min-h-[460px] rounded-[28px] p-5">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">Global telemetry</p>
          <h3 className="mt-2 text-xl font-semibold text-white">India and Odisha cyber attack surface</h3>
        </div>
        <span className={`rounded-full border px-3 py-1 text-xs uppercase tracking-[0.18em] ${
          feedState === "live"
            ? "border-emerald-300/20 bg-emerald-300/10 text-emerald-200"
            : "border-cyan-300/20 bg-cyan-300/10 text-cyan-200"
        }`}>
          {feedState === "live" ? "CISA KEV live" : feedState === "loading" ? "Syncing feed" : "Public-source model"}
        </span>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.35fr_0.65fr]">
        <div className="relative min-h-[340px] overflow-hidden rounded-[26px] border border-cyan-300/15 bg-slate-950/80">
          <div className="absolute inset-0 cyber-grid opacity-50" />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(38,247,255,0.08),transparent_34%),linear-gradient(245deg,rgba(255,61,242,0.08),transparent_38%)]" />
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 70" preserveAspectRatio="none" role="img" aria-label="Animated global cyber telemetry targeting India and Odisha">
            <defs>
              <linearGradient id="attackLine" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#26f7ff" stopOpacity="0" />
                <stop offset="45%" stopColor="#26f7ff" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#ff3df2" stopOpacity="0.9" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="1.4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path d="M5 32 C14 19, 30 21, 39 28 S57 32, 67 25 S88 23, 96 35" fill="none" stroke="rgba(148, 204, 255, 0.18)" strokeWidth="0.4" />
            <path d="M8 47 C22 39, 37 44, 48 40 S70 38, 91 48" fill="none" stroke="rgba(148, 204, 255, 0.14)" strokeWidth="0.35" />
            <path d="M62 44 C66 39, 75 39, 80 45 C76 53, 68 57, 62 51 Z" fill="rgba(38,247,255,0.08)" stroke="rgba(38,247,255,0.22)" strokeWidth="0.35" />
            <path d="M70 52 C72 51, 74 53, 73 56 C71 57, 69 55, 70 52 Z" fill="rgba(60,255,180,0.18)" stroke="rgba(60,255,180,0.55)" strokeWidth="0.28" />

            {globalCyberSignals.map((signal, index) => (
              <g key={signal.id}>
                <motion.path
                  d={curvedPath(signal.from, signal.to)}
                  fill="none"
                  stroke="url(#attackLine)"
                  strokeWidth={0.35 + signal.volume / 180}
                  strokeLinecap="round"
                  filter="url(#glow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: [0, 1, 1], opacity: [0, 0.95, 0.35] }}
                  transition={{ duration: 3.4, repeat: Infinity, delay: index * 0.55, ease: "easeInOut" }}
                />
                <motion.circle
                  cx={signal.from.x}
                  cy={signal.from.y}
                  r={0.9 + signal.volume / 90}
                  fill={signal.severity === "Critical" ? "#ff415f" : "#26f7ff"}
                  filter="url(#glow)"
                  animate={{ scale: [0.8, 1.45, 0.8], opacity: [0.45, 1, 0.45] }}
                  transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.35 }}
                />
              </g>
            ))}

            <motion.circle
              cx="71"
              cy="54"
              r="2.1"
              fill="#3cffb4"
              filter="url(#glow)"
              animate={{ scale: [1, 1.45, 1], opacity: [0.75, 1, 0.75] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
            <motion.circle
              cx="71"
              cy="54"
              r="5.5"
              fill="none"
              stroke="#3cffb4"
              strokeWidth="0.4"
              animate={{ r: [3.6, 8.5], opacity: [0.65, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
          </svg>

          <div className="absolute left-4 top-4 rounded-2xl border border-cyan-300/20 bg-black/30 px-4 py-3 backdrop-blur-xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cyan-200">
              <RadioTower className="h-4 w-4" />
              Public telemetry overlay
            </div>
            <p className="mt-2 text-sm text-slate-300">Target focus: India / Odisha</p>
          </div>

          <div className="absolute bottom-4 right-4 rounded-2xl border border-emerald-300/20 bg-black/30 px-4 py-3 text-right backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">Known exploited CVEs</p>
            <p className="mt-1 text-2xl font-semibold text-white">{liveCount ?? "1.5k+"}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-[24px] border border-slate-700/35 bg-slate-950/70 p-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-cyan-300">
              <Activity className="h-4 w-4" />
              Active signals
            </div>
            <div className="mt-4 space-y-3">
              {globalCyberSignals.map((signal) => (
                <a key={signal.id} href={signal.reference} className="block rounded-2xl border border-white/10 bg-white/[0.04] p-3 transition hover:border-cyan-300/25 hover:bg-cyan-300/10">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-white">{signal.source}</p>
                    <ExternalLink className="h-3.5 w-3.5 text-cyan-300" />
                  </div>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-500">{signal.category}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{signal.summary}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-fuchsia-300/15 bg-slate-950/70 p-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-fuchsia-300">
              <Crosshair className="h-4 w-4" />
              Latest KEV feed
            </div>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              {latestKev?.length ? (
                latestKev.map((item) => (
                  <div key={item.cveID} className="rounded-2xl bg-white/[0.04] p-3">
                    <p className="font-semibold text-white">{item.cveID}</p>
                    <p className="mt-1 text-slate-400">{item.vendorProject} / {item.product}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-fuchsia-300">{item.dateAdded}</p>
                  </div>
                ))
              ) : (
                <p className="leading-6">
                  Browser live sync may be blocked by CORS or network policy. The animated map still uses curated public-source signals and links to the original sources.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
