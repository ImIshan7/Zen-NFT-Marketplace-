import React from "react";
import { motion } from "framer-motion";
import { User, Image as ImageIcon, Heart, DollarSign } from "lucide-react";

const CreatorProfile = () => {
    const creatorStats = [
        { icon: ImageIcon, value: "125", label: "Created" },
        { icon: Heart, value: "10.5K", label: "Likes" },
        { icon: DollarSign, value: "85.2", label: "Volume" },
    ];

    return (
        <section className="relative overflow-hidden py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900">
            {/* Background image with animation */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1646458651681-4db4bc1ce786')] bg-cover bg-center opacity-10"
            />

            {/* Animated particles */}
            <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 1, duration: 2 }}
                style={{
                    backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.1), transparent)",
                    animation: "pulse 8s infinite",
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    {/* Profile Picture */}
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-[2px] mb-6 shadow-lg">
                        <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                            <User className="h-16 w-16 text-blue-400" />
                        </div>
                    </div>

                    {/* Creator Info */}
                    <h2 className="text-4xl font-extrabold text-white mb-2">
                        Digital Artist
                    </h2>
                    <p className="text-blue-400 font-semibold mb-4">@creative_mind</p>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                        Creating unique digital art and collectibles. Exploring the
                        boundaries of creativity in the NFT space.
                    </p>

                    {/* Stats */}
                    <div className="flex justify-center space-x-12 mb-12">
                        {creatorStats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="flex items-center justify-center mb-2">
                                    <stat.icon className="h-6 w-6 text-blue-400 mr-2" />
                                    <motion.span
                                        className="text-2xl font-bold text-white"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        {stat.value}
                                    </motion.span>
                                </div>
                                <p className="text-gray-400">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Follow Button */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-lg hover:shadow-purple-500/50 transition duration-300"
                    >
                        Follow Creator
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default CreatorProfile;
