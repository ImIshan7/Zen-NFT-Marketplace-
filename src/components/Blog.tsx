import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, User, ArrowRight } from 'lucide-react';
import Future from '../assets/images/Articles01.jpg';
import Market from '../assets/images/Articles02.jpg';
const Blog = () => {
    const articles = [
        {
            id: 1,
            title: "The Future of Digital Art: NFTs and Beyond",
            excerpt: "Explore how NFTs are revolutionizing the art world and creating new opportunities for creators.",
            image: Future,
            author: "Alex Thompson",
            date: "March 10, 2024",
            readTime: "5 min read",
            category: "Insights"
        },
        {
            id: 2,
            title: "Getting Started with NFT Creation",
            excerpt: "A comprehensive guide to creating and selling your first NFT in the digital marketplace.",
            image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0",
            author: "Sarah Chen",
            date: "March 8, 2024",
            readTime: "8 min read",
            category: "Tutorial"
        },
        {
            id: 3,
            title: "Understanding NFT Market Trends",
            excerpt: "Analysis of current market trends and predictions for the future of NFT trading.",
            image: Market,
            author: "Michael Roberts",
            date: "March 5, 2024",
            readTime: "6 min read",
            category: "Market Analysis"
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary-dark to-accent-dark opacity-90" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1634193295627-1cdddf751ebf')] bg-cover bg-center opacity-5" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="flex items-center justify-center mb-6">
                        <BookOpen className="h-8 w-8 text-accent-blue mr-2" />
                        <h2 className="text-4xl font-bold text-gradient">Latest Articles</h2>
                    </div>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Stay updated with the latest news and insights from the NFT world
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <motion.article
                            key={article.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-effect rounded-2xl overflow-hidden group"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-accent-blue/20 backdrop-blur-sm text-white text-sm">
                                    {article.category}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center text-sm text-gray-400 mb-4">
                                    <div className="flex items-center">
                                        <User className="h-4 w-4 mr-1" />
                                        {article.author}
                                    </div>
                                    <span className="mx-2">•</span>
                                    <div className="flex items-center">
                                        <Clock className="h-4 w-4 mr-1" />
                                        {article.readTime}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                                    {article.title}
                                </h3>
                                <p className="text-gray-400 mb-6 line-clamp-3">
                                    {article.excerpt}
                                </p>

                                <motion.button
                                    whileHover={{ x: 5 }}
                                    className="flex items-center text-accent-blue hover:text-white transition-colors"
                                >
                                    Read More
                                    <ArrowRight className="h-4 w-4 ml-2" />
                                </motion.button>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <button className="px-8 py-3 rounded-full bg-gradient-to-r from-primary-blue to-accent-blue text-white font-semibold hover:shadow-lg hover:shadow-primary-blue/20 transition duration-300">
                        View All Articles
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Blog;