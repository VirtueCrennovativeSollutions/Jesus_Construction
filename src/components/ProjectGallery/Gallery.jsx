// import React, { useState, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, ZoomIn, ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";

// // Import your gallery images and videos
// import img1 from "../../assets/img_1.jpg";
// import img2 from "../../assets/img_2.jpg";
// import img3 from "../../assets/img_3.jpg";
// import img4 from "../../assets/img_4.jpg";
// import img5 from "../../assets/img_5.jpg";
// import img6 from "../../assets/img_6.jpg";
// import img7 from "../../assets/img_7.jpg";
// import img8 from "../../assets/img_8.jpg";
// import img9 from "../../assets/img_9.jpg";
// import img10 from "../../assets/img_10.jpg";
// import img11 from "../../assets/img_11.jpg";
// import img12 from "../../assets/img_12.jpg"
// import project1 from "../../assets/project1.mp4";
// import project2 from "../../assets/project2.mp4";
// import project3 from "../../assets/project3.mp4";

// const highlightVideos = [
//   {
//     id: "video1",
//     title: "Luxury Residential Complex",
//     description: "A modern 25-story residential building with premium amenities",
//     video: project1,
//     thumbnail: img1,
//     duration: "2:45",
//     features: ["Swimming Pool", "Gym", "Landscaped Garden"]
//   },
//   {
//     id: "video2",
//     title: "Commercial Office Tower",
//     description: "State-of-the-art commercial space with smart building technology",
//     video: project2,
//     thumbnail: img11,
//     duration: "3:20",
//     features: ["Smart Lighting", "Conference Rooms", "Parking Facility"]
//   },
//   {
//     id: "video3",
//     title: "Community Church Project",
//     description: "Sacred space construction with intricate architectural details",
//     video: project3,
//     thumbnail: img12,
//     duration: "4:15",
//     features: ["Handcrafted Woodwork", "Stained Glass", "Acoustic Design"]
//   }
// ];

// const galleryImages = [
//   { id: 1, title: "Saint Roque Church", image: img1 },
//   { id: 2, title: "Saint Paul Church", image: img2 },
//   { id: 3, title: "Saint Mother Teresa Church", image: img3 },
//   { id: 4, title: "Holy Mary Convent", image: img4 },
//   { id: 5, title: "Nirmala Niketan College", image: img5 },
//   { id: 6, title: "Gangangaon Junior College", image: img6 },
//   { id: 7, title: "Jeevan Jal Hospital", image: img7 },
//   { id: 8, title: "Agrawal Residential Complex", image: img8 },
//   { id: 9, title: "Ashirwad Residential Complex", image: img9 },
//   { id: 10, title: "St. Mathews Tamil Church", image: img10 },
// ];

// export default function Gallery() {
//   const [selectedIndex, setSelectedIndex] = useState(null);
//   const [selectedVideo, setSelectedVideo] = useState(null);
//   const [isSlideshowPlaying, setIsSlideshowPlaying] = useState(false);
//   const [isMuted, setIsMuted] = useState(true);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoRef = useRef(null);

//   const nextImage = () => {
//     setSelectedIndex((prev) => 
//       prev === galleryImages.length - 1 ? 0 : prev + 1
//     );
//   };

//   const prevImage = () => {
//     setSelectedIndex((prev) => 
//       prev === 0 ? galleryImages.length - 1 : prev - 1
//     );
//   };

//   const togglePlayPause = () => {
//     if (videoRef.current) {
//       if (videoRef.current.paused) {
//         videoRef.current.play();
//         setIsPlaying(true);
//       } else {
//         videoRef.current.pause();
//         setIsPlaying(false);
//       }
//     }
//   };

//   const toggleMute = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = !videoRef.current.muted;
//       setIsMuted(videoRef.current.muted);
//     }
//   };

//   const toggleFullscreen = () => {
//     if (videoRef.current) {
//       if (!document.fullscreenElement) {
//         videoRef.current.requestFullscreen();
//       } else {
//         document.exitFullscreen();
//       }
//     }
//   };

//   // Auto slideshow
//   React.useEffect(() => {
//     if (isSlideshowPlaying && selectedIndex !== null) {
//       const interval = setInterval(() => {
//         nextImage();
//       }, 3000);
//       return () => clearInterval(interval);
//     }
//   }, [isSlideshowPlaying, selectedIndex]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         {/* Section Title */}
//         <motion.div 
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h1 className="text-4xl md:text-5xl font-bold text-[#960000] mb-4">
//             Our Project Gallery
//           </h1>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//             Explore our portfolio of exceptional construction projects that showcase our expertise, precision, and dedication to quality craftsmanship.
//           </p>
//         </motion.div>

//         {/* Highlight Videos Section */}
//         <div className="mb-20">
//           <div className="flex items-center justify-between mb-8">
//             <motion.h2 
//               className="text-3xl font-bold text-gray-800"
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <span className="text-[#960000]">Featured</span> Video Projects
//             </motion.h2>
//             <div className="text-sm text-gray-500 bg-gray-100 px-4 py-2 rounded-full">
//               Click to watch full project walkthrough
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {highlightVideos.map((video, index) => (
//               <motion.div
//                 key={video.id}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -5 }}
//                 className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
//                 onClick={() => setSelectedVideo(video)}
//               >
//                 {/* Video Thumbnail with Play Button */}
//                 <div className="relative aspect-video overflow-hidden">
//                   <img 
//                     src={video.thumbnail} 
//                     alt={video.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
//                   {/* Play Button Overlay */}
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="w-20 h-20 rounded-full bg-[#960000] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-2xl">
//                       <Play size={32} className="text-white ml-1" />
//                     </div>
//                   </div>

//                   {/* Duration Badge */}
//                   <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
//                     {video.duration}
//                   </div>

//                   {/* Features Tags */}
//                   <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
//                     {video.features.map((feature, i) => (
//                       <span key={i} className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
//                         {feature}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Video Info */}
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#960000] transition-colors duration-300">
//                     {video.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm mb-4">
//                     {video.description}
//                   </p>
//                   <div className="flex items-center justify-between">
//                     <span className="text-[#960000] font-semibold text-sm flex items-center">
//                       <Play size={16} className="mr-2" />
//                       Watch Project
//                     </span>
//                     <span className="text-gray-400 text-sm">
//                       Click to play
//                     </span>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Photo Gallery Section */}
//         <div className="mt-16">
//           <div className="flex items-center justify-between mb-8">
//             <motion.h2 
//               className="text-3xl font-bold text-gray-800"
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <span className="text-[#960000]">Project</span> Photo Gallery
//             </motion.h2>
//             <div className="text-sm text-gray-500">
//               {galleryImages.length} Projects
//             </div>
//           </div>

//           {/* Gallery Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {galleryImages.map((item, index) => (
//               <motion.div
//                 key={item.id}
//                 initial={{ opacity: 0, scale: 0.9, y: 20 }}
//                 whileInView={{ opacity: 1, scale: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -8, scale: 1.02 }}
//                 className="
//                   aspect-[4/3] cursor-pointer 
//                   rounded-2xl overflow-hidden group
//                   bg-white shadow-xl hover:shadow-2xl
//                   transition-all duration-500
//                   relative
//                   border-2 border-transparent hover:border-[#960000]/20
//                 "
//                 onClick={() => setSelectedIndex(index)}
//               >
//                 {/* Image Container */}
//                 <div className="relative w-full h-full overflow-hidden">
//                   <motion.img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-full h-full object-cover"
//                     whileHover={{ scale: 1.1 }}
//                     transition={{ duration: 0.6 }}
//                   />

//                   {/* Gradient Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

//                   {/* Hover Overlay */}
//                   <div className="absolute inset-0 bg-[#960000]/20 opacity-0 group-hover:opacity-100 
//                                   transition-all duration-500 flex flex-col items-center justify-center text-white p-4">
//                     <motion.div
//                       initial={{ scale: 0, opacity: 0 }}
//                       whileHover={{ scale: 1, opacity: 1 }}
//                       transition={{ duration: 0.3 }}
//                       className="text-center"
//                     >
//                       <motion.div
//                         whileHover={{ scale: 1.1, rotate: 5 }}
//                         className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-4"
//                       >
//                         <ZoomIn size={32} className="text-white" />
//                       </motion.div>
//                       <h3 className="text-xl font-bold mb-2 drop-shadow-lg">{item.title}</h3>
//                       <p className="text-gray-200 text-sm font-medium">View Full Project</p>
//                     </motion.div>
//                   </div>

//                   {/* Number Badge */}
//                   <div className="absolute top-3 left-3 bg-[#960000] text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
//                     {index + 1}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Gallery Stats */}
//         <motion.div 
//           className="mt-16 text-center"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 max-w-md mx-auto">
//             <div className="text-3xl font-bold text-[#960000] mb-2">
//               {galleryImages.length + highlightVideos.length}
//             </div>
//             <div className="text-gray-600 font-semibold">Total Projects Showcased</div>
//             <div className="text-sm text-gray-500 mt-2">
//               {highlightVideos.length} Videos • {galleryImages.length} Photos
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Video Modal */}
//       <AnimatePresence>
//         {selectedVideo && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
//             onClick={() => {
//               setSelectedVideo(null);
//               setIsPlaying(false);
//               setIsMuted(true);
//             }}
//           >
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0, y: 50 }}
//               animate={{ scale: 1, opacity: 1, y: 0 }}
//               exit={{ scale: 0.8, opacity: 0, y: 50 }}
//               transition={{ type: "spring", damping: 25, stiffness: 200 }}
//               className="relative max-w-6xl w-full max-h-[90vh] bg-black rounded-3xl overflow-hidden shadow-2xl"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Close Button */}
//               <motion.button
//                 whileHover={{ scale: 1.1, rotate: 90 }}
//                 whileTap={{ scale: 0.9 }}
//                 className="absolute top-6 right-6 z-20 bg-[#960000] hover:bg-[#7a0000] 
//                            rounded-full p-3 transition-all duration-300 text-white shadow-2xl"
//                 onClick={() => {
//                   setSelectedVideo(null);
//                   setIsPlaying(false);
//                   setIsMuted(true);
//                 }}
//               >
//                 <X size={24} />
//               </motion.button>

//               {/* Video Controls */}
//               <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 
//                              bg-black/60 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-4">
//                 {/* Play/Pause */}
//                 <motion.button
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   className="text-white"
//                   onClick={togglePlayPause}
//                 >
//                   {isPlaying ? <Pause size={24} /> : <Play size={24} />}
//                 </motion.button>

//                 {/* Volume */}
//                 <motion.button
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   className="text-white"
//                   onClick={toggleMute}
//                 >
//                   {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
//                 </motion.button>

//                 {/* Fullscreen */}
//                 <motion.button
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   className="text-white"
//                   onClick={toggleFullscreen}
//                 >
//                   <Maximize2 size={24} />
//                 </motion.button>
//               </div>

//               {/* Video Player */}
//               <div className="flex items-center justify-center h-full p-8">
//                 <video
//                   ref={videoRef}
//                   src={selectedVideo.video}
//                   className="max-w-full max-h-[70vh] object-contain rounded-xl"
//                   controls={false}
//                   autoPlay
//                   muted={isMuted}
//                   onPlay={() => setIsPlaying(true)}
//                   onPause={() => setIsPlaying(false)}
//                   onEnded={() => setIsPlaying(false)}
//                 />
//               </div>

//               {/* Video Info */}
//               <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#960000] to-[#7a0000] 
//                              text-white px-6 py-4 rounded-2xl shadow-2xl min-w-[400px] text-center">
//                 <h3 className="text-xl font-bold mb-1">
//                   {selectedVideo.title}
//                 </h3>
//                 <p className="text-white/80 text-sm mb-2">
//                   {selectedVideo.description}
//                 </p>
//                 <div className="flex items-center justify-center gap-3 text-sm">
//                   {selectedVideo.features.map((feature, index) => (
//                     <span key={index} className="bg-white/20 px-3 py-1 rounded-full">
//                       {feature}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Existing Photo Gallery Modal (Keep as is) */}
//       <AnimatePresence>
//         {selectedIndex !== null && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
//             onClick={() => {
//               setSelectedIndex(null);
//               setIsSlideshowPlaying(false);
//             }}
//           >
//             {/* ... (Keep existing photo modal code exactly as it was) ... */}
//             {/* Full Photo Modal Content Here */}
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0, y: 50 }}
//               animate={{ scale: 1, opacity: 1, y: 0 }}
//               exit={{ scale: 0.8, opacity: 0, y: 50 }}
//               transition={{ type: "spring", damping: 25, stiffness: 200 }}
//               className="relative max-w-6xl w-full max-h-[90vh] bg-black rounded-3xl overflow-hidden shadow-2xl"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Close Button */}
//               <motion.button
//                 whileHover={{ scale: 1.1, rotate: 90 }}
//                 whileTap={{ scale: 0.9 }}
//                 className="absolute top-6 right-6 z-20 bg-[#960000] hover:bg-[#7a0000] 
//                            rounded-full p-3 transition-all duration-300 text-white shadow-2xl"
//                 onClick={() => {
//                   setSelectedIndex(null);
//                   setIsSlideshowPlaying(false);
//                 }}
//               >
//                 <X size={24} />
//               </motion.button>

//               {/* Slideshow Control */}
//               <motion.button
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 className="absolute top-6 left-6 z-20 bg-white/20 hover:bg-white/30 
//                            backdrop-blur-sm rounded-full p-3 transition-all duration-300 text-white shadow-2xl"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   setIsSlideshowPlaying(!isSlideshowPlaying);
//                 }}
//               >
//                 {isSlideshowPlaying ? <Pause size={24} /> : <Play size={24} />}
//               </motion.button>

//               {/* Navigation Buttons */}
//               <motion.button
//                 whileHover={{ scale: 1.1, x: -5 }}
//                 whileTap={{ scale: 0.9 }}
//                 className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 
//                            bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-4 
//                            transition-all duration-300 text-white shadow-2xl"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   prevImage();
//                 }}
//               >
//                 <ChevronLeft size={28} />
//               </motion.button>

//               <motion.button
//                 whileHover={{ scale: 1.1, x: 5 }}
//                 whileTap={{ scale: 0.9 }}
//                 className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 
//                            bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-4 
//                            transition-all duration-300 text-white shadow-2xl"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   nextImage();
//                 }}
//               >
//                 <ChevronRight size={28} />
//               </motion.button>

//               {/* Full Image */}
//               <div className="flex items-center justify-center h-full p-8">
//                 <motion.img
//                   key={selectedIndex}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 1.1 }}
//                   transition={{ duration: 0.4 }}
//                   src={galleryImages[selectedIndex].image}
//                   alt="Preview"
//                   className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl"
//                 />
//               </div>

//               {/* Enhanced Image Info */}
//               <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#960000] to-[#7a0000] 
//                              text-white px-6 py-4 rounded-2xl shadow-2xl min-w-[300px] text-center">
//                 <h3 className="text-xl font-bold mb-1">
//                   {galleryImages[selectedIndex].title}
//                 </h3>
//                 <div className="flex items-center justify-center gap-4 text-sm">
//                   <span className="bg-white/20 px-3 py-1 rounded-full font-medium">
//                     Project {selectedIndex + 1}
//                   </span>
//                   <span className="text-white/80">
//                     {selectedIndex + 1} of {galleryImages.length}
//                   </span>
//                 </div>
//               </div>

//               {/* Thumbnail Strip */}
//               <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-2">
//                 {galleryImages.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       setSelectedIndex(index);
//                     }}
//                     className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                       index === selectedIndex ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'
//                     }`}
//                   />
//                 ))}
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }


import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";

// Import your gallery images and videos
import img1 from "../../assets/img_1.jpg";
import img2 from "../../assets/img_2.jpg";
import img3 from "../../assets/img_3.jpg";
import img4 from "../../assets/img_4.jpg";
import img5 from "../../assets/img_5.jpg";
import img6 from "../../assets/img_6.jpg";
import img7 from "../../assets/img_7.jpg";
import img8 from "../../assets/img_8.jpg";
import img9 from "../../assets/img_9.jpg";
import img10 from "../../assets/img_10.jpg";
import img11 from "../../assets/img_11.jpg";
import img12 from "../../assets/img_12.jpg";
// Commented out to prevent build errors since the large files are ignored in git
// import project1 from "../../assets/project1.mp4";
// import project2 from "../../assets/project2.mp4";
// import project3 from "../../assets/project3.mp4";

// Placeholder videos
const project1 = "https://www.w3schools.com/html/mov_bbb.mp4";
const project2 = "https://www.w3schools.com/html/mov_bbb.mp4";
const project3 = "https://www.w3schools.com/html/mov_bbb.mp4";
const highlightVideos = [
  {
    id: "video1",
    title: "Luxury Residential Complex",
    description: "A modern 25-story residential building with premium amenities",
    video: project1,
    thumbnail: img1,
    duration: "2:45",
    features: ["Swimming Pool", "Gym", "Landscaped Garden"]
  },
  {
    id: "video2",
    title: "Commercial Office Tower",
    description: "State-of-the-art commercial space with smart building technology",
    video: project2,
    thumbnail: img11,
    duration: "3:20",
    features: ["Smart Lighting", "Conference Rooms", "Parking Facility"]
  },
  {
    id: "video3",
    title: "Community Church Project",
    description: "Sacred space construction with intricate architectural details",
    video: project3,
    thumbnail: img12,
    duration: "4:15",
    features: ["Handcrafted Woodwork", "Stained Glass", "Acoustic Design"]
  }
];

const galleryImages = [
  { id: 1, title: "Saint Roque Church", image: img1 },
  { id: 2, title: "Saint Paul Church", image: img2 },
  { id: 3, title: "Saint Mother Teresa Church", image: img3 },
  { id: 4, title: "Holy Mary Convent", image: img4 },
  { id: 5, title: "Nirmala Niketan College", image: img5 },
  { id: 6, title: "Gangangaon Junior College", image: img6 },
  { id: 7, title: "Jeevan Jal Hospital", image: img7 },
  { id: 8, title: "Agrawal Residential Complex", image: img8 },
  { id: 9, title: "Ashirwad Residential Complex", image: img9 },
  { id: 10, title: "St. Mathews Tamil Church", image: img10 },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isSlideshowPlaying, setIsSlideshowPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const nextImage = () => {
    setSelectedIndex((prev) => 
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedIndex((prev) => 
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (!document.fullscreenElement) {
        videoRef.current.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }
  };

  // Auto slideshow
  React.useEffect(() => {
    if (isSlideshowPlaying && selectedIndex !== null) {
      const interval = setInterval(() => {
        nextImage();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isSlideshowPlaying, selectedIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#960000] mb-4">
            Our Project Gallery
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our portfolio of exceptional construction projects that showcase our expertise, precision, and dedication to quality craftsmanship.
          </p>
        </motion.div>

        {/* Highlight Videos Section */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <motion.h2 
              className="text-3xl font-bold text-gray-800"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-[#960000]">Featured</span> Video Projects
            </motion.h2>
            <div className="text-sm text-gray-500 bg-gray-100 px-4 py-2 rounded-full">
              Click to watch full project walkthrough
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlightVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                onClick={() => setSelectedVideo(video)}
              >
                {/* Video Thumbnail with Play Button */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-[#960000] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                      <Play size={32} className="text-white ml-1" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                    {video.duration}
                  </div>

                  {/* Features Tags - REMOVED FROM THUMBNAIL */}
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#960000] transition-colors duration-300">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#960000] font-semibold text-sm flex items-center">
                      <Play size={16} className="mr-2" />
                      Watch Project
                    </span>
                    <span className="text-gray-400 text-sm">
                      Click to play
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Photo Gallery Section */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <motion.h2 
              className="text-3xl font-bold text-gray-800"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-[#960000]">Project</span> Photo Gallery
            </motion.h2>
            <div className="text-sm text-gray-500">
              {galleryImages.length} Projects
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="
                  aspect-[4/3] cursor-pointer 
                  rounded-2xl overflow-hidden group
                  bg-white shadow-xl hover:shadow-2xl
                  transition-all duration-500
                  relative
                  border-2 border-transparent hover:border-[#960000]/20
                "
                onClick={() => setSelectedIndex(index)}
              >
                {/* Image Container */}
                <div className="relative w-full h-full overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#960000]/20 opacity-0 group-hover:opacity-100 
                                  transition-all duration-500 flex flex-col items-center justify-center text-white p-4">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-center"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-4"
                      >
                        <ZoomIn size={32} className="text-white" />
                      </motion.div>
                      <h3 className="text-xl font-bold mb-2 drop-shadow-lg">{item.title}</h3>
                      <p className="text-gray-200 text-sm font-medium">View Full Project</p>
                    </motion.div>
                  </div>

                  {/* Number Badge */}
                  <div className="absolute top-3 left-3 bg-[#960000] text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    {index + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gallery Stats */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 max-w-md mx-auto">
            <div className="text-3xl font-bold text-[#960000] mb-2">
              {galleryImages.length + highlightVideos.length}
            </div>
            <div className="text-gray-600 font-semibold">Total Projects Showcased</div>
            <div className="text-sm text-gray-500 mt-2">
              {highlightVideos.length} Videos • {galleryImages.length} Photos
            </div>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => {
              setSelectedVideo(null);
              setIsPlaying(false);
              setIsMuted(true);
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-6xl w-full max-h-[90vh] bg-black rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-6 right-6 z-20 bg-[#960000] hover:bg-[#7a0000] 
                           rounded-full p-3 transition-all duration-300 text-white shadow-2xl"
                onClick={() => {
                  setSelectedVideo(null);
                  setIsPlaying(false);
                  setIsMuted(true);
                }}
              >
                <X size={24} />
              </motion.button>

              {/* Video Controls */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 
                             bg-black/60 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-4">
                {/* Play/Pause */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white"
                  onClick={togglePlayPause}
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                </motion.button>

                {/* Volume */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white"
                  onClick={toggleMute}
                >
                  {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                </motion.button>

                {/* Fullscreen */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white"
                  onClick={toggleFullscreen}
                >
                  <Maximize2 size={24} />
                </motion.button>
              </div>

              {/* Video Player */}
              <div className="flex items-center justify-center h-full p-8">
                <video
                  ref={videoRef}
                  src={selectedVideo.video}
                  className="max-w-full max-h-[70vh] object-contain rounded-xl"
                  controls={false}
                  autoPlay
                  muted={isMuted}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                />
              </div>

              {/* Video Info - REMOVED FEATURES SECTION */}
              <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#960000] to-[#7a0000] 
                             text-white px-6 py-4 rounded-2xl shadow-2xl min-w-[400px] text-center">
                <h3 className="text-xl font-bold mb-1">
                  {selectedVideo.title}
                </h3>
                <p className="text-white/80 text-sm mb-2">
                  {selectedVideo.description}
                </p>
                {/* REMOVED FEATURES TAGS */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Existing Photo Gallery Modal (Keep as is) */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => {
              setSelectedIndex(null);
              setIsSlideshowPlaying(false);
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-6xl w-full max-h-[90vh] bg-black rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-6 right-6 z-20 bg-[#960000] hover:bg-[#7a0000] 
                           rounded-full p-3 transition-all duration-300 text-white shadow-2xl"
                onClick={() => {
                  setSelectedIndex(null);
                  setIsSlideshowPlaying(false);
                }}
              >
                <X size={24} />
              </motion.button>

              {/* Slideshow Control */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-6 left-6 z-20 bg-white/20 hover:bg-white/30 
                           backdrop-blur-sm rounded-full p-3 transition-all duration-300 text-white shadow-2xl"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsSlideshowPlaying(!isSlideshowPlaying);
                }}
              >
                {isSlideshowPlaying ? <Pause size={24} /> : <Play size={24} />}
              </motion.button>

              {/* Navigation Buttons */}
              <motion.button
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 
                           bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-4 
                           transition-all duration-300 text-white shadow-2xl"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
              >
                <ChevronLeft size={28} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 
                           bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-4 
                           transition-all duration-300 text-white shadow-2xl"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
              >
                <ChevronRight size={28} />
              </motion.button>

              {/* Full Image */}
              <div className="flex items-center justify-center h-full p-8">
                <motion.img
                  key={selectedIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  src={galleryImages[selectedIndex].image}
                  alt="Preview"
                  className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl"
                />
              </div>

              {/* Enhanced Image Info */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#960000] to-[#7a0000] 
                             text-white px-6 py-4 rounded-2xl shadow-2xl min-w-[300px] text-center">
                <h3 className="text-xl font-bold mb-1">
                  {galleryImages[selectedIndex].title}
                </h3>
                <div className="flex items-center justify-center gap-4 text-sm">
                  <span className="bg-white/20 px-3 py-1 rounded-full font-medium">
                    Project {selectedIndex + 1}
                  </span>
                  <span className="text-white/80">
                    {selectedIndex + 1} of {galleryImages.length}
                  </span>
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedIndex(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === selectedIndex ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}