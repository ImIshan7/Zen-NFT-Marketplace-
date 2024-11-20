import React from 'react';
import { motion } from 'framer-motion';
import { Milestone, Rocket, Target, Users, Zap, Shield } from 'lucide-react';

const Roadmap = () => {
    const milestones = [
        {
            icon: Rocket,
            phase: "Phase 1 - Q1 2024",
            title: "Platform Launch",
            description: "Initial release of the NFT marketplace with core features",
            items: [
                "User authentication & wallet integration",
                "Basic NFT minting capabilities",
                "Marketplace listing & trading",
                "Community forum launch"
            ],
            status: "completed"
        },
        {
            icon: Target,
            phase: "Phase 2 - Q2 2024",
            title: "Enhanced Features",
            description: "Expanding platform capabilities and user experience",
            items: [
                "Advanced search & filtering",
                "Batch minting tools",
                "Creator profiles & verification",
                "Mobile app development"
            ],
            status: "in-progress"
        },
        {
            icon: Users,
            phase: "Phase 3 - Q3 2024",
            title: "Community Growth",
            description: "Focus on community engagement and creator tools",
            items: [
                "Creator dashboard & analytics",
                "NFT collections & series",
                "Community governance",
                "Exclusive events & drops"
            ],
            status: "upcoming"
        },
        {
            icon: Shield,
            phase: "Phase 4 - Q4 2024",
            title: "Security & Scaling",
            description: "Platform security enhancements and scaling solutions",
            items: [
                "Layer 2 integration",
                "Enhanced security features",
                "Cross-chain support",
                "Enterprise partnerships"
            ],
            status: "upcoming"
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary-dark to-accent-dark opacity-90" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0')] bg-cover bg-center opacity-5" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center mb-6">
                        <Zap className="h-8 w-8 text-accent-blue mr-2" />
                        <h2 className="text-4xl font-bold text-gradient">Platform Roadmap</h2>
                    </div>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Our vision for the future of NFT trading and digital art
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {milestones.map((milestone, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-effect rounded-2xl p-8"
                        >
                            <div className="relative mb-6">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary-blue to-accent-blue p-[2px]">
                                    <div className="w-full h-full rounded-full bg-primary-dark flex items-center justify-center">
                                        <milestone.icon className="h-8 w-8 text-accent-blue" />
                                    </div>
                                </div>
                                <div className={`absolute top-0 right-0 px-3 py-1 rounded-full text-sm ${
                                    milestone.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                                        milestone.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-400' :
                                            'bg-gray-500/20 text-gray-400'
                                }`}>
                                    {milestone.status.charAt(0).toUpperCase() + milestone.status.slice(1)}
                                </div>
                            </div>

                            <h3 className="text-lg font-semibold text-accent-blue mb-2">
                                {milestone.phase}
                            </h3>
                            <h4 className="text-xl font-bold text-white mb-3">
                                {milestone.title}
                            </h4>
                            <p className="text-gray-400 mb-4">
                                {milestone.description}
                            </p>

                            <ul className="space-y-2">
                                {milestone.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start text-gray-300">
                                        <div className="h-2 w-2 rounded-full bg-accent-blue mt-2 mr-2" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Roadmap;