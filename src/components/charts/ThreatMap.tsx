"use client";

import React from "react";
import ReactECharts from "echarts-for-react";
import type { EChartsOption } from "echarts";
import { threatMapPoints } from "@/lib/data";

const option: EChartsOption = {
  backgroundColor: "transparent",
  tooltip: {
    trigger: "item",
    backgroundColor: "rgba(3, 7, 18, 0.92)",
    borderColor: "rgba(38, 247, 255, 0.35)",
    textStyle: { color: "#e2e8f0" },
    formatter: (params: unknown) => {
      const item = params as { name?: string; value?: (number | string)[] };
      return `${item.name ?? "Unknown"}: ${item.value?.[2] ?? 0} events`;
    },
  },
  geo: {
    map: "world",
    roam: true,
    emphasis: {
      label: { show: false },
    },
    itemStyle: {
      areaColor: "#07111f",
      borderColor: "rgba(38, 247, 255, 0.18)",
    },
    regions: [{ name: "India", itemStyle: { areaColor: "#0f4f7f", borderColor: "#26f7ff" } }],
  },
  series: [
    {
      name: "Attack arcs",
      type: "lines",
      coordinateSystem: "geo",
      zlevel: 2,
      effect: {
        show: true,
        period: 4,
        trailLength: 0.35,
        color: "#26f7ff",
        symbolSize: 4,
      },
      lineStyle: {
        color: "rgba(38, 247, 255, 0.34)",
        width: 1,
        opacity: 0.55,
        curveness: 0.24,
      },
      data: threatMapPoints
        .filter((point) => point.name !== "Odisha")
        .map((point) => ({
          fromName: point.name,
          toName: "Odisha",
          coords: [point.coords, [85.0985, 20.9517]],
        })),
    },
    {
      name: "Threat hotspots",
      type: "effectScatter",
      coordinateSystem: "geo",
      data: threatMapPoints.map((point) => ({
        name: point.name,
        value: [...point.coords, point.count],
      })),
      symbolSize: (value: unknown) => {
        const point = value as number[];
        return Math.max(10, Math.min(24, point[2] / 2.4));
      },
      showEffectOn: "render",
      rippleEffect: {
        brushType: "stroke",
        scale: 4.2,
      },
      itemStyle: {
        color: "#26f7ff",
        shadowBlur: 22,
        shadowColor: "rgba(38,247,255,0.85)",
      },
    },
  ],
};

export default function ThreatMap() {
  return (
    <div className="glass-card premium-card min-h-[320px] rounded-[28px] p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">Global telemetry</p>
          <h3 className="mt-2 text-lg font-semibold text-white">Animated threat map</h3>
        </div>
        <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-emerald-200">Live</span>
      </div>
      <ReactECharts option={option} style={{ height: 360, width: "100%" }} />
    </div>
  );
}
