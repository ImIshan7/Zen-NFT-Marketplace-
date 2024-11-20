import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary-dark to-accent-dark" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0')] bg-cover bg-center opacity-5" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl font-bold text-gradient mb-6">Get in Touch</h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        Have questions about NFTs? We're here to help you on your journey
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="glass-effect rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

                            {[
                                { icon: Mail, text: 'support@zennft.com' },
                                { icon: Phone, text: '+1 (555) 123-4567' },
                                { icon: MapPin, text: 'San Francisco, CA 94105' },
                                { icon: MessageSquare, text: '24/7 Live Chat Support' }
                            ].map((item, index) => (
                                <div key={index} className="flex items-center space-x-4 mb-6 last:mb-0">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-blue to-accent-blue p-[2px]">
                                        <div className="w-full h-full rounded-full bg-primary-dark flex items-center justify-center">
                                            <item.icon className="h-6 w-6 text-accent-blue" />
                                        </div>
                                    </div>
                                    <span className="text-gray-300">{item.text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="glass-effect rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">Office Hours</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span className="text-gray-300">Monday - Friday</span>
                                    <span className="text-accent-blue">9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-300">Saturday</span>
                                    <span className="text-accent-blue">10:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-300">Sunday</span>
                                    <span className="text-accent-blue">Closed</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="glass-effect rounded-2xl p-8 space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-300 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-xl bg-primary-dark border border-accent-blue/20 focus:border-accent-blue text-white outline-none transition"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-300 mb-2">Your Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-xl bg-primary-dark border border-accent-blue/20 focus:border-accent-blue text-white outline-none transition"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-300 mb-2">Subject</label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 rounded-xl bg-primary-dark border border-accent-blue/20 focus:border-accent-blue text-white outline-none transition"
                                placeholder="How can we help?"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-300 mb-2">Message</label>
                            <textarea
                                rows={4}
                                className="w-full px-4 py-3 rounded-xl bg-primary-dark border border-accent-blue/20 focus:border-accent-blue text-white outline-none transition"
                                placeholder="Your message here..."
                            ></textarea>
                        </div>

                        <button className="w-full py-4 rounded-xl bg-gradient-to-r from-primary-blue to-accent-blue text-white font-semibold hover:shadow-lg hover:shadow-primary-blue/20 transition duration-300 flex items-center justify-center">
                            <Send className="h-5 w-5 mr-2" />
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;