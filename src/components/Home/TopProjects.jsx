import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import img1 from "../../assets/img_1.JPG";
import img5 from "../../assets/img_5.JPG";
import img9 from "../../assets/img_9.JPG";

const videos = [
  {
    id: 1,
    title: "Saint Roque Church Project",
    desc: "A modern architecture design delivering structural excellence.",
    // First 6 seconds, then loops
    embedUrl: "https://www.youtube.com/embed/N-f4PKNkej8?si=4PNI-7JXRU5-A8Nc&autoplay=1&start=0&end=6&loop=1&playlist=N-f4PKNkej8&controls=1",
    thumbnail: img1,
  },
  {
    id: 2,
    title: "Nirmala Niketan College",
    desc: "A large-scale institutional project completed with premium quality.",
    // Second link — first 6 seconds
    embedUrl: "https://www.youtube.com/embed/N-f4PKNkej8?si=0uDwtJfHJU63gMDl&autoplay=1&start=0&end=6&loop=1&playlist=N-f4PKNkej8&controls=1",
    thumbnail: img5,
  },
  {
    id: 3,
    title: "Residential Housing Complex",
    desc: "A beautiful residential complex built with durable construction.",
    // Different start time to make it feel like a different clip
    embedUrl: "https://www.youtube.com/embed/N-f4PKNkej8?si=4PNI-7JXRU5-A8Nc&autoplay=1&start=6&end=12&loop=1&playlist=N-f4PKNkej8&controls=1",
    thumbnail: img9,
  },
];

export default function TopProjects() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <div className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#960000] mb-12">
        Our Top Projects
      </h2>

      {/* PROJECT CARDS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative group rounded-xl shadow-lg overflow-hidden bg-gray-900 cursor-pointer"
            onClick={() => setActiveVideo(project)}
          >
            {/* THUMBNAIL IMAGE */}
            <div className="relative w-full h-64 overflow-hidden">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300" />

              {/* PLAY BUTTON */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-16 h-16 bg-[#960000]/90 hover:bg-[#960000] rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm border-2 border-white/30 transition-all duration-300"
                >
                  <Play className="w-7 h-7 text-white ml-1" fill="white" />
                </motion.div>
              </div>
            </div>

            {/* TITLE BAR */}
            <div className="p-4 bg-white">
              <p className="text-center text-[#960000] font-semibold text-lg">{project.title}</p>
              <p className="text-center text-gray-500 text-sm mt-1">{project.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 z-20 bg-[#960000] hover:bg-[#7a0000] rounded-full p-2 text-white shadow-lg transition-all duration-200"
                onClick={() => setActiveVideo(null)}
              >
                <X size={20} />
              </button>

              {/* YouTube Embed */}
              <div className="relative pt-[56.25%]">
                <iframe
                  src={activeVideo.embedUrl}
                  className="absolute inset-0 w-full h-full border-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  title={activeVideo.title}
                />
              </div>

              {/* Video Title */}
              <div className="p-4 bg-gradient-to-r from-[#960000] to-[#7a0000] text-white text-center">
                <h3 className="text-xl font-bold">{activeVideo.title}</h3>
                <p className="text-white/80 text-sm mt-1">{activeVideo.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}