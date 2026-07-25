"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export interface TrendPoint {
  date: string;
  value: number;
}

export function TrendChart({
  labName,
  unit,
  points,
}: {
  labName: string;
  unit?: string | null;
  points: TrendPoint[];
}) {
  return (
    <div className="bg-surface-container-lowest dark:bg-inverse-surface rounded-3xl p-card-padding border border-outline-variant/10 dark:border-inverse-on-surface/10">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-title-lg text-title-lg text-on-surface dark:text-inverse-on-surface">{labName}</h3>
        {unit && <span className="font-label-sm text-label-sm text-on-surface-variant dark:text-inverse-on-surface/70">{unit}</span>}
      </div>
      <div className="h-56">
        <ResponsiveContainer height="100%" width="100%">
          <LineChart data={points} margin={{ top: 8, right: 16, bottom: 0, left: -16 }}>
            <CartesianGrid stroke="#bcc9c6" strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="date"
              fontSize={11}
              stroke="#3d4947"
              tickLine={false}
            />
            <YAxis fontSize={11} stroke="#3d4947" tickLine={false} />
            <Tooltip
              contentStyle={{
                borderRadius: 12,
                border: "1px solid #bcc9c6",
                fontFamily: "Plus Jakarta Sans, sans-serif",
              }}
            />
            <Line
              dataKey="value"
              dot={{ r: 4, fill: "#00685f" }}
              stroke="#00685f"
              strokeWidth={2.5}
              type="monotone"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
