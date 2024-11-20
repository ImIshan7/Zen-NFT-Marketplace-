import React from 'react';
import { motion } from 'framer-motion';
import { Flame, TrendingUp, Award } from 'lucide-react';

import Ethereal from '../assets/images/trending01.jpg';
import Abstract from '../assets/images/trending02.jpg';

const Trending = () => {
    const trendingNFTs = [
        {
            id: 1,
            image: Ethereal,
            name: "Ethereal Dreams #42",
            price: "5.6",
            change: "+124%",
            volume: "1.2K"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01",
            name: "Cyber Punk City",
            price: "3.2",
            change: "+89%",
            volume: "856"
        },
        {
            id: 3,
            image: Abstract,
            name: "Abstract Minds",
            price: "2.8",
            change: "+67%",
            volume: "654"
        }
    ];

    return (
        <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary-dark to-accent-dark opacity-90" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="flex items-center justify-center mb-6">
                        <Flame className="h-8 w-8 text-accent-blue mr-2" />
                        <h2 className="text-4xl font-bold text-gradient">Trending NFTs</h2>
                    </div>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Discover the hottest NFTs making waves in the digital art world
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {trendingNFTs.map((nft, index) => (
                        <motion.div
                            key={nft.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="glass-effect rounded-2xl overflow-hidden"
                        >
                            <div className="relative">
                                <img
                                    src={nft.image}
                                    alt={nft.name}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-accent-blue/20 backdrop-blur-sm text-white flex items-center">
                                    <TrendingUp className="h-4 w-4 mr-1" />
                                    {nft.change}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-bold text-white">{nft.name}</h3>
                                    <div className="flex items-center">
                                        <Award className="h-5 w-5 text-accent-blue mr-1" />
                                        <span className="text-accent-blue">#{nft.id}</span>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-sm text-gray-400">Floor Price</p>
                                        <p className="text-lg font-bold text-white">{nft.price} ETH</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Volume</p>
                                        <p className="text-lg font-bold text-accent-blue">{nft.volume} ETH</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <button className="px-8 py-3 rounded-full bg-gradient-to-r from-primary-blue to-accent-blue text-white font-semibold hover:shadow-lg hover:shadow-primary-blue/20 transition duration-300">
                        View All Trending
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Trending;