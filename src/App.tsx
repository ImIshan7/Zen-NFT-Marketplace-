import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import NFTCard from './components/NFTCard';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Trending from './components/Trending';
import Roadmap from './components/Roadmap';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Events from './components/Events';
import Community from './components/Community';
import Analytics from './components/Analytics';
import CreatorProfile from './components/CreatorProfile';
import MintNFT from './components/MintNFT';

import Digital from './assets/images/featured01.jpg';
import Neon from './assets/images/featured02.jpg';
function App() {
  const [walletConnected, setWalletConnected] = useState(false);

  const featuredNFTs = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1645378999013-95abebf5f3c1",
      name: "Cosmic Dreamer #1",
      price: "2.5",
      creator: "@cosmic_artist",
      likes: 234,
      endTime: "2h 45m",
      highestBid: "2.6",
      description:
          "A mesmerizing piece that captures the essence of cosmic dreams and celestial wonders.",
    },
    {
      id: 2,
      image:Digital,
      name: "Digital Horizon",
      price: "1.8",
      creator: "@future_labs",
      likes: 189,
      description: "An exploration of the digital frontier where reality meets imagination.",
    },
    {
      id: 3,
      image: Neon,
      name: "Neon Genesis",
      price: "3.2",
      creator: "@neon_master",
      likes: 345,
      endTime: "23h 12m",
      highestBid: "3.4",
      description: "A vibrant fusion of neon aesthetics and cyberpunk culture.",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1643101452019-bc00c9bba76b",
      name: "Abstract Reality",
      price: "1.5",
      creator: "@abstract_mind",
      likes: 156,
      description: "Where abstract thoughts materialize into digital reality.",
    },
  ];


  return (
      <div className="min-h-screen bg-primary-dark">
       <Navbar/>
        <Hero />
        <About />
        <Trending />

        <section id="nfts" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Featured NFTs</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover the most outstanding NFTs in all topics of life. Creative artwork, music,
              videos, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredNFTs.map((nft) => (
                <NFTCard key={nft.id} {...nft} />
            ))}
          </div>
        </section>

        <MintNFT walletConnected={walletConnected} />
        <CreatorProfile />
        <Services />
        <Events />
        <Roadmap />
        <Blog />
        <FAQ />
        <Analytics />
        <Community />
        <Contact />
        <Footer />
        <Toaster position="bottom-right" />
      </div>
  );
}

export default App;
