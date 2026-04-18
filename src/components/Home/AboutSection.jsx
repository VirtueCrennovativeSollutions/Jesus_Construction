import React from "react";
import { motion } from "framer-motion";
import builder1 from "../../assets/builder1.jpg";
import builder2 from "../../assets/builder2.jpg";

export default function AboutSection() {
  return (
    <div className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#960000] mb-14">
        Our Leaders
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">



        {/* PERSON 2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl duration-300"
        >
          <div className="flex justify-center mb-5">
            <img
              src={builder2}
              alt="Founder 2"
              className="rounded-xl w-56 h-56 object-cover shadow-md"
            />
          </div>

          <h3 className="text-2xl font-semibold text-[#004d2a] text-center">
            Mr. Joseph Lopes

          </h3>
          <p className="text-gray-600 text-center text-lg">
            Founder & Director
          </p>
        </motion.div>

        {/* PERSON 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl duration-300"
        >
          <div className="flex justify-center mb-5">
            <img
              src={builder1}
              alt="Founder 1"
              className="rounded-xl w-56 h-56 object-cover shadow-md"
            />
          </div>

          <h3 className="text-2xl font-semibold text-[#960000] text-center">
            Mr. Jojal Lopes
          </h3>
          <p className="text-gray-600 text-center text-lg">
            Chief Civil Engineer
          </p>
        </motion.div>

      </div>
    </div>
  );
}
