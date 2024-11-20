import React from "react";
import { motion } from "framer-motion";
import { BarChart2, PieChart, TrendingUp, DollarSign } from "lucide-react";
import CountUp from "react-countup";

const Analytics = () => {
    const stats = [
        {
            icon: DollarSign,
            value: 12.5,
            label: "Trading Volume (M)",
            prefix: "$",
            decimals: 1,
        },
        {
            icon: TrendingUp,
            value: 45,
            label: "Growth Rate",
            suffix: "%",
            decimals: 0,
        },
        {
            icon: BarChart2,
            value: 8750,
            label: "Total Transactions",
            decimals: 0,
        },
        {
            icon: PieChart,
            value: 92,
            label: "Success Rate",
            suffix: "%",
            decimals: 0,
        },
    ];

    return (
        <section className="relative py-24 bg-gray-900 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0')] bg-cover bg-center opacity-10 animate-pulse" />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 opacity-95" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
                        Platform Analytics
                    </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Gain insights into the performance and growth of our platform.
                    </p>
                </motion.div>

                {/* Analytics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="rounded-2xl p-8 shadow-lg bg-gradient-to-br from-gray-800 to-gray-900 hover:from-blue-800 hover:to-purple-900 transition-transform duration-300 hover:scale-105"
                        >
                            {/* Icon with Gradient */}
                            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-[2px] mb-6">
                                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                                    <stat.icon className="h-8 w-8 text-purple-400" />
                                </div>
                            </div>

                            {/* Statistic Value */}
                            <h3 className="text-4xl font-extrabold text-white mb-2">
                                {stat.prefix}
                                <CountUp
                                    end={stat.value}
                                    decimals={stat.decimals}
                                    duration={2.5}
                                />
                                {stat.suffix}
                            </h3>

                            {/* Statistic Label */}
                            <p className="text-gray-400 text-lg">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Analytics;
