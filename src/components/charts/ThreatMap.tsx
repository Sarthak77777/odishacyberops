"use client";

import React from "react";
import ReactECharts from "echarts-for-react";
import type { EChartsOption } from "echarts";
import { threatMapPoints } from "@/lib/data";

const option: EChartsOption = {
  backgroundColor: "transparent",
  tooltip: {
    trigger: "item",
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
      areaColor: "#09111f",
      borderColor: "#173051",
    },
    regions: [{ name: "India", itemStyle: { areaColor: "#0f4f7f" } }],
  },
  series: [
    {
      name: "Threat hotspots",
      type: "effectScatter",
      coordinateSystem: "geo",
      data: threatMapPoints.map((point) => ({
        name: point.name,
        value: [...point.coords, point.count],
      })),
      symbolSize: 12,
      showEffectOn: "render",
      rippleEffect: {
        brushType: "stroke",
      },
      itemStyle: {
        color: "#4fd1c5",
        shadowBlur: 12,
        shadowColor: "rgba(79,209,197,0.65)",
      },
    },
  ],
};

export default function ThreatMap() {
  return (
    <div className="glass-card min-h-[320px] overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 p-4 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.8)]">
      <h3 className="mb-4 text-lg font-semibold text-white">Threat map</h3>
      <ReactECharts option={option} style={{ height: 360, width: "100%" }} />
    </div>
  );
}
