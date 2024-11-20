import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import { ChevronDown } from 'lucide-react';
// @ts-ignore
import { Link } from 'react-scroll';

const Hero = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                'Discover Rare Digital Art',
                'Create Unique NFTs',
                'Explore the NFT Marketplace',
            ],
            typeSpeed: 70,
            backSpeed: 50,
            loop: true,
        });

        return () => typed.destroy();
    }, []);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1635322966219-b75ed372eb01"
                    alt="NFT Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    {/* Headline */}
                    <div className="space-y-6">
                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wide">
                            <span ref={el}></span>
                        </h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
                        >
                            Join the NFT revolution—explore, collect, and create digital assets like never before.
                        </motion.p>
                    </div>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-col sm:flex-row justify-center gap-4"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition"
                        >
                            Explore Collection
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 rounded-full border-2 border-indigo-500 text-white font-semibold hover:bg-indigo-500/20 transition"
                        >
                            Create NFT
                        </motion.button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12"
                    >
                        {[
                            { label: 'Artworks', value: '150K+' },
                            { label: 'Artists', value: '50K+' },
                            { label: 'Collectors', value: '120K+' },
                            { label: 'Trading Volume', value: '$500M+' },
                        ].map((stat, index) => (
                            <div key={index} className="bg-white/10 rounded-xl p-4 backdrop-blur-md">
                                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-gray-400">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <ChevronDown className="w-8 h-8 text-white" />
                </motion.div>
            </Link>
        </section>
    );
};

export default Hero;
