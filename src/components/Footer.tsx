import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Instagram, Facebook, Youtube, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative pt-24 pb-12 overflow-hidden">
            <div className="absolute inset-0 bg-primary-dark" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1634193295627-1cdddf751ebf')] bg-cover bg-center opacity-5" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold text-gradient">Zen NFT</h3>
                        <p className="text-gray-400">
                            The world's largest digital marketplace for crypto collectibles and NFTs.
                            Buy, sell, and discover exclusive digital items.
                        </p>
                        <div className="flex space-x-4">
                            {[Twitter, Instagram, Facebook, Youtube].map((Icon, index) => (
                                <motion.a
                                    key={index}
                                    whileHover={{ y: -3 }}
                                    className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-blue to-accent-blue p-[2px] cursor-pointer"
                                    href="#"
                                >
                                    <div className="w-full h-full rounded-full bg-primary-dark flex items-center justify-center">
                                        <Icon className="h-5 w-5 text-accent-blue" />
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {[
                        {
                            title: 'Marketplace',
                            links: ['All NFTs', 'Art', 'Music', 'Virtual Worlds', 'Trading Cards']
                        },
                        {
                            title: 'Resources',
                            links: ['Help Center', 'Partners', 'Blog', 'Newsletter', 'Discord']
                        },
                        {
                            title: 'Company',
                            links: ['About Us', 'Careers', 'Support', 'Terms of Service', 'Privacy']
                        }
                    ].map((section, index) => (
                        <div key={index}>
                            <h4 className="text-xl font-semibold text-white mb-6">{section.title}</h4>
                            <ul className="space-y-4">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-accent-blue flex items-center group"
                                        >
                                            <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm mb-4 md:mb-0">
                            © 2024 Zen NFT. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-accent-blue text-sm transition">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-400 hover:text-accent-blue text-sm transition">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;