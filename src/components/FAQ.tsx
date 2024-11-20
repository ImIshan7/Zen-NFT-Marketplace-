import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "What is an NFT?",
            answer: "NFT stands for Non-Fungible Token. It's a unique digital asset that represents ownership of a specific item or piece of content on the blockchain. Unlike cryptocurrencies, each NFT is unique and cannot be replaced with something else of equal value."
        },
        {
            question: "How do I create an NFT?",
            answer: "To create an NFT on our platform, you'll need to connect your wallet, upload your digital content (image, video, etc.), fill in the details like title and description, set a price, and mint it. Our platform handles the technical aspects of creating the token on the blockchain."
        },
        {
            question: "What wallets are supported?",
            answer: "We currently support MetaMask, WalletConnect, and Coinbase Wallet. These are some of the most popular and secure wallets in the NFT space. Make sure your wallet is connected to the Ethereum network."
        },
        {
            question: "How do royalties work?",
            answer: "Royalties allow you to earn a percentage of the sale price each time your NFT is resold on the secondary market. You can set your royalty percentage (up to 15%) when minting your NFT. This is automatically enforced by the smart contract."
        },
        {
            question: "What are the fees?",
            answer: "There are two types of fees: gas fees (paid to the Ethereum network) and platform fees (2.5% of the sale price). Gas fees vary depending on network congestion. You'll see the exact fees before confirming any transaction."
        },
        {
            question: "How do I sell my NFT?",
            answer: "Once you own an NFT, you can list it for sale by setting a price or creating an auction. Buyers can purchase your NFT directly or place bids. When a sale occurs, the payment is automatically processed through the smart contract."
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-accent-dark to-primary-dark opacity-90" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0')] bg-cover bg-center opacity-5" />

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="flex items-center justify-center mb-6">
                        <HelpCircle className="h-8 w-8 text-accent-blue mr-2" />
                        <h2 className="text-4xl font-bold text-gradient">Frequently Asked Questions</h2>
                    </div>
                    <p className="text-lg text-gray-300">
                        Everything you need to know about NFTs and our marketplace
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-effect rounded-xl overflow-hidden"
                        >
                            <button
                                className="w-full px-6 py-4 flex items-center justify-between text-left"
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                            >
                                <span className="text-lg font-semibold text-white">{faq.question}</span>
                                <motion.div
                                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown className="h-5 w-5 text-accent-blue" />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-4 text-gray-300">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;