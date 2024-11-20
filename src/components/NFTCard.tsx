import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Share2, Clock, ArrowUpRight, DollarSign } from 'lucide-react';

interface NFTCardProps {
    image: string;
    name: string;
    price: string;
    creator: string;
    likes: number;
    endTime?: string;
    highestBid?: string;
}

const NFTCard: React.FC<NFTCardProps> = ({
                                             image,
                                             name,
                                             price,
                                             creator,
                                             likes,
                                             endTime,
                                             highestBid
                                         }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [currentLikes, setCurrentLikes] = useState(likes);
    const [showBidModal, setShowBidModal] = useState(false);
    const [bidAmount, setBidAmount] = useState('');

    const handleLike = () => {
        setIsLiked(!isLiked);
        setCurrentLikes(isLiked ? currentLikes - 1 : currentLikes + 1);
    };

    const handleBid = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would implement the actual bidding logic
        console.log(`Placed bid of ${bidAmount} ETH`);
        setShowBidModal(false);
        setBidAmount('');
    };

    return (
        <>
            <motion.div
                whileHover={{ y: -10 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-colors duration-300"
            >
                <div className="relative group">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button className="px-6 py-2 bg-purple-600 text-white rounded-full transform hover:scale-105 transition flex items-center">
                            View Details <ArrowUpRight className="ml-2 h-4 w-4" />
                        </button>
                    </div>
                </div>

                <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-semibold text-white">{name}</h3>
                        <div className="flex items-center space-x-2">
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                className={`${isLiked ? 'text-purple-500' : 'text-gray-400'} hover:text-purple-500`}
                                onClick={handleLike}
                            >
                                <Heart size={20} fill={isLiked ? 'currentColor' : 'none'} />
                            </motion.button>
                            <span className="text-gray-400">{currentLikes}</span>
                        </div>
                    </div>

                    <p className="text-sm text-gray-400 mb-3">Created by {creator}</p>

                    {endTime && (
                        <div className="flex items-center text-sm text-gray-400 mb-3">
                            <Clock className="h-4 w-4 mr-2" />
                            <span>Ends in {endTime}</span>
                        </div>
                    )}

                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-sm text-gray-400">Current Price</p>
                            <p className="text-lg font-bold text-white">{price} ETH</p>
                            {highestBid && (
                                <p className="text-sm text-purple-400">Highest bid: {highestBid} ETH</p>
                            )}
                        </div>
                        <div className="flex space-x-2">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                className="text-gray-400 hover:text-purple-500"
                            >
                                <Share2 size={20} />
                            </motion.button>
                            {highestBid && (
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setShowBidModal(true)}
                                    className="px-4 py-1 bg-purple-600 text-white text-sm rounded-full hover:bg-purple-700 transition flex items-center"
                                >
                                    <DollarSign className="h-4 w-4 mr-1" />
                                    Place Bid
                                </motion.button>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>

            {showBidModal && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-gray-900 p-6 rounded-xl max-w-md w-full mx-4"
                    >
                        <h3 className="text-xl font-bold text-white mb-4">Place a Bid</h3>
                        <form onSubmit={handleBid} className="space-y-4">
                            <div>
                                <label className="text-gray-400 text-sm">Bid Amount (ETH)</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    min={Number(highestBid) + 0.01}
                                    value={bidAmount}
                                    onChange={(e) => setBidAmount(e.target.value)}
                                    className="w-full px-4 py-2 bg-black/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white mt-1"
                                    placeholder="Enter bid amount"
                                    required
                                />
                            </div>
                            <div className="flex space-x-3">
                                <button
                                    type="submit"
                                    className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                                >
                                    Confirm Bid
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setShowBidModal(false)}
                                    className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </>
    );
};

export default NFTCard;