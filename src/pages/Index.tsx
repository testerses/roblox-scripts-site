
import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import ScriptCard from "../components/ScriptCard";
import { Carousel, CarouselContent, CarouselItem } from "../components/ui/carousel";

const Index = () => {
  const scripts = [
    {
      title: "ROBLOX - BROOKHAVEN GAMEPASS, FLY, TP & More!",
      description: "Unlock premium features in Brookhaven RP! Get all gamepasses, fly anywhere, teleport to locations, Troll,Items. Pastebin keyless",
      imageUrl: "/lovable-uploads/729130c1-2b1e-4b5b-8953-73055b09cb82.png",
      downloadUrl: "https://rawscripts.net/raw/Brookhaven-RP-ARCHON-HUB-31730",
      viewUrl: "https://discord.gg/rKSkCkgasK"
    },
    // ... keep existing code (the rest of the scripts array)
  ];

  const exploits = [
    {
      title: "Xeno",
      description: "Free executor by far the best for Roblox. Features a clean UI, script hub, and reliable execution.",
      downloadUrl: "https://shorturl.at/kuYdO",
      viewUrl: "https://discord.gg/getxeno",
      isExploit: true
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1.0] // ease-out-cubic
      }
    }
  };

  return (
    <div className="min-h-screen w-full relative">
      <Navbar />
      
      {/* Skyscraper ads with image and link - left and right sides */}
      <a 
        href="https://www.roblox.com/catalog/101339131966965/ICB-Urban-Wear" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hidden lg:block fixed left-0 top-0 bottom-0 w-[120px] z-10"
      >
        <div className="h-full w-full flex items-center justify-center border-r border-gray-800 bg-roblox-dark/50 overflow-hidden">
          <img 
            src="/lovable-uploads/b4459c51-db76-4fd8-bc5e-1180c5218402.png" 
            alt="Urban Lifestyle Ad" 
            className="h-auto max-h-full w-full object-contain"
          />
        </div>
      </a>
      <a 
        href="https://www.roblox.com/catalog/101339131966965/ICB-Urban-Wear" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hidden lg:block fixed right-0 top-0 bottom-0 w-[120px] z-10"
      >
        <div className="h-full w-full flex items-center justify-center border-l border-gray-800 bg-roblox-dark/50 overflow-hidden">
          <img 
            src="/lovable-uploads/b4459c51-db76-4fd8-bc5e-1180c5218402.png" 
            alt="Urban Lifestyle Ad" 
            className="h-auto max-h-full w-full object-contain"
          />
        </div>
      </a>
      
      <motion.div 
        initial="hidden"
        animate="show"
        variants={container}
        className="container mx-auto pt-24 pb-16 px-4 lg:px-[140px]"
      >
        <motion.div
          variants={item}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            The Best <span className="text-roblox-blue">Roblox Scripts</span> & Executor
          </h1>
          <p className="text-gray-400 text-lg text-center max-w-2xl mx-auto">
            Get access to powerful scripts and the best free executor for Roblox games. Dominate 
            any game with our high-quality scripts.
          </p>
        </motion.div>

        // ... keep existing code (the rest of the component sections including Featured Scripts, Recommended Executor, and Join Our Community)
      </motion.div>
    </div>
  );
};

export default Index;
