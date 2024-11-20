import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Code, Coins, ShieldCheck, ArrowRight } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: Palette,
            title: 'NFT Creation',
            description: 'Create and mint your NFTs with our easy-to-use tools',
            features: ['Custom metadata', 'Multiple file formats', 'Batch minting'],
            price: 'Starting at 0.1 ETH'
        },
        {
            icon: Code,
            title: 'Smart Contracts',
            description: 'Custom smart contract development for your collections',
            features: ['ERC-721/ERC-1155', 'Royalty support', 'Access control'],
            price: 'Starting at 1 ETH'
        },
        {
            icon: Coins,
            title: 'Auction House',
            description: 'Host exclusive NFT auctions with custom parameters',
            features: ['Timed auctions', 'Reserve prices', 'Instant sales'],
            price: '2.5% commission'
        },
        {
            icon: ShieldCheck,
            title: 'Verification Service',
            description: 'Get your collection officially verified on Zen NFT',
            features: ['Identity verification', 'Contract audit', 'Blue checkmark'],
            price: '0.5 ETH'
        }
    ];

    return (
        <section id="services" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-accent-dark to-primary-dark" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1634193295627-1cdddf751ebf')] bg-cover bg-center opacity-5" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl font-bold text-gradient mb-6">Our Services</h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        Comprehensive NFT services to help you succeed in the digital art world
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-effect rounded-2xl p-8 card-hover"
                        >
                            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary-blue to-accent-blue p-[2px] mb-6">
                                <div className="w-full h-full rounded-full bg-primary-dark flex items-center justify-center">
                                    <service.icon className="h-8 w-8 text-accent-blue" />
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                            <p className="text-gray-400 mb-6">{service.description}</p>

                            <ul className="space-y-3 mb-6">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-gray-300">
                                        <ArrowRight className="h-4 w-4 text-accent-blue mr-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-accent-blue">
                  {service.price}
                </span>
                                <button className="px-4 py-2 rounded-full bg-gradient-to-r from-primary-blue to-accent-blue text-white font-semibold hover:shadow-lg hover:shadow-primary-blue/20 transition duration-300">
                                    Get Started
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;