import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronDown, ChevronUp, Plus, Minus } from "lucide-react";
import img from "../../assets/choose1.jpg";

const data = [
  {
    title: "We have 30 plus years in the building industry",
    content: "Details about experience in the building industry.",
  },
  {
    title: "Quality construction continues after the project",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a metus pellentesque...",
  },
  {
    title: "We use technology to do the job more quickly",
    content: "Details about technology usage.",
  },
  {
    title: "Employees are continually trained on safety issues",
    content: "Details about safety training.",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <motion.div variants={itemVariants} className="mb-3 rounded-lg shadow-md">
      <button
        onClick={onClick}
        className={`flex justify-between items-center w-full px-5 py-3 text-left font-semibold transition-all duration-300 rounded-md ${
          isOpen ? "bg-[#960000] text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
        }`}
      >
        <span className="flex items-center gap-2">
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
          {title}
        </span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-white px-5 py-3 text-sm text-gray-700 border-l-4 border-[#960000]"
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <motion.div variants={containerVariants}>
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold mb-6 border-b-4 border-[#960000] w-fit pb-2"
          >
            WHY CHOOSE US?
          </motion.h2>

          {data.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
              isOpen={activeIndex === index}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            />
          ))}
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex justify-center"
        >
          <img
            src={img}
            alt="Construction Team"
            className="rounded-xl w-full max-w-[550px] h-[350px] object-cover shadow-lg border border-gray-200"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WhyChooseUs;
