import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Image as ImageIcon, File, Plus, AlertCircle, Shield, X } from 'lucide-react';
import toast from 'react-hot-toast';

interface MintNFTProps {
    walletConnected: boolean;
}

const MintNFT: React.FC<MintNFTProps> = ({ walletConnected }) => {
    const [nftData, setNftData] = useState({
        name: '',
        description: '',
        price: '',
        royalties: ''
    });
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string>('');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setFile(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setNftData({
            ...nftData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!walletConnected) {
            toast.error('Please connect your wallet first!');
            return;
        }
        // Here you would implement the actual minting logic
        toast.success('NFT created successfully!');
    };

    return (
        <section id="mint" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-accent-dark to-primary-dark opacity-90" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1642104704074-907c0698b98d')] bg-cover bg-center opacity-5" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-5xl font-bold text-gradient mb-6">Create Your NFT</h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Turn your digital creations into unique NFTs on the blockchain
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="glass-effect rounded-2xl p-8"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-gray-300 mb-2">NFT Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={nftData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-xl bg-primary-dark border border-accent-blue/20 focus:border-accent-blue text-white outline-none transition"
                                    placeholder="Enter NFT name"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 mb-2">Description</label>
                                <textarea
                                    name="description"
                                    value={nftData.description}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-xl bg-primary-dark border border-accent-blue/20 focus:border-accent-blue text-white outline-none transition"
                                    rows={4}
                                    placeholder="Describe your NFT"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-300 mb-2">Price (ETH)</label>
                                    <input
                                        type="number"
                                        name="price"
                                        value={nftData.price}
                                        onChange={handleInputChange}
                                        step="0.001"
                                        min="0"
                                        className="w-full px-4 py-3 rounded-xl bg-primary-dark border border-accent-blue/20 focus:border-accent-blue text-white outline-none transition"
                                        placeholder="0.00"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-300 mb-2">Royalties (%)</label>
                                    <input
                                        type="number"
                                        name="royalties"
                                        value={nftData.royalties}
                                        onChange={handleInputChange}
                                        min="0"
                                        max="15"
                                        className="w-full px-4 py-3 rounded-xl bg-primary-dark border border-accent-blue/20 focus:border-accent-blue text-white outline-none transition"
                                        placeholder="0-15%"
                                        required
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={!walletConnected}
                                className={`w-full py-4 rounded-xl ${
                                    walletConnected
                                        ? 'bg-gradient-to-r from-primary-blue to-accent-blue hover:shadow-lg hover:shadow-primary-blue/20'
                                        : 'bg-gray-600 cursor-not-allowed'
                                } text-white font-semibold transition duration-300 flex items-center justify-center`}
                            >
                                <Plus className="h-5 w-5 mr-2" />
                                Create NFT
                            </button>

                            {!walletConnected && (
                                <div className="flex items-center justify-center text-yellow-400 text-sm mt-2">
                                    <AlertCircle className="h-4 w-4 mr-2" />
                                    Please connect your wallet to mint NFTs
                                </div>
                            )}
                        </form>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="glass-effect rounded-2xl p-8"
                    >
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-white mb-6">Upload NFT File</h3>
                            <div
                                className={`border-2 border-dashed ${
                                    preview ? 'border-accent-blue' : 'border-gray-600'
                                } rounded-xl p-8 transition-colors duration-300`}
                            >
                                {preview ? (
                                    <div className="relative">
                                        <img
                                            src={preview}
                                            alt="NFT Preview"
                                            className="max-h-96 mx-auto rounded-lg"
                                        />
                                        <button
                                            onClick={() => {
                                                setFile(null);
                                                setPreview('');
                                            }}
                                            className="absolute top-2 right-2 p-2 bg-red-500 rounded-full text-white hover:bg-red-600 transition"
                                        >
                                            <X className="h-4 w-4" />
                                        </button>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        <div className="flex justify-center">
                                            <Upload className="h-16 w-16 text-gray-400" />
                                        </div>
                                        <div className="text-gray-400">
                                            <p className="font-medium">Drop your file here, or browse</p>
                                            <p className="text-sm mt-1">Supports JPG, PNG, GIF, MP4, MAX 50MB</p>
                                        </div>
                                    </div>
                                )}
                                <input
                                    type="file"
                                    onChange={handleFileChange}
                                    accept="image/*,video/*"
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                />
                            </div>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-white mb-4">Preview Information</h3>
                            <div className="space-y-4 text-gray-300">
                                <div className="flex items-center">
                                    <ImageIcon className="h-5 w-5 mr-2 text-accent-blue" />
                                    <span>File will be stored on IPFS</span>
                                </div>
                                <div className="flex items-center">
                                    <File className="h-5 w-5 mr-2 text-accent-blue" />
                                    <span>Metadata will be permanently stored</span>
                                </div>
                                <div className="flex items-center">
                                    <Shield className="h-5 w-5 mr-2 text-accent-blue" />
                                    <span>NFT will be minted on Ethereum</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MintNFT;