// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import img1 from "../assets/main_img1.jpg";
// import img2 from "../assets/main_img2.jpg";
// import img3 from "../assets/main_img3.jpg";

// const slides = [
//   {
//     title: "Build Your Dream Website",
//     description:
//       "We craft scalable and high-performance web solutions for builders and professionals. Our designs blend innovation with practicality to showcase your expertise.",
//     image: img1,
//   },
//   {
//     title: "Reliable & Responsive Design",
//     description:
//       "Whether on a mobile, tablet, or desktop—your site will look flawless. We optimize user experience to increase engagement and trust in your brand.",
//     image: img2,
//   },
//   {
//     title: "Modern UI for Builders",
//     description:
//       "Get noticed with a clean, modern interface built specifically for construction businesses. We focus on usability and aesthetics that convert visitors into clients.",
//     image: img3,
//   },
// ];

// const Hero = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, 4000);
//     return () => clearInterval(timer);
//   }, []);

//   const { title, description, image } = slides[index];

//   return (
//     <section
//       className="relative w-full h-screen bg-cover bg-center flex items-center justify-center transition-all duration-700"
//       style={{ backgroundImage: `url(${image})` }}
//     >
//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black opacity-40 z-0" />

//       {/* Content */}
//       <motion.div
//         className="relative z-10 px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14 lg:px-16 lg:py-16 
//   bg-white/20 border border-white/30 backdrop-blur-xl 
//   rounded-2xl text-center max-w-3xl mx-4 shadow-2xl shadow-white/10"
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ amount: 0.3 }}
//       >
//         <motion.h1
//           className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#960000] mb-4 drop-shadow-lg leading-tight"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ amount: 0.3 }}
//         >
//           {title}
//         </motion.h1>
//         <motion.p
//           className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl text-white drop-shadow-md leading-relaxed"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.2 }}
//           viewport={{ amount: 0.3 }}
//         >
//           {description}
//         </motion.p>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import img1 from "../../assets/main_img1.jpg";
// import img2 from "../../assets/main_img2.jpg";
// import img3 from "../../assets/main_img3.jpg";

// const slides = [
//   {
//     title: "Build Your Dream Website",
//     description:
//       "We craft scalable and high-performance web solutions for builders and professionals. Our designs blend innovation with practicality to showcase your expertise.",
//     image: img1,
//   },
//   {
//     title: "Reliable & Responsive Design",
//     description:
//       "Whether on a mobile, tablet, or desktop—your site will look flawless. We optimize user experience to increase engagement and trust in your brand.",
//     image: img2,
//   },
//   {
//     title: "Modern UI for Builders",
//     description:
//       "Get noticed with a clean, modern interface built specifically for construction businesses. We focus on usability and aesthetics that convert visitors into clients.",
//     image: img3,
//   },
// ];

// const Hero = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, 4000);
//     return () => clearInterval(timer);
//   }, []);

//   const { title, description, image } = slides[index];

//   return (
//     <section
//       className="relative w-full h-screen bg-cover bg-center flex items-center justify-center transition-all duration-700"
//       style={{ backgroundImage: `url(${image})` }}
//     >
//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black opacity-40 z-0" />

//       {/* Content */}
//       <motion.div
//         className="relative z-10 px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14 lg:px-16 lg:py-16 
//   bg-white/20 border border-white/30 backdrop-blur-xl 
//   rounded-2xl text-center max-w-3xl mx-4 shadow-2xl shadow-white/10"
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ amount: 0.3 }}
//       >
//         <motion.h1
//           className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#960000] mb-4 drop-shadow-lg leading-tight"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ amount: 0.3 }}
//         >
//           {title}
//         </motion.h1>

//         <motion.p
//           className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl text-white drop-shadow-md leading-relaxed"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.2 }}
//           viewport={{ amount: 0.3 }}
//         >
//           {description}
//         </motion.p>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/hero-1.png";
import img2 from "../../assets/hero-2.png";
import img3 from "../../assets/hero-3.png";

const slides = [
  {
    title: "Building Tomorrow's Infrastructure",
    description: "With over 25 years of experience, we deliver exceptional construction projects that stand the test of time. From residential to commercial, we build with precision and care.",
    image: img1,
    buttonText: "Start Your Project →",
    secondaryButton: "View Our Work",
    layout: "layout1"
  },
  {
    title: "Creating a Better Tomorrow, One Home at a Time",
    description: "We've built a reputation for delivering exceptional results and exceeding our clients' expectations. From luxurious residential homes to state-of-the-art commercial properties, our team of experts is dedicated to bringing your vision to life.",
    image: img2,
    buttonText: "Learn More",
    secondaryButton: "",
    layout: "layout2"
  },
  {
    title: "Your Vision. Our Craft.",
    description: "A Sacred Interior Transformed.",
    subDescription: "25 Years of Experience",
    image: img3,
    buttonText: "Contact Us",
    secondaryButton: "",
    layout: "layout3"
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const { title, description, subDescription, image, buttonText, secondaryButton, layout } = slides[index];

  const renderLayout1 = () => (
    <div className="relative z-10 px-6 text-left max-w-4xl mx-4">
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 drop-shadow-lg leading-tight"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        key={index}
      >
        {title}
      </motion.h1>

      <motion.p
        className="text-xl sm:text-2xl md:text-2xl lg:text-3xl text-white mb-10 leading-relaxed max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        key={`desc-${index}`}
      >
        {description}
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <button
          className="bg-[#8B0000] hover:bg-[#700000] text-white font-semibold py-4 px-10 rounded-none text-lg sm:text-xl transition duration-300 shadow-lg min-w-[220px]"
        >
          {buttonText}
        </button>

        {secondaryButton && (
          <button
            className="bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-10 rounded-none text-lg sm:text-xl border-2 border-white transition duration-300 min-w-[220px]"
          >
            {secondaryButton}
          </button>
        )}
      </motion.div>
    </div>
  );

  const renderLayout2 = () => (
    <div className="relative z-10 px-6 text-center max-w-5xl mx-4">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 drop-shadow-lg leading-tight"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        key={index}
      >
        {title}
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-white mb-10 leading-relaxed max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        key={`desc-${index}`}
      >
        {description}
      </motion.p>

      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <button
          className="bg-[#8B0000] hover:bg-[#700000] text-white font-semibold py-4 px-10 rounded-none text-lg sm:text-xl transition duration-300 shadow-lg min-w-[220px]"
        >
          {buttonText}
        </button>
      </motion.div>
    </div>
  );

  const renderLayout3 = () => (
    <div className="relative z-10 px-6 text-center max-w-4xl mx-4">
      <motion.h1
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-lg leading-tight"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        key={index}
      >
        {title}
      </motion.h1>

      <motion.div
        className="space-y-4 mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        key={`desc-${index}`}
      >
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-white drop-shadow-md">
          {description}
        </p>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-3xl text-white drop-shadow-md">
          {subDescription}
        </p>
      </motion.div>

      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <button
          className="bg-[#8B0000] hover:bg-[#700000] text-white font-semibold py-4 px-10 rounded-none text-lg sm:text-xl transition duration-300 shadow-lg min-w-[220px]"
        >
          {buttonText}
        </button>
      </motion.div>
    </div>
  );

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center transition-all duration-700"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-0" />

      {/* Render appropriate layout based on slide */}
      {layout === "layout1" && (
        <div className="w-full px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          {renderLayout1()}
        </div>
      )}
      
      {layout === "layout2" && (
        <div className="w-full flex justify-center">
          {renderLayout2()}
        </div>
      )}
      
      {layout === "layout3" && (
        <div className="w-full flex justify-center">
          {renderLayout3()}
        </div>
      )}
    </section>
  );
};

export default Hero;