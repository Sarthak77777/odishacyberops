"use client";

import React from "react";
import ReactECharts from "echarts-for-react";
import { attackTrend } from "@/lib/data";

const option = {
  backgroundColor: "transparent",
  grid: { left: 8, right: 8, top: 20, bottom: 16 },
  xAxis: {
    type: "category",
    data: attackTrend.map((item) => item.day),
    axisLine: { lineStyle: { color: "rgba(148, 163, 184, 0.25)" } },
    axisTick: { show: false },
    axisLabel: { color: "#cbd5e1" },
  },
  yAxis: {
    type: "value",
    splitLine: { lineStyle: { color: "rgba(148, 163, 184, 0.12)" } },
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: { color: "#cbd5e1" },
  },
  series: [
    {
      type: "line",
      data: attackTrend.map((item) => item.incidents),
      smooth: true,
      lineStyle: { color: "#4fd1c5", width: 3 },
      areaStyle: { color: "rgba(79,209,197,0.18)" },
      symbol: "circle",
      symbolSize: 8,
    },
  ],
};

export default function TrendSparkline() {
  return (
    <div className="glass-card min-h-[240px] overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 p-4 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.8)]">
      <h3 className="mb-4 text-lg font-semibold text-white">Attack trend</h3>
      <ReactECharts option={option} style={{ height: 260, width: "100%" }} />
    </div>
  );
}
