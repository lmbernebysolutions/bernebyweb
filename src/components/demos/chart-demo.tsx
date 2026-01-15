"use client";

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

const data = [
    { day: "Mo", calls: 12, leads: 4 },
    { day: "Di", calls: 18, leads: 7 },
    { day: "Mi", calls: 15, leads: 5 },
    { day: "Do", calls: 24, leads: 11 },
    { day: "Fr", calls: 32, leads: 16 },
    { day: "Sa", calls: 10, leads: 3 },
    { day: "So", calls: 8, leads: 2 },
];

export const ChartDemo = () => {
    return (
        <div className="w-full h-full min-h-[140px] flex flex-col justify-end p-2 bg-gradient-to-br from-slate-900 to-slate-950 rounded-lg border border-white/5">
            <div className="flex justify-between items-center px-2 mb-2">
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-gray-400">Anrufe diese Woche</span>
                    <span className="text-xl font-bold text-white flex items-center gap-2">
                        119 <span className="text-xs text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded">+24%</span>
                    </span>
                </div>
            </div>

            <div className="w-full h-[100px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#01FAF9" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#01FAF9" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="day" hide />
                        <Tooltip
                            contentStyle={{ backgroundColor: '#032448', border: '1px solid #1e293b', borderRadius: '8px' }}
                            itemStyle={{ color: '#fff', fontSize: '12px' }}
                            labelStyle={{ display: 'none' }}
                            cursor={{ stroke: '#ffffff20' }}
                        />
                        <Area
                            type="monotone"
                            dataKey="calls"
                            stroke="#01FAF9"
                            strokeWidth={2}
                            fillOpacity={1}
                            fill="url(#colorCalls)"
                            isAnimationActive
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};
