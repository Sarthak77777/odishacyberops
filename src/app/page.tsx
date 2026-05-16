"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  BookOpen,
  Bolt,
  Crosshair,
  Globe,
  RadioTower,
  ShieldAlert,
  Sparkles,
} from "lucide-react";
import { CyberCard, Reveal, StatusPill } from "@/components/MotionPrimitives";
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
const ExploitationRadar = dynamic(() => import("@/components/charts/ExploitationRadar"), { ssr: false });
const TrendSparkline = dynamic(() => import("@/components/charts/TrendSparkline"), { ssr: false });

const intelligenceMessages = [
  "Tracking active exploitation across edge devices",
  "Correlating CERT-In, KEV, vendor, and regional telemetry",
  "Prioritizing incident response workflows for Odisha and India",
];

const cyberEase = [0.22, 1, 0.36, 1] as const;
const heroEase = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 34, scale: 0.97, filter: "blur(12px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: cyberEase },
  },
};

const heroRise = {
  hidden: { opacity: 0, y: 52, scale: 0.94, filter: "blur(18px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.05, ease: heroEase },
  },
};

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 py-6">
      <motion.section
        className="glass-card flex min-h-[calc(100vh-132px)] flex-col justify-center rounded-[36px] p-5 sm:p-8 lg:p-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
        <div className="grid gap-8">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-8 py-8 text-center lg:py-12">
            <motion.div variants={heroRise} className="space-y-6">
              <StatusPill tone="emerald">Live Odisha Cyber Fusion Center</StatusPill>
              <div className="space-y-6">
                <h1 className="mx-auto max-w-6xl text-5xl font-semibold leading-[0.95] tracking-normal text-white sm:text-7xl lg:text-8xl">
                  Odisha Cyber Operations
                  <span className="block text-gradient-cyber">Threat Intelligence</span>
                </h1>
                <p className="mx-auto max-w-3xl text-base leading-8 text-slate-300 sm:text-xl">
                  A cinematic SOC dashboard for advisory aggregation, exploit tracking, incident response triage, and regional cyber awareness.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/threat-tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-5 py-3 text-sm font-semibold text-cyan-100 shadow-[0_0_34px_rgba(38,247,255,0.12)] transition hover:border-cyan-200/50 hover:bg-cyan-300/15"
                >
                  Open threat tracker
                  <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/contacts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-fuchsia-300/30 hover:bg-fuchsia-300/10"
                >
                  Incident response
                  <ShieldAlert className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div variants={item} className="grid w-full max-w-5xl gap-4 sm:grid-cols-2">
              <CyberCard href="/cves" className="p-5">
                <div className="flex items-center justify-between gap-4 text-left">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">Live CVE counter</p>
                    <p className="mt-3 text-4xl font-semibold text-white">+328</p>
                  </div>
                  <Crosshair className="h-8 w-8 text-cyan-200" />
                </div>
                <p className="mt-4 text-left text-sm leading-6 text-slate-400">Critical and actively exploited vulnerabilities tracked in the feed.</p>
                <div className="data-stream mt-5 h-px w-full" />
              </CyberCard>

              <CyberCard href="/exploitation" className="p-5">
                <div className="flex items-center justify-between gap-4 text-left">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-fuchsia-300">Active exploitation</p>
                    <p className="mt-3 text-4xl font-semibold text-white">14</p>
                  </div>
                  <Bolt className="h-8 w-8 text-fuchsia-200" />
                </div>
                <p className="mt-4 text-left text-sm leading-6 text-slate-400">Threat actor activity, KEV status, and exploit availability combined.</p>
                <div className="data-stream mt-5 h-px w-full" />
              </CyberCard>
            </motion.div>
          </div>

          <motion.div variants={item} className="relative mx-auto min-h-[420px] w-full max-w-6xl overflow-hidden rounded-[32px] border border-cyan-300/15 bg-slate-950/70 p-5 shadow-[0_0_90px_rgba(38,247,255,0.09)]">
            <div className="absolute inset-0 cyber-grid opacity-40" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(38,247,255,0.15),transparent_28%),linear-gradient(180deg,transparent,rgba(3,5,13,0.88))]" />
            <motion.div
              aria-hidden="true"
              className="absolute left-1/2 top-[42%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_24px_rgba(38,247,255,0.9)]" />
              <div className="absolute bottom-10 right-4 h-2.5 w-2.5 rounded-full bg-fuchsia-300 shadow-[0_0_24px_rgba(255,61,242,0.8)]" />
            </motion.div>
            <motion.div
              aria-hidden="true"
              className="absolute left-1/2 top-[42%] h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-fuchsia-300/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative flex h-full flex-col justify-between gap-5">
              <div className="rounded-[28px] border border-white/10 bg-black/25 p-5 backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">Threat ticker</p>
                    <motion.p
                      className="mt-3 text-xl font-semibold text-white"
                      animate={{ opacity: [0.65, 1, 0.65] }}
                      transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {intelligenceMessages[0]}
                    </motion.p>
                  </div>
                  <RadioTower className="h-7 w-7 text-cyan-200" />
                </div>
                <div className="mt-5 space-y-3">
                  {advisoryBanners.map((banner, index) => (
                    <Link
                      href={banner.href}
                      key={banner.message}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start justify-between gap-3 rounded-2xl border border-slate-700/35 bg-slate-950/70 p-3 text-sm text-slate-300 transition hover:border-cyan-300/25 hover:bg-cyan-300/10"
                    >
                      <span>{banner.message}</span>
                      <span className="text-xs uppercase tracking-[0.18em] text-cyan-300">{String(index + 1).padStart(2, "0")}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Link href="/advisories" target="_blank" rel="noopener noreferrer" className="premium-card rounded-[24px] border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl">
                  <Sparkles className="h-6 w-6 text-cyan-300" />
                  <p className="mt-4 text-xs uppercase tracking-[0.24em] text-slate-400">Advisory banner</p>
                  <p className="mt-2 text-lg font-semibold text-white">Rotating cyber advisory alerts</p>
                </Link>
                <Link href="/network" target="_blank" rel="noopener noreferrer" className="premium-card rounded-[24px] border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl">
                  <Globe className="h-6 w-6 text-fuchsia-300" />
                  <p className="mt-4 text-xs uppercase tracking-[0.24em] text-slate-400">Network background</p>
                  <p className="mt-2 text-lg font-semibold text-white">Animated telemetry pulse</p>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <section className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <div className="grid gap-6">
          <Reveal>
            <div className="glass-card rounded-[32px] p-6">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Live threat panels</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">Operational intelligence overview</h2>
                </div>
                <Activity className="h-6 w-6 text-cyan-300" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {recentCves.map((cve, index) => (
                  <Reveal key={cve.id} delay={index * 0.05}>
                    <Link href={`/cves#${cve.id.toLowerCase()}`} target="_blank" rel="noopener noreferrer" className="premium-card block h-full rounded-[24px] border border-slate-700/30 bg-slate-950/70 p-4 text-slate-200">
                      <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">{cve.id}</p>
                      <h3 className="mt-3 text-lg font-semibold text-white">{cve.title}</h3>
                      <p className="mt-2 text-sm text-slate-400">{cve.products.join(", ")}</p>
                      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                        <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-cyan-300">{cve.score} CVSS</span>
                        <span className="font-medium text-slate-100">{cve.status}</span>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6 xl:grid-cols-[0.68fr_0.32fr]">
            <Reveal><ExploitationRadar /></Reveal>
            <Reveal delay={0.06}><TrendSparkline /></Reveal>
          </div>
        </div>

        <aside className="space-y-6">
          <Reveal>
            <div className="glass-card rounded-[32px] p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Quick actions</p>
              <div className="mt-5 grid gap-3">
                {quickActions.map((action) => (
                  <Link key={action.label} href={action.href} target="_blank" rel="noopener noreferrer" className="premium-card flex items-center justify-between rounded-2xl border border-slate-700/40 bg-slate-950/70 px-4 py-3 text-sm font-medium text-slate-100">
                    {action.label}
                    <ArrowUpRight className="h-4 w-4 text-cyan-300" />
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="glass-card rounded-[32px] p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-red-300">Cyber emergency contact hub</p>
              <div className="mt-5 space-y-4">
                {emergencyContacts.map((contact) => (
                  <a key={contact.label} href={contact.link} target="_blank" rel="noopener noreferrer" className="premium-card group block rounded-2xl border border-slate-800/50 bg-slate-950/70 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-white">{contact.label}</p>
                        <p className="mt-2 text-sm text-slate-400">{contact.description}</p>
                      </div>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-red-500/10 text-red-300">{contact.icon.slice(0, 1).toUpperCase()}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </aside>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.64fr_0.36fr]">
        <div className="grid gap-6">
          <Reveal>
            <div className="glass-card rounded-[32px] p-6">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Operational metrics</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">Live cyber metrics</h2>
                </div>
                <BookOpen className="h-6 w-6 text-cyan-300" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {liveMetrics.map((metric) => (
                  <div key={metric.id} className="premium-card rounded-[24px] border border-slate-700/30 bg-slate-950/70 p-5 text-slate-200">
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{metric.label}</p>
                    <p className="mt-3 text-3xl font-semibold text-white">{metric.value}</p>
                    <p className="mt-3 text-sm text-slate-400">{metric.detail}</p>
                    <p className="mt-3 text-xs uppercase tracking-[0.24em] text-emerald-300">{metric.trend}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal><ThreatMap /></Reveal>
        </div>

        <div className="space-y-6">
          <Reveal>
            <div className="glass-card rounded-[32px] p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-fuchsia-300">Threat actor profiles</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">Active actor watchlist</h2>
              <div className="mt-5 space-y-4">
                {threatActors.map((actor) => (
                  <Link href="/actors" key={actor.name} target="_blank" rel="noopener noreferrer" className="premium-card block rounded-2xl border border-slate-700/30 bg-slate-950/70 p-4 text-slate-200">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-lg font-semibold text-white">{actor.name}</p>
                        <p className="mt-1 text-sm text-slate-400">{actor.region} / {actor.sectors.join(", ")}</p>
                      </div>
                      <span className="rounded-full bg-fuchsia-500/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-fuchsia-300">{actor.aliases[0]}</span>
                    </div>
                    <p className="mt-4 text-sm text-slate-400">{actor.recentCampaign}</p>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="glass-card rounded-[32px] p-6">
              <Link href="/awareness" target="_blank" rel="noopener noreferrer" className="group block">
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Awareness portal</p>
                <h2 className="mt-2 text-2xl font-semibold text-white transition group-hover:text-cyan-100">Regional cyber awareness</h2>
              </Link>
              <div className="mt-5 space-y-4">
                {awarenessCards.slice(0, 3).map((card) => (
                  <Link href={`/awareness#${card.id}`} key={card.title} target="_blank" rel="noopener noreferrer" className="premium-card block rounded-2xl border border-slate-700/30 bg-slate-950/70 p-4 text-slate-200">
                    <p className="text-lg font-semibold text-white">{card.title}</p>
                    <p className="mt-2 text-sm text-slate-400">{card.description}</p>
                    <p className="mt-3 text-sm uppercase tracking-[0.2em] text-cyan-300">{card.action}</p>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
