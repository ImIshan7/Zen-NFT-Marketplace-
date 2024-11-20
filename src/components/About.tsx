import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Trophy, Users, Sparkles, Code, Palette, Globe } from 'lucide-react';

const About = () => {
    const features = [
        {
            icon: Shield,
            title: 'Secure Trading',
            description: 'Advanced encryption and blockchain security for safe NFT transactions.',
        },
        {
            icon: Zap,
            title: 'Instant Listings',
            description: 'List your NFTs instantly with our streamlined process.',
        },
        {
            icon: Trophy,
            title: 'Exclusive Drops',
            description: 'Access to exclusive NFT drops from top artists worldwide.',
        },
        {
            icon: Users,
            title: 'Community First',
            description: 'Join a thriving community of NFT creators and collectors.',
        },
    ];

    const stats = [
        { icon: Sparkles, value: '100K+', label: 'Artworks' },
        { icon: Code, value: '50K+', label: 'Smart Contracts' },
        { icon: Palette, value: '25K+', label: 'Artists' },
        { icon: Globe, value: '150+', label: 'Countries' },
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.2, scale: 1.2 }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror' }}
                    className="absolute top-10 left-1/4 bg-purple-500 rounded-full w-[300px] h-[300px] blur-3xl opacity-30"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.2, scale: 1.5 }}
                    transition={{ duration: 8, repeat: Infinity, repeatType: 'mirror' }}
                    className="absolute bottom-10 right-1/4 bg-blue-500 rounded-full w-[400px] h-[400px] blur-3xl opacity-30"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl font-bold mb-6 text-white">About Zen NFT</h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        Welcome to the future of digital art collection. We're building the most advanced and user-friendly NFT platform for creators and collectors worldwide.
                    </p>
                </motion.div>

                {/* Features Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300"
                        >
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.8 }}
                                className="mb-6 flex justify-center"
                            >
                                <feature.icon className="h-12 w-12 text-purple-500" />
                            </motion.div>
                            <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-t from-gray-900 to-gray-800 p-8 rounded-2xl text-center shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            <stat.icon className="h-10 w-10 text-purple-500 mx-auto mb-4" />
                            <h4 className="text-3xl font-bold text-white">{stat.value}</h4>
                            <p className="text-gray-400">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
