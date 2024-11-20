import React from "react";
import { motion } from "framer-motion";
import { Users, MessageSquare, Share2, Globe } from "lucide-react";

const Community = () => {
    const stats = [
        { icon: Users, value: "50K+", label: "Active Members", emoji: "👥" },
        { icon: MessageSquare, value: "100K+", label: "Daily Messages", emoji: "💬" },
        { icon: Share2, value: "25K+", label: "NFTs Shared", emoji: "✨" },
        { icon: Globe, value: "150+", label: "Countries", emoji: "🌍" },
    ];

    const cards = [
        {
            title: "Discord Community",
            description:
                "Join our Discord server for real-time discussions, exclusive drops, and community events.",
            buttonText: "Join Discord",
            emoji: "🎧",
        },
        {
            title: "Twitter Updates",
            description:
                "Follow us on Twitter for the latest news, trending NFTs, and market insights.",
            buttonText: "Follow Us",
            emoji: "🐦",
        },
        {
            title: "Creator Program",
            description:
                "Apply to our creator program for exclusive benefits and early access to new features.",
            buttonText: "Apply Now",
            emoji: "🌟",
        },
    ];

    return (
        <section className="relative py-24 bg-gray-900 overflow-hidden">
            {/* Background Layers */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-900 to-black opacity-90" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1642104704074-907c0698b98d')] bg-cover bg-center opacity-10 animate-pulse" />

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
                        🌟 Join Our Community 🌟
                    </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Connect with fellow NFT enthusiasts, creators, and collectors in our vibrant community.
                    </p>
                </motion.div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="rounded-2xl p-6 bg-gradient-to-br from-gray-800 to-gray-900 text-center shadow-lg hover:scale-105 transition-transform duration-300"
                        >
                            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-[2px] mb-4">
                                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-2xl">
                                    {stat.emoji}
                                </div>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                            <p className="text-gray-400">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="rounded-2xl p-8 bg-gradient-to-br from-blue-800 to-purple-900 shadow-lg hover:scale-105 transition-transform duration-300 text-center"
                        >
                            <h3 className="text-2xl font-extrabold text-white mb-4">
                                {card.emoji} {card.title}
                            </h3>
                            <p className="text-gray-300 mb-6">{card.description}</p>
                            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/20 transition duration-300">
                                {card.buttonText}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Community;
