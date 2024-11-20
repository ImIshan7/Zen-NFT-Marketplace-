import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, ArrowRight } from 'lucide-react';
import Digital from '../assets/images/event01.jpg';
import Workshop from '../assets/images/event02.jpg';

const Events = () => {
    const events = [
        {
            id: 1,
            title: "Digital Art Exhibition",
            date: "March 15, 2024",
            time: "2:00 PM UTC",
            image:Digital,
            description: "Exclusive NFT drops from world-renowned digital artists",
            participants: 1200
        },
        {
            id: 2,
            title: "Crypto Art Summit",
            date: "March 20, 2024",
            time: "3:00 PM UTC",
            image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0",
            description: "Join the biggest virtual gathering of NFT artists and collectors",
            participants: 3500
        },
        {
            id: 3,
            title: "NFT Workshop",
            date: "March 25, 2024",
            time: "4:00 PM UTC",
            image: Workshop,
            description: "Learn how to create and sell your first NFT",
            participants: 800
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary-dark to-accent-dark opacity-90" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1642104704074-907c0698b98d')] bg-cover bg-center opacity-5" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-5xl font-bold text-gradient mb-6">Upcoming Events</h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Don't miss out on exclusive NFT drops and community events
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-effect rounded-2xl overflow-hidden"
                        >
                            <div className="relative h-48">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <div className="flex items-center text-white">
                                        <Calendar className="h-4 w-4 mr-2" />
                                        <span>{event.date}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                                <p className="text-gray-400 mb-4">{event.description}</p>

                                <div className="flex justify-between items-center text-sm text-gray-300 mb-6">
                                    <div className="flex items-center">
                                        <Clock className="h-4 w-4 mr-2" />
                                        <span>{event.time}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Users className="h-4 w-4 mr-2" />
                                        <span>{event.participants.toLocaleString()} registered</span>
                                    </div>
                                </div>

                                <motion.button
                                    whileHover={{ x: 5 }}
                                    className="w-full py-3 rounded-xl bg-gradient-to-r from-primary-blue to-accent-blue text-white font-semibold hover:shadow-lg hover:shadow-primary-blue/20 transition duration-300 flex items-center justify-center"
                                >
                                    Register Now
                                    <ArrowRight className="h-4 w-4 ml-2" />
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;