"use client";

import dynamic from "next/dynamic";
import { Globe, ShieldAlert, Bolt, BookOpen } from "lucide-react";
import {
  advisoryBanners,
  awarenessCards,
  emergencyContacts,
  liveMetrics,
  quickActions,
  recentCves,
  threatActors,
} from "@/lib/data";

const ThreatMap = dynamic(() => import("@/components/charts/ThreatMap"), { ssr: false });
const ExploitationRadar = dynamic(
  () => import("@/components/charts/ExploitationRadar"),
  { ssr: false }
);
const TrendSparkline = dynamic(() => import("@/components/charts/TrendSparkline"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 py-6">
      <section className="glass-card overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-[0_32px_120px_-50px_rgba(0,0,0,0.8)]">
        <div className="grid gap-8 xl:grid-cols-[1.35fr_0.85fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.26em] text-cyan-300">
              <ShieldAlert className="h-4 w-4 text-cyan-300" />
              Live Odisha Cyber Fusion Center
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Odisha Cyber Operations & Threat Intelligence
              </h1>
              <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Regional SOC analytics, threat advisory aggregation, incident response triage, and detection engineering knowledge for Odisha and India.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-cyan-400/10 bg-slate-950/90 p-5 text-sm text-slate-200 shadow-[0_18px_45px_-30px_rgba(34,211,238,0.8)]">
                <div className="flex items-center justify-between text-slate-200">
                  <span className="font-semibold">Live CVE counter</span>
                  <span className="text-cyan-300">+328</span>
                </div>
                <p className="mt-3 text-sm text-slate-400">Critical and actively exploited vulnerabilities tracked in our feed.</p>
              </div>
              <div className="rounded-3xl border border-fuchsia-400/10 bg-slate-950/90 p-5 text-sm text-slate-200 shadow-[0_18px_45px_-30px_rgba(236,72,153,0.7)]">
                <div className="flex items-center justify-between text-slate-200">
                  <span className="font-semibold">Active exploitation alerts</span>
                  <span className="text-fuchsia-300">14</span>
                </div>
                <p className="mt-3 text-sm text-slate-400">Threat actor activity, KEV status, and exploit availability combined.</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-slate-900/95 to-slate-950/70 p-6 shadow-[0_25px_90px_-40px_rgba(0,0,0,0.75)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.16),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.12),_transparent_24%)]" />
            <div className="relative space-y-6">
              <div className="rounded-3xl border border-cyan-500/10 bg-slate-950/90 p-4 text-slate-200 shadow-[0_12px_40px_-25px_rgba(34,211,238,0.6)]">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Threat ticker</p>
                    <p className="mt-3 text-lg font-semibold text-white">Live regional exploit notifications</p>
                  </div>
                  <Bolt className="h-6 w-6 text-cyan-300" />
                </div>
                <div className="mt-4 space-y-3 text-sm text-slate-300">
                  {advisoryBanners.map((banner, index) => (
                    <div key={index} className="rounded-2xl bg-slate-900/90 p-3 text-slate-200 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.08)]">
                      {banner}
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-600/20 bg-slate-950/90 p-5 text-slate-200 shadow-[0_20px_80px_-50px_rgba(0,0,0,0.8)]">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Advisory banner</p>
                  <p className="mt-3 text-lg font-semibold text-white">Rotating cyber advisory alerts</p>
                </div>
                <div className="rounded-3xl border border-slate-600/20 bg-slate-950/90 p-5 text-slate-200 shadow-[0_20px_80px_-50px_rgba(0,0,0,0.8)]">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Network background</p>
                  <p className="mt-3 text-lg font-semibold text-white">Animated globe and threat feed pulse</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <div className="grid gap-6">
          <div className="glass-card rounded-[32px] border border-white/10 bg-slate-950/80 p-6 shadow-[0_24px_80px_-50px_rgba(0,0,0,0.8)]">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Live threat panels</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Operational intelligence overview</h2>
              </div>
              <Globe className="h-6 w-6 text-cyan-300" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {recentCves.map((cve) => (
                <div key={cve.id} className="rounded-3xl border border-slate-700/30 bg-slate-900/90 p-4 text-slate-200 shadow-[0_16px_50px_-30px_rgba(0,0,0,0.8)]">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{cve.id}</p>
                  <h3 className="mt-3 text-lg font-semibold text-white">{cve.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{cve.products.join(", ")}</p>
                  <div className="mt-4 flex items-center justify-between gap-3 text-sm text-slate-300">
                    <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-cyan-300">{cve.score} CVSS</span>
                    <span className="font-medium text-slate-100">{cve.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-[0.68fr_0.32fr]">
            <ExploitationRadar />
            <TrendSparkline />
          </div>
        </div>
        <aside className="space-y-6">
          <div className="glass-card rounded-[32px] border border-white/10 bg-slate-950/80 p-6 shadow-[0_20px_70px_-40px_rgba(0,0,0,0.75)]">
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Quick actions</p>
            <div className="mt-5 grid gap-3">
              {quickActions.map((action) => (
                <a key={action.label} href={action.href} className="rounded-3xl border border-slate-700/40 bg-slate-900/90 px-4 py-3 text-sm font-medium text-slate-100 transition hover:border-cyan-400/30 hover:bg-slate-900/95">
                  {action.label}
                </a>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-[32px] border border-white/10 bg-slate-950/80 p-6 shadow-[0_20px_70px_-40px_rgba(0,0,0,0.75)]">
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Cyber emergency contact hub</p>
            <div className="mt-5 space-y-4">
              {emergencyContacts.map((contact) => (
                <a key={contact.label} href={contact.link} className="group block rounded-3xl border border-slate-800/50 bg-slate-900/90 p-4 transition hover:border-cyan-400/25 hover:bg-slate-900/95">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-white">{contact.label}</p>
                      <p className="mt-2 text-sm text-slate-400">{contact.description}</p>
                    </div>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-300">{contact.icon.slice(0, 1).toUpperCase()}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.64fr_0.36fr]">
        <div className="grid gap-6">
          <div className="glass-card rounded-[32px] border border-white/10 bg-slate-950/80 p-6 shadow-[0_24px_80px_-50px_rgba(0,0,0,0.8)]">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Operational metrics</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Live cyber metrics</h2>
              </div>
              <BookOpen className="h-6 w-6 text-cyan-300" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {liveMetrics.map((metric) => (
                <div key={metric.id} className="rounded-3xl border border-slate-700/30 bg-slate-900/90 p-5 text-slate-200">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{metric.label}</p>
                  <p className="mt-3 text-3xl font-semibold text-white">{metric.value}</p>
                  <p className="mt-3 text-sm text-slate-400">{metric.detail}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.24em] text-emerald-300">{metric.trend}</p>
                </div>
              ))}
            </div>
          </div>

          <ThreatMap />
        </div>

        <div className="space-y-6">
          <div className="glass-card rounded-[32px] border border-white/10 bg-slate-950/80 p-6 shadow-[0_24px_80px_-50px_rgba(0,0,0,0.8)]">
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Threat actor profiles</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Active actor watchlist</h2>
            <div className="mt-5 space-y-4">
              {threatActors.map((actor) => (
                <div key={actor.name} className="rounded-3xl border border-slate-700/30 bg-slate-900/90 p-4 text-slate-200">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-lg font-semibold text-white">{actor.name}</p>
                      <p className="mt-1 text-sm text-slate-400">{actor.region} • {actor.sectors.join(", ")}</p>
                    </div>
                    <span className="rounded-full bg-fuchsia-500/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-fuchsia-300">{actor.aliases[0]}</span>
                  </div>
                  <p className="mt-4 text-sm text-slate-400">{actor.recentCampaign}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-[32px] border border-white/10 bg-slate-950/80 p-6 shadow-[0_24px_80px_-50px_rgba(0,0,0,0.8)]">
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Awareness portal</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Regional cyber awareness</h2>
            <div className="mt-5 space-y-4">
              {awarenessCards.slice(0, 3).map((card) => (
                <div key={card.title} className="rounded-3xl border border-slate-700/30 bg-slate-900/90 p-4 text-slate-200">
                  <p className="text-lg font-semibold text-white">{card.title}</p>
                  <p className="mt-2 text-sm text-slate-400">{card.description}</p>
                  <p className="mt-3 text-sm uppercase tracking-[0.24em] text-cyan-300">{card.action}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
