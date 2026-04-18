import React from "react";
import { motion } from "framer-motion";
// Commented out to prevent build errors since the large files are ignored in git
// import video1 from "../../assets/project1.mp4";
// import video2 from "../../assets/project2.mp4";
// import video3 from "../../assets/project3.mp4";

// Placeholder videos
const video1 = "https://www.w3schools.com/html/mov_bbb.mp4";
const video2 = "https://www.w3schools.com/html/mov_bbb.mp4";
const video3 = "https://www.w3schools.com/html/mov_bbb.mp4";
// Video files in public folder
const videos = [
  {
    id: 1,
    title: "Saint Roque Church Project",
    desc: "A modern architecture design delivering structural excellence.",
    video: video1, // Video in public/videos folder
  },
  {
    id: 2,
    title: "Nirmala Niketan College",
    desc: "A large-scale institutional project completed with premium quality.",
    video: video2, // Video in public/videos folder
  },
  {
    id: 3,
    title: "Residential Housing Complex",
    desc: "A beautiful residential complex built with durable construction.",
    video: video3, // Video in public/videos folder
  },
];

export default function TopProjects() {
  return (
    <div className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#960000] mb-12">
        Our Top Projects
      </h2>

      {/* PROJECT CARDS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {videos.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative group rounded-xl shadow-lg overflow-hidden bg-white"
          >
            {/* VIDEO */}
            <motion.video
              src={project.video}
              alt={project.title}
              className="w-full h-72 object-cover transition-all duration-500 group-hover:scale-110"
              muted
              loop
              playsInline
              autoPlay
            />

            {/* IMPROVED OVERLAY */}
            <div
              className="absolute inset-0 bg-black/60 opacity-0
              group-hover:opacity-100 transition duration-500 flex flex-col 
              justify-center items-center text-center px-4"
            >
              <h3 className="text-white text-2xl font-bold drop-shadow-lg">
                {project.title}
              </h3>

              <p className="text-white/90 text-lg mt-2 drop-shadow-lg">
                {project.desc}
              </p>
            </div>

            {/* GLASS TITLE BAR */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md p-3 shadow-md">
              <p className="text-center text-[#960000] font-semibold">
                {project.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}