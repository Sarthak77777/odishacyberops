"use client";

import React from "react";
import ReactECharts from "echarts-for-react";
import { attackTrend } from "@/lib/data";

const option = {
  backgroundColor: "transparent",
  grid: { left: 8, right: 8, top: 20, bottom: 16 },
  tooltip: {
    trigger: "axis",
    backgroundColor: "rgba(3, 7, 18, 0.92)",
    borderColor: "rgba(255, 61, 242, 0.35)",
    textStyle: { color: "#e2e8f0" },
  },
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
      lineStyle: { color: "#ff3df2", width: 3 },
      areaStyle: { color: "rgba(255,61,242,0.18)" },
      emphasis: { focus: "series" },
      symbol: "circle",
      symbolSize: 8,
    },
  ],
};

export default function TrendSparkline() {
  return (
    <div className="glass-card premium-card min-h-[240px] rounded-[28px] p-5">
      <p className="text-xs uppercase tracking-[0.24em] text-fuchsia-300">Seven-day pulse</p>
      <h3 className="mb-4 mt-2 text-lg font-semibold text-white">Attack trend</h3>
      <ReactECharts option={option} style={{ height: 260, width: "100%" }} />
    </div>
  );
}
