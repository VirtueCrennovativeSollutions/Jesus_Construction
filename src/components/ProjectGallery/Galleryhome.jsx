import React from "react";
import { motion } from "framer-motion";
import projectImg from "../../assets/hero-3.png";

const Galleryhome = () => {
  return (
    <div className="relative">
      {/* Hero Banner */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <motion.img
          src={projectImg}
          alt="Projects Banner"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>

        {/* Main Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                  Project <span className="text-[#960000]">View</span>
                </h1>
                
                <motion.p 
                  className="text-lg text-gray-200 leading-relaxed"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Explore our comprehensive project gallery and detailed case studies.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galleryhome;