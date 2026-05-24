import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const Stats = () => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const storedLogs = JSON.parse(localStorage.getItem('timeline_logs')) || [];
        
        const counts = { call: 0, text: 0, video: 0 };
        storedLogs.forEach(log => {
            if (counts[log.type] !== undefined) {
                counts[log.type]++;
            }
        });

        const formattedData = [
            { name: 'Text', value: counts.text, color: '#8B5CF6' },
            { name: 'Call', value: counts.call, color: '#1B4332' },
            { name: 'Video', value: counts.video, color: '#22C55E' }
        ];

        setChartData(formattedData);
    }, []);

    const totalInteractions = chartData.reduce((sum, item) => sum + item.value, 0);

    const RenderCustomLegend = (props) => {
        const { payload } = props;
        return (
            <div className="flex justify-center items-center gap-6 mt-4">
                {payload.map((entry, index) => (
                    <div key={`item-${index}`} className="flex items-center gap-2">
                        <span 
                            className="w-2 h-2 rounded-full" 
                            style={{ backgroundColor: entry.payload.color }}
                        />
                        <span className="text-xs font-medium text-gray-500 capitalize">
                            {entry.value}
                        </span>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-[#F4F6F8] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                
                <h1 className="text-4xl font-bold text-[#1E293B] mb-8">Friendship Analytics</h1>

                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 max-w-3xl">
                    <h3 className="text-[#1B4332] font-semibold text-sm mb-6">By Interaction Type</h3>

                    <div className="h-64 w-full relative flex items-center justify-center">
                        {totalInteractions === 0 ? (
                            <div className="text-center text-gray-400 text-sm font-medium">
                                No logged interactions found to generate analytics.
                            </div>
                        ) : (
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={chartData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={65}
                                        outerRadius={85}
                                        paddingAngle={5}
                                        dataKey="value"
                                        startAngle={90}
                                        endAngle={-270}
                                    >
                                        {chartData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                                        ))}
                                    </Pie>
                                    <Legend content={<RenderCustomLegend />} />
                                </PieChart>
                            </ResponsiveContainer>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Stats;